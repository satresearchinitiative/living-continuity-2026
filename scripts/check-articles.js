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
    line.includes('Title TBD')
  )
    return;
  const match = line.match(/^\d+\.\s*(.+?)\s*[-–]\s*(.+)$/);
  if (match) {
    const title = match[1].replace(/\\/g, '').trim();
    const author = match[2].replace(/\\/g, '').trim();
    allowedArticles.push({ title, author });
  }
});

console.log(
  `Articles in Essay Titles file: ${allowedArticles.length}\n`
);

const notMatched = [];

allowedArticles.forEach((allowed) => {
  const normAllowedTitle = normalize(allowed.title);
  const normAllowedAuthor = normalize(allowed.author);

  let found = false;
  for (const article of nodesJSON.articles) {
    const normTitle = normalize(article.title);
    const normAuthor = normalize(article.author);

    if (
      (normTitle === normAllowedTitle ||
        normTitle.includes(normAllowedTitle) ||
        normAllowedTitle.includes(normTitle)) &&
      (normAuthor === normAllowedAuthor ||
        normAuthor.includes(normAllowedAuthor) ||
        normAllowedAuthor.includes(normAuthor))
    ) {
      found = true;
      break;
    }
  }

  if (!found) {
    notMatched.push(allowed);
  }
});

console.log(
  `Matched: ${allowedArticles.length - notMatched.length}/${allowedArticles.length}`
);
if (notMatched.length > 0) {
  console.log('\nNOT FOUND in nodes.json:');
  notMatched.forEach((a) =>
    console.log(`  - ${a.title.substring(0, 60)}... - ${a.author}`)
  );
} else {
  console.log('\n✓ All articles from Essay Titles file are present in nodes.json!');
}

console.log(`\nCurrent articles in nodes.json: ${nodesJSON.articles.length}`);
