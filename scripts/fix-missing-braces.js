const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  let fixed = false;
  
  // Fix missing closing brace in style object
  // Pattern: zIndex: 1000 followed by single } instead of }}
  if (content.includes('zIndex: 1000') && content.match(/zIndex:\s*1000\s*\n\s*\}/)) {
    content = content.replace(/zIndex:\s*1000\s*\n\s*\}/g, 'zIndex: 1000\n              }}');
    fixed = true;
  }
  
  // Also check for the pattern with different spacing
  if (content.match(/zIndex:\s*1000\s*\n\s*\}\s*>/)) {
    content = content.replace(/zIndex:\s*1000\s*\n\s*\}\s*>/g, 'zIndex: 1000\n              }}\n            >');
    fixed = true;
  }
  
  if (fixed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed missing brace in ${basename}`);
  }
});
