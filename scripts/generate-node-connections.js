const fs = require('fs');
const path = require('path');

const articlesKeywordsPath = path.join(__dirname, '../public/content_folder/Articles_keywords.md');
const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
const glossaryJsonPath = path.join(__dirname, '../public/data/glossary.json');
const outputPath = path.join(__dirname, '../components/utils/nodeConnections.js');
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
  console.log('Loading data files...');
  const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
  const glossaryData = JSON.parse(fs.readFileSync(glossaryJsonPath, 'utf-8'));
  
  console.log('Parsing Articles_keywords.md...');
  const articlesFromMd = parseArticlesKeywords();
  
  console.log(`Found ${articlesFromMd.length} articles in markdown`);
  console.log(`Found ${nodesData.articles.length} articles in nodes.json`);
  
  // Create a map for matching articles by title and author
  const titleToArticle = new Map();
  const authorToArticles = new Map();
  
  nodesData.articles.forEach(article => {
    const normalizedTitle = normalizeTitle(article.title);
    const normalizedAuthor = normalizeTitle(article.author);
    
    // Map by full title
    titleToArticle.set(normalizedTitle, article);
    
    // Map by short title (before colon)
    const shortTitle = article.title.split(':')[0].trim();
    if (shortTitle !== article.title) {
      const normalizedShort = normalizeTitle(shortTitle);
      if (!titleToArticle.has(normalizedShort)) {
        titleToArticle.set(normalizedShort, article);
      }
    }
    
    // Map by first 5 words
    const firstWords = article.title.split(' ').slice(0, 5).join(' ');
    const normalizedFirst = normalizeTitle(firstWords);
    if (!titleToArticle.has(normalizedFirst)) {
      titleToArticle.set(normalizedFirst, article);
    }
    
    // Map by author
    if (!authorToArticles.has(normalizedAuthor)) {
      authorToArticles.set(normalizedAuthor, []);
    }
    authorToArticles.get(normalizedAuthor).push(article);
  });
  
  const ARTICLE_CONNECTIONS = {};
  const KEYWORD_CONNECTIONS = {};
  
  for (const mdArticle of articlesFromMd) {
    const normalizedTitle = normalizeTitle(mdArticle.title);
    const normalizedAuthor = normalizeTitle(mdArticle.author);
    
    let article = titleToArticle.get(normalizedTitle);
    
    // Try short title match
    if (!article) {
      const shortTitle = mdArticle.title.split(':')[0].trim();
      const normalizedShort = normalizeTitle(shortTitle);
      article = titleToArticle.get(normalizedShort);
    }
    
    // Try first 5 words match
    if (!article) {
      const firstWords = mdArticle.title.split(' ').slice(0, 5).join(' ');
      const normalizedFirst = normalizeTitle(firstWords);
      article = titleToArticle.get(normalizedFirst);
    }
    
    // If still not found, try matching by author + title similarity
    if (!article) {
      const authorArticles = authorToArticles.get(normalizedAuthor) || [];
      
      // Try to find best match by title similarity
      for (const candidateArticle of authorArticles) {
        const candidateTitle = normalizeTitle(candidateArticle.title);
        const mdTitleWords = normalizedTitle.split(' ');
        const candidateTitleWords = candidateTitle.split(' ');
        
        // Check if significant words match
        const matchingWords = mdTitleWords.filter(word => 
          word.length > 3 && candidateTitleWords.includes(word)
        );
        
        // If at least 3 significant words match, consider it a match
        if (matchingWords.length >= 3) {
          article = candidateArticle;
          break;
        }
        
        // Also check if titles are very similar (one contains most of the other)
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
      console.log(`⚠️  Article not found: "${mdArticle.title}" by ${mdArticle.author}`);
      continue;
    }
    
    const connections = [];
    
    for (const linkedKeyword of mdArticle.linkedKeywords) {
      const glossaryId = findGlossaryId(linkedKeyword, glossaryData);
      if (glossaryId) {
        if (!connections.includes(glossaryId)) {
          connections.push(glossaryId);
        }
        
        if (!KEYWORD_CONNECTIONS[glossaryId]) {
          KEYWORD_CONNECTIONS[glossaryId] = [];
        }
        if (!KEYWORD_CONNECTIONS[glossaryId].includes(article.id)) {
          KEYWORD_CONNECTIONS[glossaryId].push(article.id);
        }
      } else {
        console.log(`⚠️  Glossary term not found for keyword: "${linkedKeyword}" in article "${mdArticle.title}"`);
      }
    }
    
    if (connections.length > 0) {
      ARTICLE_CONNECTIONS[article.id] = connections.sort();
    } else {
      ARTICLE_CONNECTIONS[article.id] = [];
    }
  }
  
  for (const keywordId in KEYWORD_CONNECTIONS) {
    KEYWORD_CONNECTIONS[keywordId].sort();
  }
  
  for (const article of nodesData.articles) {
    if (!ARTICLE_CONNECTIONS[article.id]) {
      ARTICLE_CONNECTIONS[article.id] = [];
    }
  }
  
  const articleIds = Object.keys(ARTICLE_CONNECTIONS).sort((a, b) => {
    const numA = parseInt(a.replace('A', ''));
    const numB = parseInt(b.replace('A', ''));
    return numA - numB;
  });
  
  const keywordIds = Object.keys(KEYWORD_CONNECTIONS).sort((a, b) => {
    const numA = parseInt(a.replace('G', ''));
    const numB = parseInt(b.replace('G', ''));
    return numA - numB;
  });
  
  let output = 'export const ARTICLE_CONNECTIONS = {\n';
  for (const articleId of articleIds) {
    const connections = ARTICLE_CONNECTIONS[articleId];
    output += `  "${articleId}": [\n`;
    for (let i = 0; i < connections.length; i++) {
      const conn = connections[i];
      if (i === connections.length - 1) {
        output += `    "${conn}"\n`;
      } else {
        output += `    "${conn}",\n`;
      }
    }
    output += `  ],\n`;
  }
  output += '};\n\n';
  
  output += 'export const KEYWORD_CONNECTIONS = {\n';
  for (const keywordId of keywordIds) {
    const connections = KEYWORD_CONNECTIONS[keywordId];
    output += `  "${keywordId}": [\n`;
    for (let i = 0; i < connections.length; i++) {
      const conn = connections[i];
      if (i === connections.length - 1) {
        output += `    "${conn}"\n`;
      } else {
        output += `    "${conn}",\n`;
      }
    }
    output += `  ],\n`;
  }
  output += '};\n\n';
  
  output += `export function getConnectedNodes(nodeId) {
  if (!nodeId) return [];
  if (ARTICLE_CONNECTIONS[nodeId]) {
    return ARTICLE_CONNECTIONS[nodeId];
  }
  if (KEYWORD_CONNECTIONS[nodeId]) {
    return KEYWORD_CONNECTIONS[nodeId];
  }
  return [];
}
`;
  
  fs.writeFileSync(outputPath, output, 'utf-8');
  console.log(`\n✅ Updated ${outputPath}`);
  
  // Create glossary-connections.json file
  // Only include articles that actually have this keyword in their linked keywords
  console.log('\n📝 Creating glossary-connections.json...');
  
  const glossaryConnections = {};
  
  // Build connections object from KEYWORD_CONNECTIONS
  // Sort connections for consistency
  for (const keywordId in KEYWORD_CONNECTIONS) {
    const connections = KEYWORD_CONNECTIONS[keywordId] || [];
    const sortedConnections = [...connections].sort((a, b) => {
      const numA = parseInt(a.replace('A', ''));
      const numB = parseInt(b.replace('A', ''));
      return numA - numB;
    });
    glossaryConnections[keywordId] = sortedConnections;
  }
  
  // Also ensure all glossary terms from glossary.json are included (even if empty)
  if (glossaryData && glossaryData.glossary) {
    for (const glossaryItem of glossaryData.glossary) {
      if (!glossaryConnections[glossaryItem.id]) {
        glossaryConnections[glossaryItem.id] = [];
      }
    }
  }
  
  // Sort glossary IDs for consistent output
  const sortedGlossaryIds = Object.keys(glossaryConnections).sort((a, b) => {
    const numA = parseInt(a.replace('G', ''));
    const numB = parseInt(b.replace('G', ''));
    return numA - numB;
  });
  
  const sortedGlossaryConnections = {};
  for (const id of sortedGlossaryIds) {
    sortedGlossaryConnections[id] = glossaryConnections[id];
  }
  
  // Write glossary-connections.json
  fs.writeFileSync(
    glossaryConnectionsPath, 
    JSON.stringify({ glossary: sortedGlossaryConnections }, null, 2), 
    'utf-8'
  );
  console.log(`   ✅ Created/Updated glossary-connections.json`);
  
  const glossaryTermsWithConnections = Object.keys(glossaryConnections).filter(
    id => glossaryConnections[id] && glossaryConnections[id].length > 0
  ).length;
  
  console.log(`\n📊 Summary:`);
  console.log(`   Articles with connections: ${Object.keys(ARTICLE_CONNECTIONS).length}`);
  console.log(`   Keywords with connections: ${glossaryTermsWithConnections}`);
  console.log(`   Total glossary terms: ${Object.keys(glossaryConnections).length}`);
}

main();
