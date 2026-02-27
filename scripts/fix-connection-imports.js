const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const files = glob.sync(path.join(ROOT, 'models', '{active,unactive}', '*.jsx'));
const importLine = 'import { useConnectionHighlight } from "../../components/utils/useConnectionHighlight";\n';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('useConnectionHighlight')) {
    return;
  }

  // remove existing import line(s)
  const importRegex = /^import\s+\{\s*useConnectionHighlight\s*\}[^\n]*\n/m;
  while (importRegex.test(content)) {
    content = content.replace(importRegex, '');
  }

  // find last import statement
  const importMatches = [...content.matchAll(/^import[^;]+;\n?/gm)];
  let insertIndex = 0;
  if (importMatches.length) {
    const last = importMatches[importMatches.length - 1];
    insertIndex = last.index + last[0].length;
  }

  content = content.slice(0, insertIndex) + importLine + content.slice(insertIndex);
  fs.writeFileSync(file, content);
  console.log(`Fixed import in ${file}`);
});
