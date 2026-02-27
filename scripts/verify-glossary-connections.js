const fs = require('fs');
const path = require('path');

const articlesKeywordsPath = path.join(__dirname, '../public/content_folder/Articles_keywords.md');
const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
const glossaryJsonPath = path.join(__dirname, '../public/data/glossary.json');
const glossaryConnectionsPath = path.join(__dirname, '../public/data/glossary-connections.json');

function normalizeKeyword(keyword) {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function findGlossaryId(keyword, glossaryData) {
  const normalized = normalizeKeyword(keyword);
  
  for (const item of glossaryData.glossary) {
    let itemNormalized = normalizeKeyword(item.title);
    
    if (itemNormalized === normalized) {
      return item.id;
    }
    
    const normalizedNeighbour = normalized.replace(/neighbour/g, 'neighbor');
    const itemNormalizedNeighbour = itemNormalized.replace(/neighbour/g, 'neighbor');
    
    if (itemNormalized === normalizedNeighbour || normalized === itemNormalizedNeighbour) {
      return item.id;
    }
    
    if (normalized.endsWith('s') && itemNormalized === normalized.slice(0, -1) && normalized.length > 1) {
      return item.id;
    }
    
    if (itemNormalized.endsWith('s') && normalized === itemNormalized.slice(0, -1) && itemNormalized.length > 1) {
      return item.id;
    }
    
    if (normalized.endsWith('ies') && itemNormalized === normalized.slice(0, -3) + 'y') {
      return item.id;
    }
    
    if (itemNormalized.endsWith('ies') && normalized === itemNormalized.slice(0, -3) + 'y') {
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
      let hasExplicitLinks = false;
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) {
          if (!foundFirstBreak && keywords.length > 0) {
            foundFirstBreak = true;
          }
          continue;
        }
        if (line.startsWith('##')) break;
        
        const hasLink = line.includes('(link)');
        if (hasLink) {
          hasExplicitLinks = true;
        }
        
        const keyword = line.replace(/\(link\)/g, '').trim();
        if (!keyword) continue;
        
        keywords.push(keyword);
        
        if (hasExplicitLinks) {
          if (hasLink) {
            linkedKeywords.push(keyword);
          }
        } else {
          if (!foundFirstBreak) {
            linkedKeywords.push(keyword);
          }
        }
      }
      
      articles.push({
        title: title,
        author: author,
        keywords: keywords.filter(k => k && k.trim()),
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
    let hasExplicitLinks = false;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('##')) break;
      
      if (!line) {
        if (!foundFirstBreak && keywords.length > 0) {
          foundFirstBreak = true;
        }
        continue;
      }
      
      const hasLink = line.includes('(link)');
      if (hasLink) {
        hasExplicitLinks = true;
      }
      
      const keyword = line.replace(/\(link\)/g, '').trim();
      if (!keyword) continue;
      
      keywords.push(keyword);
      
      if (hasExplicitLinks) {
        if (hasLink) {
          linkedKeywords.push(keyword);
        }
      } else {
        if (!foundFirstBreak) {
          linkedKeywords.push(keyword);
        }
      }
    }
    
    articles.push({
      title: title,
      author: author,
      keywords: keywords.filter(k => k && k.trim()),
      linkedKeywords: linkedKeywords
    });
  }
  
  return articles;
}

