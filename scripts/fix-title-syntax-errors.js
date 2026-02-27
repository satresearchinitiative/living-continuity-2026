const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Extract title from ArchiveModal
function extractTitle(content) {
  const titleMatch = content.match(/title="([^"]+)"/);
  return titleMatch ? titleMatch[1] : null;
}

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  
  // Fix 1: Remove trailing comma before closing brace in style
  content = content.replace(/zIndex:\s*1000,\s*\}/g, 'zIndex: 1000\n              }');
  
  // Fix 2: Add missing title text in span
  const title = extractTitle(content);
  if (title) {
    // Find empty span with textAlign: "center"}
    const emptySpanPattern = /<span style=\{\{[\s\S]*?textAlign:\s*"center"\}\}>[\s\S]*?<\/span>/;
    if (emptySpanPattern.test(content)) {
      const match = content.match(emptySpanPattern);
      if (match[0].includes('</span>') && !match[0].includes(title)) {
        content = content.replace(
          emptySpanPattern,
          `<span style={{ color: "#ffffff", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
                ${title}
              </span>`
        );
        console.log(`Fixed title in ${basename}`);
      }
    }
  }
  
  // Fix 3: Fix any unclosed strings or braces
  // Check for common patterns
  if (content.includes('textAlign: "center"}')) {
    // Make sure it's properly closed
    content = content.replace(/textAlign:\s*"center"\}/g, 'textAlign: "center" }');
  }
  
  fs.writeFileSync(file, content);
});

console.log('Fixed syntax errors in article files');
