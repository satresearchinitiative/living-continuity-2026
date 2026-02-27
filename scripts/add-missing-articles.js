const fs = require('fs');
const path = require('path');

const articlesMdPath = path.join(__dirname, '../public/content_folder/Articles.md');
const nodesPath = path.join(__dirname, '../public/data/nodes.json');

const mdContent = fs.readFileSync(articlesMdPath, 'utf8');
const nodes = JSON.parse(fs.readFileSync(nodesPath, 'utf8'));

// Parse image references
const imageRefs = {};
const imageRegex = /\[image(\d+)\]:\s*<data:image\/[^>]+>/g;
let match;
while ((match = imageRegex.exec(mdContent)) !== null) {
  const imageNum = match[1];
  const imageData = match[0].match(/<data:image\/[^>]+>/)[0];
  imageRefs[`image${imageNum}`] = imageData;
}

// Extract image URL from image reference
function getImageUrl(imageRef) {
  if (!imageRef) return '';
  const imageMatch = imageRef.match(/\[(image\d+)\]/);
  if (imageMatch && imageRefs[imageMatch[1]]) {
    // For now, return empty - we'll need to check actual image paths
    // Images are likely in /content_folder/SRCE_LC_Images/
    return '';
  }
  return '';
}

// Articles to extract - using regex to handle curly quotes
const articlesToExtract = [
  {
    title: "Sharjah's Industrial Villages",
    author: "Jason Carlow",
    startPattern: /## Sharjah[\u2019']s Industrial Villages/,
    endMarker: "## Between Civilising Missions",
    imageRef: "[image13]",
    expectedId: "A23"
  },
  {
    title: "(Re)tracing Beirut's Neighbourhood Boundaries",
    author: "Aude Azzi And Frederik Weissenborn",
    startPattern: /## \(Re\)tracing Beirut[\u2019']s Neighbourhood Boundaries/,
    endMarker: "### Practice-Place and Space:",
    imageRef: "[image7]",
    expectedId: "A25"
  }
];

function extractArticle(mdContent, articleDef) {
  // Use pattern matching if available, otherwise use startMarker
  let startIndex = -1;
  if (articleDef.startPattern) {
    const match = mdContent.match(articleDef.startPattern);
    if (match) {
      startIndex = match.index;
    }
  } else if (articleDef.startMarker) {
    startIndex = mdContent.indexOf(articleDef.startMarker);
  }
  
  if (startIndex === -1) {
    console.log(`⚠️  Could not find start marker for: ${articleDef.title}`);
    return null;
  }

  const startMarkerLength = articleDef.startPattern ? mdContent.substring(startIndex).match(articleDef.startPattern)[0].length : (articleDef.startMarker ? articleDef.startMarker.length : 0);
  let endIndex = mdContent.indexOf(articleDef.endMarker, startIndex + startMarkerLength);
  if (endIndex === -1) {
    // Try to find next ## heading
    const nextHeading = mdContent.indexOf('\n##', startIndex + startMarkerLength);
    if (nextHeading !== -1) {
      endIndex = nextHeading;
    } else {
      endIndex = mdContent.length;
    }
  }

  const articleText = mdContent.substring(startIndex, endIndex);
  
  // Extract abstract - handle both "Abstract" and "Abstracts"
  const abstractMatch = articleText.match(/#### Abstract\s*\n\n([\s\S]*?)(?=\n####|$)/);
  const content = abstractMatch ? abstractMatch[1].trim() : '';
  
  // Extract author bio - handle both singular and plural, and multiple authors
  let authorBio = '';
  const bioMatch = articleText.match(/#### Author['s]* Biograph(?:y|ies)\s*\n\n([\s\S]*?)(?=\n##|###|$)/);
  if (bioMatch) {
    authorBio = bioMatch[1].trim();
  }
  
  // If no bio found, try alternative patterns
  if (!authorBio) {
    const altBioMatch = articleText.match(/#### Author['s]* Biograph(?:y|ies)\s*\n([\s\S]*?)(?=\n##|###|$)/);
    if (altBioMatch) {
      authorBio = altBioMatch[1].trim();
    }
  }
  
  // Extract image - check for image reference format ![][imageX]
  let imageUrl = '';
  const imageRefMatch = articleText.match(/!\[.*?\]\[(image\d+)\]/);
  if (imageRefMatch) {
    // Map image numbers to author names for file paths
    const imageNum = imageRefMatch[1];
    // Try to find actual image file path
    const authorName = articleDef.author.split(' ')[0] + ' ' + articleDef.author.split(' ')[articleDef.author.split(' ').length - 1];
    imageUrl = `/content_folder/SRCE_LC_Images/${authorName}.jpg`;
  } else {
    // Try direct image path
    const imageMatch = articleText.match(/!\[.*?\]\(([^)]+)\)/);
    if (imageMatch) {
      imageUrl = imageMatch[1];
    }
  }
  
  return {
    content,
    authorBio,
    imageUrl
  };
}

console.log('Extracting articles from Articles.md...\n');

const newArticles = [];
let nextIndex = nodes.articles.length;

articlesToExtract.forEach(articleDef => {
  const extracted = extractArticle(mdContent, articleDef);
  if (extracted) {
    const articleId = `A${nextIndex + 1}`;
    const article = {
      id: articleId,
      index: nextIndex,
      title: articleDef.title,
      author: articleDef.author,
      imageUrl: extracted.imageUrl || `/content_folder/SRCE_LC_Images/${articleDef.author.replace(/\s+/g, ' ').trim()}.jpg`,
      modelPath: "",
      selectedModelPath: `../entries_selected/a${nextIndex + 1}`,
      connections: [],
      connectionKeywords: [],
      content: extracted.content,
      authorBio: extracted.authorBio,
      keywords: []
    };
    
    newArticles.push(article);
    console.log(`✓ Extracted: ${articleId} - ${articleDef.author} - ${articleDef.title}`);
    console.log(`  Content length: ${extracted.content.length} chars`);
    console.log(`  Author bio length: ${extracted.authorBio.length} chars`);
    console.log(`  Image: ${article.imageUrl}\n`);
    nextIndex++;
  } else {
    console.log(`✗ Failed to extract: ${articleDef.title}\n`);
  }
});

if (newArticles.length > 0) {
  // Add articles to nodes.json
  nodes.articles.push(...newArticles);
  
  // Save
  fs.writeFileSync(nodesPath, JSON.stringify(nodes, null, 2));
  console.log(`\n✓ Added ${newArticles.length} articles to nodes.json`);
  console.log(`\nNew article IDs: ${newArticles.map(a => a.id).join(', ')}`);
} else {
  console.log('\n⚠️  No articles were extracted');
}
