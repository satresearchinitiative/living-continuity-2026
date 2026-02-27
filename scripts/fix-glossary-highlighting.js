const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const glossaryFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

glossaryFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  
  // Skip if already updated
  if (content.includes('{!shouldShowTitle &&')) {
    return;
  }
  
  // Find and replace the old pattern
  const oldPattern = /\{!clickCounter[\s\S]*?&&\s*!clickCounter4\s*&&\s*\(/;
  if (oldPattern.test(content)) {
    content = content.replace(oldPattern, '{!shouldShowTitle && (');
    fs.writeFileSync(file, content);
    console.log(`Fixed highlighting in ${basename}`);
  }
  
  // Remove titleActive logic if present
  if (content.includes('const [titleActive, setTitleActive]')) {
    content = content.replace(
      /const \[titleActive, setTitleActive\] = useState\(false\);\s*useEffect\([\s\S]*?}, \[clickCounter[^\]]*\]\);/g,
      '// Title visibility is now controlled by shouldShowTitle hook'
    );
    fs.writeFileSync(file, content);
    console.log(`Removed titleActive logic from ${basename}`);
  }
});
