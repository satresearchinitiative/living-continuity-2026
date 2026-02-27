const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  
  // Skip if already has deselection logic
  if (content.includes('Deselect if another node is selected')) {
    return;
  }
  
  // Find the line with useShouldShowTitle
  const shouldShowTitleIndex = content.indexOf('useShouldShowTitle');
  if (shouldShowTitleIndex === -1) {
    return;
  }
  
  // Find the end of that line
  const lineEnd = content.indexOf('\n', shouldShowTitleIndex);
  if (lineEnd === -1) {
    return;
  }
  
  // Check if useStore is imported
  let updated = content;
  if (!content.includes("useStore('selectedNodeStore'")) {
    // Add the deselection logic
    const storeVar = content.includes('setA1Store') ? 'setA1Store' : 
                     content.includes('setStore') ? 'setStore' : null;
    const clickCounterVars = [];
    for (let i = 4; i <= 7; i++) {
      if (content.includes(`setClickCounter${i}`)) {
        clickCounterVars.push(`setClickCounter${i}(false);`);
      }
    }
    
    const deselectLogic = `
  // Deselect if another node is selected
  const [selectedNode] = useStore('selectedNodeStore', null);
  useEffect(() => {
    if (selectedNode && selectedNode.id !== '${nodeId}' && linesActive) {
      // Another node is selected, deselect this one
      setClickCount(0);
      setClicked(false);
      setLinesActive(false);
      ${storeVar ? `${storeVar}(false);` : ''}
      ${clickCounterVars.join('\n      ')}
    }
  }, [selectedNode, linesActive]);`;
    
    updated = content.slice(0, lineEnd + 1) + deselectLogic + content.slice(lineEnd + 1);
    
    fs.writeFileSync(file, updated);
    console.log(`Added deselection logic to ${basename}`);
  }
});
