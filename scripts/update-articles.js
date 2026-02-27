const fs = require('fs');
const path = require('path');

const articlesMD = fs.readFileSync(path.join(__dirname, '../public/content_folder/Articles.md'), 'utf8');
const nodesJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/data/nodes.json'), 'utf8'));

function normalize(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/[:\"'""\-_,.®()]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\+/g, 'and')
    .replace(/&/g, 'and')
    .trim();
}

// Split by ## (article headers)
// Handle both cases: file starting with ## and sections separated by \n##
let sections = [];
if (articlesMD.startsWith('## ')) {
  sections = articlesMD.split(/^## /m).filter(s => s.trim());
} else {
  sections = articlesMD.split(/\n## /).filter(s => s.trim());
}

// Filter out non-article sections
sections = sections.filter(s => {
  const trimmed = s.trim();
  return trimmed && 
         !trimmed.startsWith('Essay Abstracts') && 
         !trimmed.match(/^Note:/i) &&
         trimmed.length > 50;
});

const articleMap = {};

sections.forEach((section, index) => {
  const lines = section.split('\n');
  let firstLine = lines[0] ? lines[0].trim() : '';
  
  // Skip if first line looks like metadata
  if (!firstLine || firstLine.startsWith('[') || firstLine.startsWith('![')) {
    return;
  }
  
  let title = firstLine.replace(/^["']|["']$/g, '').trim();
  
  // Skip if title is too short or looks like a reference
  if (!title || title.length < 10 || title.includes('[image')) {
    return;
  }
  
  let author = '';
  const authorMatch = section.match(/### By ([^\n]+)/);
  if (authorMatch) {
    author = authorMatch[1].trim();
  }
  
  // Also try "###" format for author (some have different formatting)
  if (!author) {
    const authorMatch2 = section.match(/#{1,3} By ([^\n]+)/);
    if (authorMatch2) {
      author = authorMatch2[1].trim();
    }
  }
  
  let abstract = '';
  let authorBio = '';
  
  const abstractStart = section.indexOf('#### Abstract');
  if (abstractStart !== -1) {
    const afterAbstract = section.substring(abstractStart + '#### Abstract'.length);
    
    const nextHeaderMatch = afterAbstract.match(/^([\s\S]*?)(?=\n#### (?:Author|Authors)['s]?\s*(?:Biography|Biographies))/i);
    
    if (nextHeaderMatch) {
      abstract = nextHeaderMatch[1]
        .replace(/!\[.*?\]\[.*?\]/g, '')
        .replace(/\[.*?\]\[.*?\]/g, '')
        .replace(/^#+\s*/gm, '')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    } else {
      const bioMatch = afterAbstract.search(/\n#### .*[Aa]uthor.*[Bb]iograph/i);
      if (bioMatch !== -1) {
        abstract = afterAbstract.substring(0, bioMatch)
          .replace(/!\[.*?\]\[.*?\]/g, '')
          .replace(/\[.*?\]\[.*?\]/g, '')
          .replace(/^#+\s*/gm, '')
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
      }
    }
    
    const bioHeaderPattern = /####\s+(?:Author|Authors)[\u2019's]?\s*(?:Biography|Biographies)/i;
    const bioHeaderIndex = section.search(bioHeaderPattern);
    if (bioHeaderIndex !== -1) {
      const bioHeaderMatch = section.substring(bioHeaderIndex).match(bioHeaderPattern);
      if (bioHeaderMatch) {
        const afterBioHeader = section.substring(bioHeaderIndex + bioHeaderMatch[0].length);
        const nextArticleIndex = afterBioHeader.search(/\n## /);
        const bioText = nextArticleIndex !== -1 
          ? afterBioHeader.substring(0, nextArticleIndex)
          : afterBioHeader;
        
        if (bioText && bioText.trim().length > 50) {
          authorBio = bioText
            .replace(/!\[.*?\]\[.*?\]/g, '')
            .replace(/\[.*?\]:.*$/gm, '')
            .replace(/\[image\d+\]:.*$/gm, '')
            .replace(/\[.*?\]\[.*?\]/g, '')
            .replace(/^#+\s*/gm, '')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
          
          const imageMarkerIndex = authorBio.indexOf('[image');
          if (imageMarkerIndex !== -1) {
            authorBio = authorBio.substring(0, imageMarkerIndex).trim();
          }
          
          if (authorBio && authorBio.length < 50) {
            authorBio = '';
          }
        }
      }
    }
  }
  
  if (title && author && abstract && abstract.length > 50) {
    const normTitle = normalize(title);
    const normAuthor = normalize(author);
    const key = normTitle + '|' + normAuthor;
    articleMap[key] = { title, author, abstract, authorBio };
  }
});

console.log('Parsed', Object.keys(articleMap).length, 'articles from Articles.md');

let updated = 0;
let notFound = [];

nodesJSON.articles.forEach(article => {
  const normTitle = normalize(article.title);
  const normAuthor = normalize(article.author);
  let key = normTitle + '|' + normAuthor;
  
  let found = articleMap[key];
  
  if (!found) {
    for (const [mapKey, value] of Object.entries(articleMap)) {
      const [mapTitle, mapAuthor] = mapKey.split('|');
      const titleMatch = normTitle.includes(mapTitle) || mapTitle.includes(normTitle) || 
                        normTitle.length > 10 && mapTitle.length > 10 && 
                        (normTitle.substring(0, 20) === mapTitle.substring(0, 20));
      const authorMatch = normAuthor.includes(mapAuthor) || mapAuthor.includes(normAuthor);
      
      if (titleMatch && authorMatch) {
        found = value;
        break;
      }
    }
  }
  
  if (found) {
    article.content = found.abstract;
    if (found.authorBio) {
      article.authorBio = found.authorBio;
    }
    updated++;
    console.log('✓ Updated:', article.title.substring(0, 50) + '...');
  } else {
    notFound.push({ title: article.title, author: article.author, id: article.id });
  }
});

console.log('\n=== Summary ===');
console.log('Updated:', updated, 'articles');
console.log('Not found:', notFound.length);

if (notFound.length > 0) {
  console.log('\nNot found articles:');
  notFound.forEach(a => console.log(`  [${a.id}] ${a.title} by ${a.author}`));
}

fs.writeFileSync(path.join(__dirname, '../public/data/nodes.json'), JSON.stringify(nodesJSON, null, 2), 'utf8');
console.log('\n✓ Saved nodes.json');
