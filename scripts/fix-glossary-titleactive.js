const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const glossaryFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

glossaryFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  let modified = false;
  
  // Check if useShouldShowTitle is imported
  if (!content.includes('useShouldShowTitle')) {
    // Add import if missing
    if (content.includes('useConnectionHighlight')) {
      content = content.replace(
        /import { useConnectionHighlight } from/,
        "import { useConnectionHighlight } from\nimport { useShouldShowTitle } from"
      );
    } else if (content.includes('from "../../components/utils/')) {
      // Find the last import from components/utils and add after it
      const importMatch = content.match(/import.*from "\.\.\/\.\.\/components\/utils\/[^"]+";/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        content = content.replace(
          lastImport,
          lastImport + '\nimport { useShouldShowTitle } from "../../components/utils/useShouldShowTitle";'
        );
      }
    }
    modified = true;
  }
  
  // Get the node ID (e.g., "g2" from "g2.jsx")
  const nodeId = basename;
  
  // Check if shouldShowTitle hook is called
  if (!content.includes('const shouldShowTitle')) {
    // Find where useConnectionHighlight is called and add shouldShowTitle after it
    if (content.includes('useConnectionHighlight')) {
      const hookCall = content.match(/const.*=.*useConnectionHighlight\([^)]+\);/);
      if (hookCall) {
        content = content.replace(
          hookCall[0],
          hookCall[0] + `\n  const shouldShowTitle = useShouldShowTitle("${nodeId}");`
        );
        modified = true;
      }
    } else {
      // Add it before the return statement
      const returnMatch = content.match(/(\s+)return\s*\(/);
      if (returnMatch) {
        const indent = returnMatch[1];
        content = content.replace(
          returnMatch[0],
          `${indent}const shouldShowTitle = useShouldShowTitle("${nodeId}");\n${returnMatch[0]}`
        );
        modified = true;
      }
    }
  }
  
  // Replace titleActive === true with shouldShowTitle
  if (content.includes('titleActive === true')) {
    content = content.replace(/titleActive === true/g, 'shouldShowTitle');
    modified = true;
  }
  
  // Replace titleActive === false with !shouldShowTitle
  if (content.includes('titleActive === false')) {
    content = content.replace(/titleActive === false/g, '!shouldShowTitle');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Fixed ${basename}`);
  }
});
