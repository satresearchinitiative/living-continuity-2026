const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');

// Update article components
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));
articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase(); // A1, A2, etc.
  let modified = false;
  
  // Add opacity import if not present
  if (!content.includes('elementOpacityStore') && !content.includes('useOpacity')) {
    if (content.includes('import { useStore }')) {
      // Add after useStore import
      content = content.replace(
        /(import { useStore[^}]+} from[^;]+;)/,
        `$1\nimport { useStore } from "usestore-react";\nimport './selectionStore';`
      );
      modified = true;
    }
  }
  
  // Add opacity hook usage
  if (!content.includes('const opacity = useStore')) {
    // Find where useShouldShowTitle is called
    if (content.includes('useShouldShowTitle')) {
      const hookMatch = content.match(/const shouldShowTitle = useShouldShowTitle\([^)]+\);/);
      if (hookMatch) {
        const opacityHook = `  const [opacityMap] = useStore('elementOpacityStore', {});\n  const opacity = opacityMap['${nodeId}'] !== undefined ? opacityMap['${nodeId}'] : 1.0;`;
        content = content.replace(hookMatch[0], hookMatch[0] + '\n' + opacityHook);
        modified = true;
      }
    }
  }
  
  // Apply opacity to the main group
  if (content.includes('opacity') && content.includes('<group') && !content.includes('opacity={opacity}')) {
    // Find the main group that contains the element
    const groupPattern = /(<group[^>]*position=\{position\}[^>]*>)/;
    if (groupPattern.test(content)) {
      content = content.replace(groupPattern, (match) => {
        if (!match.includes('opacity')) {
          return match.replace('>', ` opacity={opacity}>`);
        }
        return match;
      });
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Added opacity to ${basename}`);
  }
});

// Update keyword components
const keywordFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));
keywordFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase(); // G1, G2, etc.
  let modified = false;
  
  // Add opacity import if not present
  if (!content.includes('elementOpacityStore') && !content.includes('useOpacity')) {
    if (content.includes('import { useStore }')) {
      content = content.replace(
        /(import { useStore[^}]+} from[^;]+;)/,
        `$1\nimport './selectionStore';`
      );
      modified = true;
    }
  }
  
  // Add opacity hook usage
  if (!content.includes('const opacity = useStore')) {
    if (content.includes('useShouldShowTitle')) {
      const hookMatch = content.match(/const shouldShowTitle = useShouldShowTitle\([^)]+\);/);
      if (hookMatch) {
        const opacityHook = `  const [opacityMap] = useStore('elementOpacityStore', {});\n  const opacity = opacityMap['${nodeId}'] !== undefined ? opacityMap['${nodeId}'] : 1.0;`;
        content = content.replace(hookMatch[0], hookMatch[0] + '\n' + opacityHook);
        modified = true;
      }
    }
  }
  
  // Apply opacity to the main group
  if (content.includes('opacity') && content.includes('<group') && !content.includes('opacity={opacity}')) {
    const groupPattern = /(<group[^>]*position=\{position\}[^>]*>)/;
    if (groupPattern.test(content)) {
      content = content.replace(groupPattern, (match) => {
        if (!match.includes('opacity')) {
          return match.replace('>', ` opacity={opacity}>`);
        }
        return match;
      });
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Added opacity to ${basename}`);
  }
});
