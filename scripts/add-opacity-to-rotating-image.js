const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  let modified = false;
  
  // Find RotatingImage component and add opacity prop
  if (content.includes('<RotatingImage') && !content.includes('opacity={opacity}')) {
    // Find the RotatingImage tag
    const rotatingImagePattern = /(<RotatingImage[^>]*>)/;
    if (rotatingImagePattern.test(content)) {
      content = content.replace(
        /(<RotatingImage[^>]*)(\/>|>)/,
        (match, opening) => {
          if (!opening.includes('opacity')) {
            return `${opening} opacity={opacity}${match.includes('/>') ? '/' : ''}>`;
          }
          return match;
        }
      );
      modified = true;
    }
  }
  
  // Remove opacity from group if it exists (doesn't work on groups)
  if (content.includes('opacity={opacity}') && content.includes('<group')) {
    content = content.replace(/<group([^>]*)\s+opacity=\{opacity\}([^>]*)>/g, '<group$1$2>');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated opacity for ${basename}`);
  }
});
