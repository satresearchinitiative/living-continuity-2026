// const fs = require('fs');
// const path = require('path');

// const articlesKeywordsPath = path.join(__dirname, '../public/content_folder/Articles_keywords.md');
// const nodesJsonPath = path.join(__dirname, '../public/data/nodes.json');
// const glossaryJsonPath = path.join(__dirname, '../public/data/glossary.json');

// function normalizeKeyword(keyword) {
//   return keyword
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s]/g, ' ')
//     .replace(/\s+/g, ' ')
//     .trim();
// }

// function normalizeTitle(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s]/g, ' ')
//     .replace(/\s+/g, ' ')
//     .trim()
//     .substring(0, 100);
// }

// function findGlossaryId(keyword, glossaryMap, nodesGlossary, glossaryJson) {
//   const normalized = normalizeKeyword(keyword);
  
//   for (const item of nodesGlossary) {
//     const itemNormalized = normalizeKeyword(item.title);
    
//     if (itemNormalized === normalized) {
//       return item.id;
//     }
    
//     if (normalized.endsWith('s') && itemNormalized === normalized.slice(0, -1) && normalized.length > 1) {
//       return item.id;
//     }
    
//     if (itemNormalized.endsWith('s') && normalized === itemNormalized.slice(0, -1) && itemNormalized.length > 1) {
//       return item.id;
//     }
    
//     if (normalized.endsWith('ies') && itemNormalized === normalized.slice(0, -3) + 'y') {
//       return item.id;
//     }
    
//     if (itemNormalized.endsWith('ies') && normalized === itemNormalized.slice(0, -3) + 'y') {
//       return item.id;
//     }
//   }
  
//   if (glossaryJson && glossaryJson.glossary) {
//     for (const glossaryItem of glossaryJson.glossary) {
//       const glossaryNormalized = normalizeKeyword(glossaryItem.title);
      
//       if (glossaryNormalized === normalized) {
//         const nodeGlossaryItem = nodesGlossary.find(g => g.id === glossaryItem.id);
//         if (nodeGlossaryItem) {
//           const nodeNormalized = normalizeKeyword(nodeGlossaryItem.title);
//           if (nodeNormalized === normalized || nodeNormalized === glossaryNormalized) {
//             return glossaryItem.id;
//           }
//         }
//       }
      
//       if (normalized.endsWith('s') && glossaryNormalized === normalized.slice(0, -1) && normalized.length > 1) {
//         const nodeGlossaryItem = nodesGlossary.find(g => g.id === glossaryItem.id);
//         if (nodeGlossaryItem) {
//           const nodeNormalized = normalizeKeyword(nodeGlossaryItem.title);
//           if (nodeNormalized === normalized.slice(0, -1) || nodeNormalized === glossaryNormalized) {
//             return glossaryItem.id;
//           }
//         }
//       }
      
//       if (glossaryNormalized.endsWith('s') && normalized === glossaryNormalized.slice(0, -1) && glossaryNormalized.length > 1) {
//         const nodeGlossaryItem = nodesGlossary.find(g => g.id === glossaryItem.id);
//         if (nodeGlossaryItem) {
//           const nodeNormalized = normalizeKeyword(nodeGlossaryItem.title);
//           if (nodeNormalized === normalized || nodeNormalized === glossaryNormalized) {
//             return glossaryItem.id;
//           }
//         }
//       }
      
//       if (normalized.endsWith('ies') && glossaryNormalized === normalized.slice(0, -3) + 'y') {
//         const nodeGlossaryItem = nodesGlossary.find(g => g.id === glossaryItem.id);
//         if (nodeGlossaryItem) {
//           const nodeNormalized = normalizeKeyword(nodeGlossaryItem.title);
//           if (nodeNormalized === normalized.slice(0, -3) + 'y' || nodeNormalized === glossaryNormalized) {
//             return glossaryItem.id;
//           }
//         }
//       }
      
//       if (glossaryNormalized.endsWith('ies') && normalized === glossaryNormalized.slice(0, -3) + 'y') {
//         const nodeGlossaryItem = nodesGlossary.find(g => g.id === glossaryItem.id);
//         if (nodeGlossaryItem) {
//           const nodeNormalized = normalizeKeyword(nodeGlossaryItem.title);
//           if (nodeNormalized === normalized || nodeNormalized === glossaryNormalized) {
//             return glossaryItem.id;
//           }
//         }
//       }
//     }
//   }
  
//   return null;
// }

// function parseArticlesKeywords() {
//   const content = fs.readFileSync(articlesKeywordsPath, 'utf-8');
//   const articles = [];
  
//   const sections = content.split(/\n## /);
  
//   for (let idx = 0; idx < sections.length; idx++) {
//     const section = sections[idx].trim();
//     if (!section) continue;
    
//     const lines = section.split('\n');
//     let titleLine = lines[0];
    
//     if (!titleLine.startsWith('##')) {
//       titleLine = '## ' + titleLine;
//     }
    
//     const titleMatch = titleLine.match(/##\s+(.+?)\s*\\\s*-\s*(.+)/);
//     if (!titleMatch) {
//       const altMatch = titleLine.match(/##\s+(.+?)\s+-\s*(.+)/);
//       if (!altMatch) continue;
//       let title = altMatch[1].trim().replace(/\\/g, '').replace(/\s+$/g, '');
//       let author = altMatch[2].trim().replace(/\\/g, '');
//       if (title.length < 5) continue;
      
//       const keywords = [];
//       const linkedKeywords = [];
      
//       for (let i = 1; i < lines.length; i++) {
//         const line = lines[i].trim();
//         if (!line) continue;
//         if (line.startsWith('##')) break;
//         if (line.includes('(link)')) {
//           const keyword = line.replace(/\(link\)/g, '').trim();
//           if (keyword) {
//             linkedKeywords.push(keyword);
//             keywords.push(keyword);
//           }
//         } else {
//           keywords.push(line);
//         }
//       }
      
