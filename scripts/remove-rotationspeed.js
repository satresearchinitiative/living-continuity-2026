const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove rotationSpeed prop
  if (content.includes('rotationSpeed={0.3}')) {
    content = content.replace(/\s*rotationSpeed=\{0\.3\}/g, '');
    fs.writeFileSync(file, content);
    console.log(`Removed rotationSpeed from ${path.basename(file)}`);
  }
});
