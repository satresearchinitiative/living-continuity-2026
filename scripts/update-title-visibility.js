const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const activeFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));
const unactiveFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

function updateArticleFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  
  let updated = content;
  
  // Add import if not present
  if (!content.includes('useShouldShowTitle')) {
    const importLine = "import { useShouldShowTitle } from \"../../components/utils/useShouldShowTitle\";\n";
    const connectionImportIndex = content.indexOf('useConnectionHighlight');
    if (connectionImportIndex !== -1) {
      const lineEnd = content.indexOf('\n', connectionImportIndex);
      updated = content.slice(0, lineEnd + 1) + importLine + content.slice(lineEnd + 1);
    }
  }
  
  // Add hook call after useConnectionHighlight
  if (!updated.includes('useShouldShowTitle(')) {
    const hookCall = `  const shouldShowTitle = useShouldShowTitle('${nodeId}');\n`;
    const connectionCallIndex = updated.indexOf('useConnectionHighlight(');
    if (connectionCallIndex !== -1) {
      const lineEnd = updated.indexOf('\n', connectionCallIndex);
      updated = updated.slice(0, lineEnd + 1) + hookCall + updated.slice(lineEnd + 1);
    }
  }
  
  // Find and replace title display logic
  // Look for patterns like: {linesActive && modelState &&( or {modelState === true &&(
  const titlePatterns = [
    /\{linesActive\s*&&\s*modelState\s*&&\s*\(/g,
    /\{modelState\s*===\s*true\s*&&\s*\(/g,
    /\{modelState\s*&&\s*\(/g,
  ];
  
  // This is complex - let's just update the files manually or with more specific patterns
  // For now, let's just ensure the import and hook are added
  
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    console.log(`Updated ${basename}`);
    return true;
  }
  return false;
}

function updateGlossaryFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  
  let updated = content;
  
  // Add import if not present
  if (!content.includes('useShouldShowTitle')) {
    const importLine = "import { useShouldShowTitle } from \"../../components/utils/useShouldShowTitle\";\n";
    const connectionImportIndex = content.indexOf('useConnectionHighlight');
    if (connectionImportIndex !== -1) {
      const lineEnd = content.indexOf('\n', connectionImportIndex);
      updated = content.slice(0, lineEnd + 1) + importLine + content.slice(lineEnd + 1);
    }
  }
  
  // Add hook call after useConnectionHighlight
  if (!updated.includes('useShouldShowTitle(')) {
    const hookCall = `  const shouldShowTitle = useShouldShowTitle('${nodeId}');\n`;
    const connectionCallIndex = updated.indexOf('useConnectionHighlight(');
    if (connectionCallIndex !== -1) {
      const lineEnd = updated.indexOf('\n', connectionCallIndex);
      updated = updated.slice(0, lineEnd + 1) + hookCall + updated.slice(lineEnd + 1);
    }
  }
  
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    console.log(`Updated ${basename}`);
    return true;
  }
  return false;
}

console.log('Updating article files...');
activeFiles.forEach(updateArticleFile);

console.log('\nUpdating glossary files...');
unactiveFiles.forEach(updateGlossaryFile);

console.log('\nDone! Note: You may need to manually update title display logic in each file.');
