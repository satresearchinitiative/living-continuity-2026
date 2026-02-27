const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  
  // Check if deselection logic is outside the component function
  const functionStart = content.indexOf(`export default function ${nodeId}`);
  if (functionStart === -1) {
    return; // Skip if function not found
  }
  
  // Find the deselection logic block before the function
  const deselectionPattern = /\/\/ Deselect if another node is selected[\s\S]*?}, \[selectedNode, linesActive\]\);/;
  const match = content.match(deselectionPattern);
  
  if (match && match.index < functionStart) {
    // Remove the deselection logic from outside the function
    content = content.replace(deselectionPattern, '');
    
    // Find where to insert it inside the function (after useShouldShowTitle)
    const shouldShowTitleIndex = content.indexOf('useShouldShowTitle', functionStart);
    if (shouldShowTitleIndex !== -1) {
      const lineEnd = content.indexOf('\n', shouldShowTitleIndex);
      const deselectionCode = `
  // Deselect if another node is selected
  const [selectedNode] = useStore('selectedNodeStore', null);
  useEffect(() => {
    if (selectedNode && selectedNode.id !== '${nodeId}' && linesActive) {
      // Another node is selected, deselect this one
      setClickCount(0);
      setClicked(false);
      setLinesActive(false);
      ${content.includes('setA1Store') ? 'setA1Store(false);' : content.includes('setStore') ? 'setStore(false);' : ''}
      ${content.includes('setClickCounter4') ? 'setClickCounter4(false);' : ''}
      ${content.includes('setClickCounter5') ? 'setClickCounter5(false);' : ''}
      ${content.includes('setClickCounter6') ? 'setClickCounter6(false);' : ''}
      ${content.includes('setClickCounter7') ? 'setClickCounter7(false);' : ''}
    }
  }, [selectedNode, linesActive]);`;
      
      content = content.slice(0, lineEnd + 1) + deselectionCode + content.slice(lineEnd + 1);
      fs.writeFileSync(file, content);
      console.log(`Fixed hook placement in ${basename}`);
    }
  }
});
