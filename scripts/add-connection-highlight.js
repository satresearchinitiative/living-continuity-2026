const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const TARGETS = glob.sync(path.join(ROOT, 'models', '{active,unactive}', '*.jsx'));

const IMPORT_LINE = "import { useConnectionHighlight } from \"../../components/utils/useConnectionHighlight\";";

TARGETS.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('useConnectionHighlight(')) {
    return;
  }
  const base = path.basename(file, '.jsx');
  const nodeId = base.toUpperCase();
  const importRegex = /import[^;]+;\n/g;
  const imports = content.match(importRegex);
  if (!imports) {
    console.warn(`No imports found in ${file}`);
    return;
  }
  if (!content.includes(IMPORT_LINE)) {
    const lastImport = imports[imports.length - 1];
    const index = content.indexOf(lastImport) + lastImport.length;
    content = content.slice(0, index) + '\n' + IMPORT_LINE + content.slice(index);
  }

  const hookLine = `useConnectionHighlight(\'${nodeId.replace('G', 'G').replace('A', 'A')}\', linesActive);`;
  const whiteMaterialIndex = content.indexOf('const whiteMaterial');
  if (whiteMaterialIndex === -1) {
    console.warn(`No whiteMaterial in ${file}`);
    return;
  }
  const insertIndex = content.indexOf('\n', whiteMaterialIndex);
  content = content.slice(0, insertIndex + 1) + hookLine + '\n' + content.slice(insertIndex + 1);

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
