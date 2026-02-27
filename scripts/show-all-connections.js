const fs = require('fs');
const path = require('path');

const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
const glossaryJsonPath = path.join(__dirname, '../public/data/glossary.json');
const glossaryConnectionsPath = path.join(__dirname, '../public/data/glossary-connections.json');

function main() {
  const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
  const glossaryData = JSON.parse(fs.readFileSync(glossaryJsonPath, 'utf-8'));
  const connectionsData = JSON.parse(fs.readFileSync(glossaryConnectionsPath, 'utf-8'));
  
  // Create article lookup map
  const articleMap = new Map();
  nodesData.articles.forEach(article => {
    articleMap.set(article.id, article);
  });
  
  // Create glossary lookup map
  const glossaryMap = new Map();
  glossaryData.glossary.forEach(item => {
    glossaryMap.set(item.id, item);
  });
  
  const connections = connectionsData.glossary || {};
  
  console.log('📋 All Glossary Term Connections:\n');
  console.log('='.repeat(100));
  
  // Sort glossary terms by ID
  const sortedGlossaryIds = Object.keys(connections).sort((a, b) => {
    const numA = parseInt(a.replace('G', ''));
    const numB = parseInt(b.replace('G', ''));
    return numA - numB;
  });
  
  let totalConnections = 0;
  let termsWithConnections = 0;
  
  for (const keywordId of sortedGlossaryIds) {
    const glossaryItem = glossaryMap.get(keywordId);
    const articleIds = connections[keywordId] || [];
    
    if (articleIds.length > 0) {
      termsWithConnections++;
      totalConnections += articleIds.length;
      
      const keywordTitle = glossaryItem ? glossaryItem.title : `Unknown (${keywordId})`;
      console.log(`\n${keywordTitle} (${keywordId}): ${articleIds.length} article(s)`);
      console.log('-'.repeat(100));
      
      articleIds.forEach((articleId, index) => {
        const article = articleMap.get(articleId);
        if (article) {
          const shortTitle = article.title.length > 60 
            ? article.title.substring(0, 57) + '...' 
            : article.title;
          console.log(`  ${index + 1}. ${articleId}: ${shortTitle}`);
          console.log(`     Author: ${article.author}`);
        } else {
          console.log(`  ${index + 1}. ${articleId}: ⚠️  Article not found in nodes.json`);
        }
      });
    }
  }
  
  // Show terms with no connections
  const termsWithoutConnections = [];
  glossaryData.glossary.forEach(item => {
    if (!connections[item.id] || connections[item.id].length === 0) {
      termsWithoutConnections.push(item);
    }
  });
  
  if (termsWithoutConnections.length > 0) {
    console.log(`\n\n📭 Glossary Terms with No Connections (${termsWithoutConnections.length}):`);
    console.log('-'.repeat(100));
    termsWithoutConnections.forEach(item => {
      console.log(`  ${item.title} (${item.id})`);
    });
  }
  
  console.log('\n' + '='.repeat(100));
  console.log(`\n📊 Summary:`);
  console.log(`   Total glossary terms: ${glossaryData.glossary.length}`);
  console.log(`   Terms with connections: ${termsWithConnections}`);
  console.log(`   Terms without connections: ${termsWithoutConnections.length}`);
  console.log(`   Total article connections: ${totalConnections}`);
}

main();
