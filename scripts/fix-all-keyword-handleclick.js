const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const keywordFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

keywordFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  let modified = false;
  
  // Pattern 1: Simple handleClick with setClickCount(clickCount + 1)
  if (content.includes('function handleClick()') && 
      content.includes('setClickCount(clickCount + 1)') &&
      !content.includes('// Always activate on click')) {
    
    const pattern1 = /function handleClick\(\)\s*\{[^}]*setClicked\(!clicked\);[^}]*setClickCount\(clickCount \+ 1\);[^}]*setClickCounter4\(false\);[^}]*\}/s;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, `function handleClick() {
    // Always activate on click (don't toggle)
    if (clickCount === 0) {
      setClicked(true);
      setClickCount(1);
      setLinesActive(true);
    } else {
      // If already active, clicking again deselects
      setClickCount(0);
      setClicked(false);
      setLinesActive(false);
    }
  }`);
      modified = true;
    }
  }
  
  // Pattern 2: handleClick with debounce (like g1)
  if (content.includes('handleClickDebounced') && 
      content.includes('const handleClick = useCallback') &&
      !content.includes('setLinesActive(true)')) {
    // This is more complex, skip for now - g1 works differently
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Fixed ${basename}`);
  }
});
