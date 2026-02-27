const fs = require('fs');
const path = require('path');

const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
const glossaryJsonPath = path.join(__dirname, '../public/data/glossary.json');
const articlesKeywordsPath = path.join(__dirname, '../public/content_folder/Articles_keywords.md');

function normalizeKeyword(keyword) {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function findGlossaryId(keyword, glossaryMap, nodesGlossary) {
  const normalized = normalizeKeyword(keyword);
  
  for (const [id, title] of glossaryMap.entries()) {
    if (normalizeKeyword(title) === normalized) {
      return id;
    }
  }
  
  for (const item of nodesGlossary) {
    if (normalizeKeyword(item.title) === normalized) {
      return item.id;
    }
  }
  
  return null;
}

function parseArticlesKeywords() {
  const content = fs.readFileSync(articlesKeywordsPath, 'utf-8');
  const articles = [];
  
  const sections = content.split(/\n## /);
  
  for (let idx = 0; idx < sections.length; idx++) {
    const section = sections[idx].trim();
    if (!section) continue;
    
    const lines = section.split('\n');
    let titleLine = lines[0];
    
    if (!titleLine.startsWith('##')) {
      titleLine = '## ' + titleLine;
    }
    
    const titleMatch = titleLine.match(/##\s+(.+?)\s*\\\s*-\s*(.+)/);
    if (!titleMatch) {
      const altMatch = titleLine.match(/##\s+(.+?)\s+-\s*(.+)/);
      if (!altMatch) continue;
      let title = altMatch[1].trim().replace(/\\/g, '').replace(/\s+$/g, '');
      let author = altMatch[2].trim().replace(/\\/g, '');
      if (title.length < 5) continue;
      
      const keywords = [];
      const linkedKeywords = [];
      let foundFirstBreak = false;
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) {
          if (!foundFirstBreak && keywords.length > 0) {
            foundFirstBreak = true;
          }
          continue;
        }
        if (line.startsWith('##')) break;
        
        const keyword = line.replace(/\(link\)/g, '').trim();
        if (!keyword) continue;
        
        if (!foundFirstBreak) {
          linkedKeywords.push(keyword);
          keywords.push(keyword);
        } else {
          keywords.push(keyword);
        }
      }
      
      articles.push({
        title: title,
        author: author,
        linkedKeywords: linkedKeywords
      });
      continue;
    }
    
    let title = titleMatch[1].trim().replace(/\\/g, '').replace(/\s+$/g, '');
    let author = titleMatch[2].trim().replace(/\\/g, '');
    
    if (!title || !author) continue;
    
    const keywords = [];
    const linkedKeywords = [];
    let foundFirstBreak = false;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        if (!foundFirstBreak && keywords.length > 0) {
          foundFirstBreak = true;
        }
        continue;
      }
      if (line.startsWith('##')) break;
      
      const keyword = line.replace(/\(link\)/g, '').trim();
      if (!keyword) continue;
      
      if (!foundFirstBreak) {
        linkedKeywords.push(keyword);
        keywords.push(keyword);
      } else {
        keywords.push(keyword);
      }
    }
    
    articles.push({
      title: title,
      author: author,
      linkedKeywords: linkedKeywords
    });
  }
  
  return articles;
}

function main() {
  console.log('Loading data files...');
  const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
  const glossaryData = JSON.parse(fs.readFileSync(glossaryJsonPath, 'utf-8'));
  
  const glossaryMap = new Map();
  glossaryData.glossary.forEach(item => {
    glossaryMap.set(item.id, item.title);
  });
  
  console.log('Parsing Articles_keywords.md...');
  const articlesFromMd = parseArticlesKeywords();
  
  console.log('\n🔍 Verification Report:\n');
  console.log('='.repeat(80));
  
  let totalIssues = 0;
  let totalArticles = 0;
  
  for (const mdArticle of articlesFromMd) {
    const article = nodesData.articles.find(a => 
      normalizeKeyword(a.title) === normalizeKeyword(mdArticle.title) ||
      normalizeKeyword(a.title.split(':')[0]) === normalizeKeyword(mdArticle.title.split(':')[0])
    );
    
    if (!article) continue;
    
    totalArticles++;
    const issues = [];
    
    const expectedConnections = [];
    const matchedKeywords = [];
    const unmatchedKeywords = [];
    
    for (const keyword of mdArticle.linkedKeywords) {
      const glossaryId = findGlossaryId(keyword, glossaryMap, nodesData.glossary || []);
      if (glossaryId) {
        expectedConnections.push(glossaryId);
        matchedKeywords.push({ keyword, id: glossaryId });
      } else {
        unmatchedKeywords.push(keyword);
      }
    }
    
    const actualConnections = article.connections || [];
    const actualConnectionKeywords = article.connectionKeywords || [];
    
    if (actualConnections.length !== expectedConnections.length) {
      issues.push(`❌ Connections count mismatch: Expected ${expectedConnections.length}, got ${actualConnections.length}`);
    }
    
    const missingConnections = expectedConnections.filter(id => !actualConnections.includes(id));
    const extraConnections = actualConnections.filter(id => !expectedConnections.includes(id));
    
    if (missingConnections.length > 0) {
      issues.push(`❌ Missing connections: ${missingConnections.join(', ')}`);
    }
    
    if (extraConnections.length > 0) {
      issues.push(`⚠️  Extra connections: ${extraConnections.join(', ')}`);
    }
    
    if (actualConnectionKeywords.length !== mdArticle.linkedKeywords.length) {
      issues.push(`❌ ConnectionKeywords count mismatch: Expected ${mdArticle.linkedKeywords.length}, got ${actualConnectionKeywords.length}`);
    }
    
    const missingKeywords = mdArticle.linkedKeywords.filter(k => !actualConnectionKeywords.includes(k));
    if (missingKeywords.length > 0) {
      issues.push(`❌ Missing connectionKeywords: ${missingKeywords.join(', ')}`);
    }
    
    if (unmatchedKeywords.length > 0) {
      issues.push(`⚠️  Keywords without glossary match: ${unmatchedKeywords.join(', ')}`);
    }
    
    if (issues.length > 0) {
      console.log(`\n📄 Article: ${article.id} - ${article.title}`);
      issues.forEach(issue => console.log(`   ${issue}`));
      totalIssues += issues.length;
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n📊 Summary:`);
  console.log(`   Total articles checked: ${totalArticles}`);
  console.log(`   Total issues found: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log(`\n✅ All connections match correctly!`);
  } else {
    console.log(`\n⚠️  Please review the issues above.`);
  }
}

main();
