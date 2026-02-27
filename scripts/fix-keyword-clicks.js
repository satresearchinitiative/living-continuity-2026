const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const keywordFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

keywordFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase(); // G1, G2, etc.
  let modified = false;
  
  // Check if handleClick needs to be updated to directly set linesActive
  // Look for the pattern where handleClick only sets clickCount
  if (content.includes('function handleClick()') && 
      content.includes('setClickCount(clickCount + 1)') &&
      !content.includes('setLinesActive(true)')) {
    
    // Find the handleClick function and update it
    const handleClickPattern = /function handleClick\(\)\s*\{[^}]*setClickCount\(clickCount \+ 1\);[^}]*\}/s;
    if (handleClickPattern.test(content)) {
      // Replace with version that directly activates
      const newHandleClick = `function handleClick() {
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
  }`;
      content = content.replace(handleClickPattern, newHandleClick);
      modified = true;
    }
  }
  
  // Add deselection logic for keywords (like articles have)
  if (!content.includes('// Deselect if another node is selected')) {
    // Find where useConnectionHighlight is called
    const hookCallMatch = content.match(/useConnectionHighlight\([^)]+\);/);
    if (hookCallMatch) {
      const hookCall = hookCallMatch[0];
      const afterHook = content.indexOf(hookCall) + hookCall.length;
      const beforeReturn = content.indexOf('return', afterHook);
      
      if (beforeReturn > afterHook) {
        const deselectionCode = `
  // Deselect if another node is selected
  const [selectedNode] = useStore('selectedNodeStore', null);
  useEffect(() => {
    if (selectedNode && selectedNode.id !== '${nodeId}' && linesActive) {
      // Another node is selected, deselect this one
      setClickCount(0);
      setClicked(false);
      setLinesActive(false);
    }
  }, [selectedNode, linesActive]);`;
        
        // Insert after the hook call and before return
        content = content.slice(0, afterHook) + deselectionCode + content.slice(afterHook);
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Fixed ${basename}`);
  }
});