//       articles.push({
//         title: title,
//         author: author,
//         keywords: keywords.filter(k => k && k.trim()),
//         linkedKeywords: linkedKeywords
//       });
//       continue;
//     }
    
//     let title = titleMatch[1].trim().replace(/\\/g, '').replace(/\s+$/g, '');
//     let author = titleMatch[2].trim().replace(/\\/g, '');
    
//     if (!title || !author) continue;
    
//     const keywords = [];
//     const linkedKeywords = [];
//     let foundFirstBreak = false;
    
//     for (let i = 1; i < lines.length; i++) {
//       const line = lines[i].trim();
      
//       if (line.startsWith('##')) break;
      
//       if (!line) {
//         if (!foundFirstBreak && keywords.length > 0) {
//           foundFirstBreak = true;
//         }
//         continue;
//       }
      
//       const keyword = line.replace(/\(link\)/g, '').trim();
//       if (!keyword) continue;
      
//       if (!foundFirstBreak) {
//         linkedKeywords.push(keyword);
//         keywords.push(keyword);
//       } else {
//         keywords.push(keyword);
//       }
//     }
    
//     articles.push({
//       title: title,
//       author: author,
//       keywords: keywords.filter(k => k && k.trim()),
//       linkedKeywords: linkedKeywords
//     });
//   }
  
//   return articles;
// }

// function main() {
//   console.log('Loading data files...');
//   const nodesData = JSON.parse(fs.readFileSync(nodesJsonPath, 'utf-8'));
//   const glossaryData = JSON.parse(fs.readFileSync(glossaryJsonPath, 'utf-8'));
  
//   const glossaryMap = new Map();
//   glossaryData.glossary.forEach(item => {
//     glossaryMap.set(item.id, item.title);
//   });
  
//   console.log('Parsing Articles_keywords.md...');
//   const articlesFromMd = parseArticlesKeywords();
  
//   console.log(`Found ${articlesFromMd.length} articles in markdown`);
//   console.log(`Found ${nodesData.articles.length} articles in nodes.json`);
  
//   const titleToArticle = new Map();
//   nodesData.articles.forEach(article => {
//     const normalizedTitle = normalizeTitle(article.title);
//     titleToArticle.set(normalizedTitle, article);
    
//     const shortTitle = article.title.split(':')[0].trim();
//     if (shortTitle !== article.title) {
//       const normalizedShort = normalizeTitle(shortTitle);
//       if (!titleToArticle.has(normalizedShort)) {
//         titleToArticle.set(normalizedShort, article);
//       }
//     }
    
//     const firstWords = article.title.split(' ').slice(0, 5).join(' ');
//     const normalizedFirst = normalizeTitle(firstWords);
//     if (!titleToArticle.has(normalizedFirst)) {
//       titleToArticle.set(normalizedFirst, article);
//     }
//   });
  
//   let updatedCount = 0;
//   let notFoundCount = 0;
  
//   for (const mdArticle of articlesFromMd) {
//     const normalizedTitle = normalizeTitle(mdArticle.title);
//     let article = titleToArticle.get(normalizedTitle);
    
//     if (!article) {
//       const shortTitle = mdArticle.title.split(':')[0].trim();
//       const normalizedShort = normalizeTitle(shortTitle);
//       article = titleToArticle.get(normalizedShort);
//     }
    
//     if (!article) {
//       const firstWords = mdArticle.title.split(' ').slice(0, 5).join(' ');
//       const normalizedFirst = normalizeTitle(firstWords);
//       article = titleToArticle.get(normalizedFirst);
//     }
    
//     if (!article) {
//       console.log(`⚠️  Article not found: "${mdArticle.title}" by ${mdArticle.author}`);
//       notFoundCount++;
//       continue;
//     }
    
//     const keywords = mdArticle.keywords.map(k => ({
//       text: k,
//       link: null
//     }));
    
//     const connections = [];
//     const connectionKeywords = [...mdArticle.linkedKeywords];
    
//     for (const linkedKeyword of mdArticle.linkedKeywords) {
//       const glossaryId = findGlossaryId(linkedKeyword, glossaryMap, nodesData.glossary || [], glossaryData);
//       if (glossaryId) {
//         if (!connections.includes(glossaryId)) {
//           connections.push(glossaryId);
//         }
        
//         const glossaryItem = nodesData.glossary.find(g => g.id === glossaryId);
//         if (glossaryItem) {
//           const glossarySlug = normalizeKeyword(glossaryItem.title).replace(/\s+/g, '-');
          
//           const keywordIndex = keywords.findIndex(k => k.text === linkedKeyword);
//           if (keywordIndex !== -1) {
//             keywords[keywordIndex].link = `/glossary#${glossarySlug}`;
//           }
//         }
//       } else {
//         console.log(`⚠️  Glossary term not found for keyword: "${linkedKeyword}" in article "${mdArticle.title}"`);
//       }
//     }
    
//     article.keywords = keywords;
//     article.connections = connections;
//     article.connectionKeywords = connectionKeywords;
    
//     updatedCount++;
//     console.log(`✓ Updated: ${article.id} - ${article.title}`);
//   }
  
//   console.log(`\n📊 Summary:`);
//   console.log(`   Updated: ${updatedCount} articles`);
//   console.log(`   Not found: ${notFoundCount} articles`);
  
//   fs.writeFileSync(nodesJsonPath, JSON.stringify(nodesData, null, 2), 'utf-8');
//   console.log(`\n✅ Updated ${nodesJsonPath}`);
// }

// main();
