const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const files = glob.sync(path.join(ROOT, 'models', '{active,unactive}', '*.jsx'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('const centerPoint = [0, 0, 0];')) {
    return;
  }
  const next = content.replace('const centerPoint = [0, 0, 0];', 'const centerPoint = position;');
  fs.writeFileSync(file, next);
  console.log(`Updated centerPoint in ${file}`);
});
