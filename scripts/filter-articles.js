const fs = require('fs');
const path = require('path');

const titlesFile = fs.readFileSync(
  path.join(__dirname, '../public/content_folder/Essay Titles and Authors.md'),
  'utf8'
);
const nodesJSON = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../public/data/nodes.json'), 'utf8')
);

function normalize(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[:\"'""\-_,.®()]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\+/g, 'and')
    .replace(/&/g, 'and')
    .trim();
}

const allowedArticles = [];

const lines = titlesFile.split('\n');
lines.forEach((line) => {
  line = line.trim();
  if (
    !line ||
    line.startsWith('#') ||
    line.startsWith('*') ||
    line === 'Title TBD - Hoor Al-Qasimi' ||
    line === 'Title TBD - Mona El-Mousfy'
  ) {
    return;
  }

  const match = line.match(/^\d+\.\s*(.+?)\s*[-–]\s*(.+)$/);
  if (match) {
    const title = match[1].replace(/\\/g, '').trim();
    const author = match[2].replace(/\\/g, '').trim();
    allowedArticles.push({ title, author });
  }
});

console.log(`Found ${allowedArticles.length} articles in Essay Titles and Authors.md\n`);

const keptArticles = [];
const removedArticleIds = new Set();

nodesJSON.articles.forEach((article) => {
  const normTitle = normalize(article.title);
  const normAuthor = normalize(article.author);

  let found = false;
  let matchedAllowed = null;
  
  for (const allowed of allowedArticles) {
    const normAllowedTitle = normalize(allowed.title);
    const normAllowedAuthor = normalize(allowed.author);

    // Try exact match first
    if (normTitle === normAllowedTitle && normAuthor === normAllowedAuthor) {
      found = true;
      matchedAllowed = allowed;
      break;
    }

    // Try substring match on title (at least 70% similarity)
    const titleSimilarity = 
      (normTitle.includes(normAllowedTitle) || normAllowedTitle.includes(normTitle)) ||
      (normTitle.length > 15 && normAllowedTitle.length > 15 && 
       normTitle.substring(0, 20) === normAllowedTitle.substring(0, 20));

    // Try substring match on author
    const authorSimilarity = 
      (normAuthor === normAllowedAuthor) ||
      (normAuthor.includes(normAllowedAuthor) || normAllowedAuthor.includes(normAuthor)) ||
      (normAuthor.split(' ').some(word => normAllowedAuthor.includes(word)) && 
       normAllowedAuthor.split(' ').some(word => normAuthor.includes(word)));

    if (titleSimilarity && authorSimilarity) {
      found = true;
      matchedAllowed = allowed;
      break;
    }
  }

  if (found && matchedAllowed) {
    article.index = keptArticles.length;
    article.id = `A${keptArticles.length + 1}`;
    keptArticles.push(article);
    console.log(`✓ Keeping: ${article.title} by ${article.author}`);
  } else {
    removedArticleIds.add(article.id);
    console.log(`✗ Removing: ${article.title} by ${article.author}`);
  }
});

nodesJSON.articles = keptArticles;

nodesJSON.glossary.forEach((term) => {
  if (term.connections) {
    term.connections = term.connections.filter(
      (conn) => !removedArticleIds.has(conn)
    );
  }
});

fs.writeFileSync(
  path.join(__dirname, '../public/data/nodes.json'),
  JSON.stringify(nodesJSON, null, 2),
  'utf8'
);

console.log(`\n=== Summary ===`);
console.log(`Kept: ${keptArticles.length} articles`);
console.log(`Removed: ${removedArticleIds.size} articles`);
console.log(`Updated glossary connections`);
console.log(`\n✓ Saved nodes.json`);
