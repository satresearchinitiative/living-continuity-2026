const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = path.join(__dirname, '../public/data/interpretations.xlsx');
const glossaryPath = path.join(__dirname, '../public/data/glossary.json');
const outputPath = path.join(__dirname, '../components/glossary/contributions/contributions.json');

const workbook = XLSX.readFile(excelPath);
const glossaryData = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));
const existingContributions = JSON.parse(fs.readFileSync(outputPath, 'utf8'));

const entriesSheet = workbook.Sheets['Entries'];
const entriesData = XLSX.utils.sheet_to_json(entriesSheet);

const termToKeywordId = {};
glossaryData.glossary.forEach(item => {
  termToKeywordId[item.title.toLowerCase()] = item.id;
});

const newContributions = { ...existingContributions };

entriesData.forEach((row, index) => {
  const term = row['TERM (ENG)'];
  const entry = row['ENTRIES '] || row['ENTRIES'];
  
  if (!term || term === 'Glossary' || !entry || entry.trim() === '') {
    return;
  }

  const keywordId = termToKeywordId[term.toLowerCase()];
  
  if (!keywordId) {
    console.warn(`⚠️  No keyword ID found for term: "${term}"`);
    return;
  }

  if (!newContributions[keywordId]) {
    newContributions[keywordId] = {
      title: term.toLowerCase(),
      interpretations: []
    };
  }

  const existingInterpretations = newContributions[keywordId].interpretations || [];
  const maxId = existingInterpretations.length > 0 
    ? Math.max(...existingInterpretations.map(i => i.id))
    : 0;
  
  const interpretationId = maxId + 1;
  newContributions[keywordId].interpretations.push({
    id: interpretationId,
    content: entry.trim(),
    author: 'Community Contributor'
  });
  
  console.log(`✅ Added interpretation for ${term} (${keywordId})`);
});

fs.writeFileSync(outputPath, JSON.stringify(newContributions, null, 2));
console.log(`\n✅ Successfully converted and merged interpretations into ${outputPath}`);
console.log(`Total keywords with interpretations: ${Object.keys(newContributions).length}`);
