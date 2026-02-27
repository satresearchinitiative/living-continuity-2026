const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  
  // Extract title from ArchiveModal
  const titleMatch = content.match(/title="([^"]+)"/);
  if (!titleMatch) return;
  
  const title = titleMatch[1];
  
  // Find empty span pattern - more flexible matching
  const emptySpanRegex = /<span style=\{\{[\s\S]*?textAlign:\s*"center"\s*\}\}>[\s\n]*<\/span>/;
  
  if (emptySpanRegex.test(content)) {
    // Replace with title
    const replacement = `<span style={{ color: "#ffffff", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
                ${title}
              </span>`;
    
    content = content.replace(emptySpanRegex, replacement);
    fs.writeFileSync(file, content);
    console.log(`Fixed empty title in ${basename}: ${title.substring(0, 40)}...`);
  }
});
