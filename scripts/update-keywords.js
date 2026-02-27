const fs = require('fs');
const path = require('path');

const keywordsMD = fs.readFileSync(path.join(__dirname, '../public/content_folder/Articles_keywords.md'), 'utf8');
const nodesJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/data/nodes.json'), 'utf8'));
const glossaryJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/data/glossary.json'), 'utf8'));

function normalize(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/[:\"'""\-_,.®()]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\+/g, 'and')
    .replace(/&/g, 'and')
    .trim();
}

const glossaryMap = new Map();
glossaryJSON.glossary.forEach(item => {
  const normTitle = normalize(item.title);
  glossaryMap.set(normTitle, item.id);
});

const articleKeywordsMap = {};

const sections = keywordsMD.split(/\n## /).filter(s => s.trim());

sections.forEach(section => {
  const lines = section.split('\n');
  const firstLine = lines[0] ? lines[0].trim() : '';
  
  if (!firstLine || firstLine.length < 10) return;
  
  const titleMatch = firstLine.match(/^(.+?)\s*-\s*(.+)$/);
  if (!titleMatch) return;
  
  const title = titleMatch[1].trim();
  const author = titleMatch[2].trim();
  
  const keywords = [];
  
  let foundFirstKeyword = false;
  let separatorBlankLineIndex = -1;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (foundFirstKeyword && separatorBlankLineIndex === -1) {
        separatorBlankLineIndex = i;
        break;
      }
      continue;
    }
    if (line.startsWith('##')) break;
    
    if (!foundFirstKeyword && line) {
      foundFirstKeyword = true;
    }
  }
  
  if (separatorBlankLineIndex === -1) {
    separatorBlankLineIndex = lines.length;
  }
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('##')) break;
    
    const keywordText = line.replace(/\(link\)$/, '').trim();
    
    if (i < separatorBlankLineIndex) {
      const normKeyword = normalize(keywordText);
      const glossaryId = glossaryMap.get(normKeyword);
      
      if (glossaryId) {
        keywords.push({
          text: keywordText,
          link: `/glossary#${glossaryId}`
        });
      } else {
        keywords.push({
          text: keywordText,
          link: null
        });
      }
    } else {
      keywords.push({
        text: keywordText,
        link: null
      });
    }
  }
  
  if (keywords.length > 0) {
    const normTitle = normalize(title);
    const normAuthor = normalize(author);
    const key = normTitle + '|' + normAuthor;
    articleKeywordsMap[key] = { title, author, keywords };
  }
});

console.log('Parsed', Object.keys(articleKeywordsMap).length, 'articles with keywords');

let updated = 0;
let notFound = [];

nodesJSON.articles.forEach(article => {
  const normTitle = normalize(article.title);
  const normAuthor = normalize(article.author);
  let key = normTitle + '|' + normAuthor;
  
  let found = articleKeywordsMap[key];
  
  if (!found) {
    for (const [mapKey, value] of Object.entries(articleKeywordsMap)) {
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
    article.keywords = found.keywords;
    updated++;
    console.log('✓ Updated:', article.title.substring(0, 50) + '...', `(${found.keywords.length} keywords)`);
  } else {
    notFound.push({ title: article.title, author: article.author, id: article.id });
  }
});

console.log('\n=== Summary ===');
console.log('Updated:', updated, 'articles with keywords');
console.log('Not found:', notFound.length);

if (notFound.length > 0) {
  console.log('\nNot found articles:');
  notFound.forEach(a => console.log(`  [${a.id}] ${a.title} by ${a.author}`));
}

fs.writeFileSync(path.join(__dirname, '../public/data/nodes.json'), JSON.stringify(nodesJSON, null, 2), 'utf8');
console.log('\n✓ Saved nodes.json');
