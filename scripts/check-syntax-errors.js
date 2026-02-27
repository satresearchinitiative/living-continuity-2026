const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const files = glob.sync(path.join(ROOT, 'models', '{active,unactive}', '*.jsx'));

const errors = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const filename = path.basename(file);
  
  // Check for unclosed strings
  let inString = false;
  let stringChar = null;
  let stringStartLine = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      const prevChar = j > 0 ? line[j - 1] : null;
      
      if (!inString && (char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
        inString = true;
        stringChar = char;
        stringStartLine = i + 1;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        // Check if it's escaped
        let escapeCount = 0;
        let k = j - 1;
        while (k >= 0 && line[k] === '\\') {
          escapeCount++;
          k--;
        }
        if (escapeCount % 2 === 0) {
          inString = false;
          stringChar = null;
          stringStartLine = null;
        }
      }
    }
  }
  
  if (inString) {
    errors.push({
      file: filename,
      line: stringStartLine,
      error: `Unclosed string starting at line ${stringStartLine}`
    });
  }
  
  // Check for balanced braces
  let braceCount = 0;
  let parenCount = 0;
  let bracketCount = 0;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const prevChar = i > 0 ? content[i - 1] : null;
    
    if (prevChar === '\\') continue; // Skip escaped chars
    
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
    if (char === '(') parenCount++;
    if (char === ')') parenCount--;
    if (char === '[') bracketCount++;
    if (char === ']') bracketCount--;
  }
  
  if (braceCount !== 0) {
    errors.push({
      file: filename,
      error: `Unbalanced braces: ${braceCount > 0 ? 'missing' : 'extra'} ${Math.abs(braceCount)} closing brace(s)`
    });
  }
  
  if (parenCount !== 0) {
    errors.push({
      file: filename,
      error: `Unbalanced parentheses: ${parenCount > 0 ? 'missing' : 'extra'} ${Math.abs(parenCount)} closing paren(s)`
    });
  }
  
  if (bracketCount !== 0) {
    errors.push({
      file: filename,
      error: `Unbalanced brackets: ${bracketCount > 0 ? 'missing' : 'extra'} ${Math.abs(bracketCount)} closing bracket(s)`
    });
  }
});

if (errors.length > 0) {
  console.error('Found syntax errors:');
  errors.forEach(err => {
    console.error(`  ${err.file}${err.line ? ` (line ${err.line})` : ''}: ${err.error}`);
  });
  process.exit(1);
} else {
  console.log('No syntax errors found!');
}
