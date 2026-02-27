const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update scale from [6, 6, 1] to [10.8, 10.8, 1]
  if (content.includes('scale={[6, 6, 1]}')) {
    content = content.replace(/scale=\{\[6, 6, 1\]\}/g, 'scale={[10.8, 10.8, 1]}');
    fs.writeFileSync(file, content);
    console.log(`Updated scale in ${path.basename(file)}`);
  }
});
