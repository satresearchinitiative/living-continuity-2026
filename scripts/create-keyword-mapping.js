const fs = require('fs');
const path = require('path');

const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
const articlesKeywordsPath = path.join(__dirname, '../public/content_folder/Articles_keywords.md');

function normalizeKeyword(keyword) {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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
  const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
  const glossary = nodesData.glossary || [];
  const articlesFromMd = parseArticlesKeywords();
  
  const allKeywords = new Set();
  articlesFromMd.forEach(article => {
    article.linkedKeywords.forEach(kw => allKeywords.add(kw));
  });
  
  console.log('Keyword to Glossary Mapping:\n');
  console.log('='.repeat(80));
  
  const mapping = new Map();
  const unmatched = [];
  
  allKeywords.forEach(keyword => {
    const normalized = normalizeKeyword(keyword);
    let match = null;
    
    for (const item of glossary) {
      const itemNormalized = normalizeKeyword(item.title);
      if (itemNormalized === normalized) {
        match = { id: item.id, title: item.title };
        break;
      }
    }
    
    if (match) {
      mapping.set(keyword, match);
      console.log(`✅ "${keyword}" -> ${match.id} (${match.title})`);
    } else {
      unmatched.push(keyword);
    }
  });
  
  if (unmatched.length > 0) {
    console.log('\n❌ Unmatched keywords (need to be added to glossary or mapped):');
    unmatched.forEach(kw => {
      const similar = glossary.filter(g => {
        const gNorm = normalizeKeyword(g.title);
        const kwNorm = normalizeKeyword(kw);
        return gNorm.includes(kwNorm) || kwNorm.includes(gNorm) || 
               gNorm.split(' ').some(w => kwNorm.includes(w)) ||
               kwNorm.split(' ').some(w => gNorm.includes(w));
      });
      if (similar.length > 0) {
        console.log(`  "${kw}" - Similar: ${similar.map(s => `${s.id} (${s.title})`).join(', ')}`);
      } else {
        console.log(`  "${kw}" - No similar terms found`);
      }
    });
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n📊 Summary:`);
  console.log(`   Total keywords: ${allKeywords.size}`);
  console.log(`   Matched: ${mapping.size}`);
  console.log(`   Unmatched: ${unmatched.length}`);
}

main();
