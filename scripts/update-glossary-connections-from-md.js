const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../public/content_folder/GlossaryTerms_related.md');
const nodesPath = path.join(__dirname, '../public/data/nodes.json');

const mdContent = fs.readFileSync(mdPath, 'utf8');
const nodes = JSON.parse(fs.readFileSync(nodesPath, 'utf8'));

// Map glossary titles to IDs from nodes.json (this is the source of truth for connections)
const glossaryMap = {};
nodes.glossary.forEach(g => {
  glossaryMap[g.title.toLowerCase()] = g.id;
});

// Create comprehensive article mapping
const articleMap = {};
const articleDetails = {};

nodes.articles.forEach(a => {
  const titleLower = a.title.toLowerCase().trim();
  const authorLower = a.author.toLowerCase().trim();
  
  // Store details
  articleDetails[a.id] = { title: a.title, author: a.author };
  
  // Map by full title
  articleMap[titleLower] = a.id;
  
  // Map by author + title
  articleMap[(authorLower + ' ' + titleLower)] = a.id;
  
  // Map by title + author
  articleMap[(titleLower + ' ' + authorLower)] = a.id;
  
  // Map by first few words of title (for partial matches)
  const titleWords = titleLower.split(' ').slice(0, 6).join(' ');
  articleMap[titleWords] = a.id;
  
  // Map by author only (for cases where format is "Author - Title")
  articleMap[authorLower] = a.id;
  
  // Map by key words from title
  const keyWords = titleLower.split(/[:\-]/)[0].trim();
  if (keyWords.length > 10) {
    articleMap[keyWords] = a.id;
  }
});

// Helper function to find article ID
function findArticleId(articleText) {
  const normalized = articleText.toLowerCase().trim().replace(/\s+/g, ' ');
  
  // Try exact match first
  if (articleMap[normalized]) {
    return articleMap[normalized];
  }
  
  // Try matching by author - title format
  const authorTitleMatch = normalized.match(/^(.+?)\s*[-–]\s*(.+)$/);
  if (authorTitleMatch) {
    const author = authorTitleMatch[1].trim();
    const title = authorTitleMatch[2].trim();
    
    // Try author + title
    if (articleMap[author + ' ' + title]) {
      return articleMap[author + ' ' + title];
    }
    
    // Try just title
    if (articleMap[title]) {
      return articleMap[title];
    }
    
    // Try partial title match
    const titleWords = title.split(' ').slice(0, 6).join(' ');
    if (articleMap[titleWords]) {
      return articleMap[titleWords];
    }
  }
  
  // Try matching by key words
  const keyWords = normalized.split(/[:\-]/)[0].trim();
  if (keyWords.length > 10 && articleMap[keyWords]) {
    return articleMap[keyWords];
  }
  
  // Try matching each word
  const words = normalized.split(/\s+/).filter(w => w.length > 3);
  for (const word of words.slice(0, 5)) {
    for (const [key, id] of Object.entries(articleMap)) {
      if (key.includes(word) || word.includes(key)) {
        return id;
      }
    }
  }
  
  return null;
}

// Parse markdown
const lines = mdContent.split('\n');
const glossaryArticles = {};
let currentGlossary = null;

lines.forEach((line, index) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  
  // Check if it's a glossary term (starts with number and dot, no leading spaces)
  // Format: "1. Density" or "1. Density   "
  const glossaryMatch = line.match(/^(\d+)\.\s+(.+)$/);
  if (glossaryMatch && !line.match(/^\s+/)) {
    currentGlossary = glossaryMatch[2].trim().toLowerCase().replace(/:\s*$/, '');
    if (!glossaryArticles[currentGlossary]) {
      glossaryArticles[currentGlossary] = [];
    }
    return;
  }
  
  // Check if it's an article (has leading spaces, then number, dot, space)
  // Format: "   1. Author - Title" or "   1. Author - Title:"
  const articleMatch = line.match(/^\s+(\d+)\.\s+(.+)$/);
  if (articleMatch && currentGlossary) {
    const articleText = articleMatch[2].trim().replace(/:\s*$/, '');
    glossaryArticles[currentGlossary].push(articleText);
  }
});

console.log('Parsing markdown and matching articles...\n');

const updates = {};
const unmatched = {};

Object.keys(glossaryArticles).forEach(term => {
  const glossaryId = glossaryMap[term];
  if (!glossaryId) {
    console.log(`⚠️  Glossary term "${term}" not found in glossary.json`);
    return;
  }
  
  const articleIds = [];
  const unmatchedArticles = [];
  
  glossaryArticles[term].forEach(articleText => {
    const articleId = findArticleId(articleText);
    if (articleId) {
      articleIds.push(articleId);
    } else {
      unmatchedArticles.push(articleText);
    }
  });
  
  if (articleIds.length > 0) {
    updates[glossaryId] = articleIds;
    console.log(`✓ ${term} (${glossaryId}): ${articleIds.length} articles matched`);
    articleIds.forEach(id => {
      const article = articleDetails[id];
      console.log(`  - ${id}: ${article.author} - ${article.title.substring(0, 50)}...`);
    });
  }
  
  if (unmatchedArticles.length > 0) {
    unmatched[term] = unmatchedArticles;
    console.log(`\n⚠️  Unmatched articles for ${term}:`);
    unmatchedArticles.forEach(art => {
      console.log(`  - ${art}`);
    });
  }
  
  console.log('');
});

// Update nodes.json
console.log('\nUpdating nodes.json...\n');

let updatedCount = 0;
nodes.glossary.forEach(glossaryEntry => {
  if (updates[glossaryEntry.id]) {
    const newConnections = [...new Set(updates[glossaryEntry.id])]; // Remove duplicates
    const oldConnections = glossaryEntry.connections || [];
    
    // Only update if different
    const oldSet = new Set(oldConnections.sort());
    const newSet = new Set(newConnections.sort());
    
    if (JSON.stringify([...oldSet]) !== JSON.stringify([...newSet])) {
      console.log(`Updating ${glossaryEntry.id} (${glossaryEntry.title}):`);
      console.log(`  Old: [${oldConnections.join(', ')}]`);
      console.log(`  New: [${newConnections.join(', ')}]`);
      glossaryEntry.connections = newConnections;
      updatedCount++;
    }
  }
});

if (updatedCount > 0) {
  fs.writeFileSync(nodesPath, JSON.stringify(nodes, null, 2));
  console.log(`\n✓ Updated ${updatedCount} glossary entries in nodes.json`);
} else {
  console.log('\n✓ No updates needed - all connections are already correct');
}

if (Object.keys(unmatched).length > 0) {
  console.log('\n⚠️  Some articles could not be matched. Please check manually:');
  Object.keys(unmatched).forEach(term => {
    console.log(`\n${term}:`);
    unmatched[term].forEach(art => console.log(`  - ${art}`));
  });
}
