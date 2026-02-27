const fs = require('fs');
const path = require('path');

const keywordsMD = fs.readFileSync(path.join(__dirname, '../public/content_folder/keywords_diagram.md'), 'utf8');
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

const lines = keywordsMD.split('\n');
const keywordsWithOpenButton = [];

let inFirstSection = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.toLowerCase().includes('keyterms with open button')) {
    inFirstSection = true;
    continue;
  }
  
  if (line.toLowerCase().includes('keyterms without open button')) {
    inFirstSection = false;
    continue;
  }
  
  if (inFirstSection && line) {
    const keywordMatch = line.match(/\*\*(.+?)\*\*/);
    if (keywordMatch) {
      keywordsWithOpenButton.push(keywordMatch[1].trim());
    }
  }
}

console.log('Keywords with open button:', keywordsWithOpenButton.length);
console.log('Keywords:', keywordsWithOpenButton.join(', '));

const keywordsWithOpenButtonNormalized = new Set();
keywordsWithOpenButton.forEach(kw => {
  keywordsWithOpenButtonNormalized.add(normalize(kw));
});

let updated = 0;
glossaryJSON.glossary.forEach(item => {
  const normTitle = normalize(item.title);
  const shouldHaveOpenButton = keywordsWithOpenButtonNormalized.has(normTitle);
  
  if (shouldHaveOpenButton) {
    item.hasOpenButton = true;
    updated++;
  } else {
    item.hasOpenButton = false;
  }
});

console.log('\n=== Summary ===');
console.log('Updated:', updated, 'keywords with open button');
console.log('Total keywords:', glossaryJSON.glossary.length);

fs.writeFileSync(path.join(__dirname, '../public/data/glossary.json'), JSON.stringify(glossaryJSON, null, 2), 'utf8');
console.log('\n✓ Saved glossary.json');