function main() {
  console.log('🔍 Verifying Glossary Connections...\n');
  console.log('='.repeat(80));
  
  // Load data
  const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
  const glossaryData = JSON.parse(fs.readFileSync(glossaryJsonPath, 'utf-8'));
  const connectionsData = JSON.parse(fs.readFileSync(glossaryConnectionsPath, 'utf-8'));
  const articlesFromMd = parseArticlesKeywords();
  
  console.log(`\n📊 Data Loaded:`);
  console.log(`   Articles in markdown: ${articlesFromMd.length}`);
  console.log(`   Articles in nodes.json: ${nodesData.articles.length}`);
  console.log(`   Glossary terms: ${glossaryData.glossary.length}`);
  console.log(`   Connections in glossary-connections.json: ${Object.keys(connectionsData.glossary || {}).length}`);
  
  // Build expected connections from markdown
  const expectedConnections = {};
  const articleIdMap = new Map();
  
  // Create article ID mapping
  const authorToArticles = new Map();
  nodesData.articles.forEach(article => {
    const normalizedAuthor = normalizeTitle(article.author);
    if (!authorToArticles.has(normalizedAuthor)) {
      authorToArticles.set(normalizedAuthor, []);
    }
    authorToArticles.get(normalizedAuthor).push(article);
  });
  
  // Match articles and build expected connections
  let matchedArticles = 0;
  let unmatchedArticles = [];
  
  for (const mdArticle of articlesFromMd) {
    const normalizedTitle = normalizeTitle(mdArticle.title);
    const normalizedAuthor = normalizeTitle(mdArticle.author);
    
    // Find matching article
    let article = nodesData.articles.find(a => 
      normalizeTitle(a.title) === normalizedTitle ||
      normalizeTitle(a.title.split(':')[0]) === normalizeTitle(mdArticle.title.split(':')[0])
    );
    
    if (!article) {
      const authorArticles = authorToArticles.get(normalizedAuthor) || [];
      for (const candidateArticle of authorArticles) {
        const candidateTitle = normalizeTitle(candidateArticle.title);
        const mdTitleWords = normalizedTitle.split(' ');
        const candidateTitleWords = candidateTitle.split(' ');
        
        const matchingWords = mdTitleWords.filter(word => 
          word.length > 3 && candidateTitleWords.includes(word)
        );
        
        if (matchingWords.length >= 3) {
          article = candidateArticle;
          break;
        }
        
        const titleSimilarity = mdTitleWords.filter(w => 
          candidateTitleWords.some(cw => cw.includes(w) || w.includes(cw))
        ).length;
        
        if (titleSimilarity >= Math.min(mdTitleWords.length, candidateTitleWords.length) * 0.7) {
          article = candidateArticle;
          break;
        }
      }
    }
    
    if (!article) {
      unmatchedArticles.push({ title: mdArticle.title, author: mdArticle.author });
      continue;
    }
    
    matchedArticles++;
    articleIdMap.set(`${mdArticle.title}|${mdArticle.author}`, article.id);
    
    // Build expected connections for each linked keyword
    for (const linkedKeyword of mdArticle.linkedKeywords) {
      const glossaryId = findGlossaryId(linkedKeyword, glossaryData);
      if (glossaryId) {
        if (!expectedConnections[glossaryId]) {
          expectedConnections[glossaryId] = [];
        }
        if (!expectedConnections[glossaryId].includes(article.id)) {
          expectedConnections[glossaryId].push(article.id);
        }
      }
    }
  }
  
  // Sort expected connections
  for (const keywordId in expectedConnections) {
    expectedConnections[keywordId].sort((a, b) => {
      const numA = parseInt(a.replace('A', ''));
      const numB = parseInt(b.replace('A', ''));
      return numA - numB;
    });
  }
  
  console.log(`\n✅ Matched Articles: ${matchedArticles}/${articlesFromMd.length}`);
  if (unmatchedArticles.length > 0) {
    console.log(`\n⚠️  Unmatched Articles:`);
    unmatchedArticles.forEach(a => {
      console.log(`   - "${a.title}" by ${a.author}`);
    });
  }
  
  // Compare expected vs actual connections
  console.log(`\n🔍 Checking Connections...\n`);
  
  const actualConnections = connectionsData.glossary || {};
  let totalIssues = 0;
  let correctConnections = 0;
  const issues = [];
  
  // Check each glossary term
  for (const glossaryItem of glossaryData.glossary) {
    const keywordId = glossaryItem.id;
    const expected = expectedConnections[keywordId] || [];
    const actual = actualConnections[keywordId] || [];
    
    // Sort actual for comparison
    const sortedActual = [...actual].sort((a, b) => {
      const numA = parseInt(a.replace('A', ''));
      const numB = parseInt(b.replace('A', ''));
      return numA - numB;
    });
    
    const expectedSet = new Set(expected);
    const actualSet = new Set(sortedActual);
    
    const missing = expected.filter(id => !actualSet.has(id));
    const extra = sortedActual.filter(id => !expectedSet.has(id));
    
    if (missing.length > 0 || extra.length > 0) {
      totalIssues++;
      issues.push({
        keyword: glossaryItem.title,
        id: keywordId,
        expected: expected,
        actual: sortedActual,
        missing: missing,
        extra: extra
      });
    } else if (expected.length > 0) {
      correctConnections++;
    }
  }
  
  // Report results
  console.log(`📊 Summary:`);
  console.log(`   ✅ Correct connections: ${correctConnections}`);
  console.log(`   ❌ Issues found: ${totalIssues}`);
  console.log(`   📝 Glossary terms with connections: ${Object.keys(expectedConnections).length}`);
  
  if (issues.length > 0) {
    console.log(`\n❌ Issues Found:\n`);
    issues.forEach(issue => {
      console.log(`   ${issue.keyword} (${issue.id}):`);
      if (issue.missing.length > 0) {
        console.log(`      Missing articles: ${issue.missing.join(', ')}`);
      }
      if (issue.extra.length > 0) {
        console.log(`      Extra articles: ${issue.extra.join(', ')}`);
      }
      console.log(`      Expected: [${issue.expected.join(', ')}]`);
      console.log(`      Actual:   [${issue.actual.join(', ')}]`);
      console.log('');
    });
  } else {
    console.log(`\n✅ All connections are correct!`);
  }
  
  // Check for glossary terms in connections file that don't exist in glossary.json
  const glossaryIds = new Set(glossaryData.glossary.map(g => g.id));
  const connectionIds = Object.keys(actualConnections);
  const unknownIds = connectionIds.filter(id => !glossaryIds.has(id));
  
  if (unknownIds.length > 0) {
    console.log(`\n⚠️  Unknown glossary IDs in connections file:`);
    unknownIds.forEach(id => {
      console.log(`   - ${id}`);
    });
  }
  
  // Check for missing glossary terms
  const missingInConnections = glossaryData.glossary.filter(g => !actualConnections[g.id]);
  if (missingInConnections.length > 0) {
    console.log(`\n⚠️  Glossary terms missing from connections file:`);
    missingInConnections.forEach(g => {
      console.log(`   - ${g.title} (${g.id})`);
    });
  }
  
  console.log('\n' + '='.repeat(80));
}

main();
