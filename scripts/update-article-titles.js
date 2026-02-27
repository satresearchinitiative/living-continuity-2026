const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update title box styling to be more visible
  if (content.includes('shouldShowTitle &&') && content.includes('View more')) {
    // Update padding and styling
    content = content.replace(
      /padding:\s*"8px 12px"/g,
      'padding: "12px 16px"'
    );
    content = content.replace(
      /border:\s*"1px solid #ffffff"/g,
      'border: "2px solid #ffffff"'
    );
    content = content.replace(
      /gap:\s*"8px"/g,
      'gap: "10px"'
    );
    content = content.replace(
      /fontSize:\s*"14px"/g,
      'fontSize: "16px"'
    );
    content = content.replace(
      /padding:\s*"4px 12px"/g,
      'padding: "6px 16px"'
    );
    content = content.replace(
      /fontSize:\s*"12px"/g,
      'fontSize: "13px"'
    );
    
    // Add zIndex and improve button styling
    if (!content.includes('zIndex: 1000')) {
      content = content.replace(
        /borderRadius:\s*"4px",\s*\}/,
        'borderRadius: "6px",\n                zIndex: 1000,'
      );
    }
    
    if (!content.includes('textAlign: "center"')) {
      content = content.replace(
        /fontWeight:\s*"bold"\s*\}/,
        'fontWeight: "bold",\n                  textAlign: "center"'
      );
    }
    
    if (!content.includes('boxShadow')) {
      content = content.replace(
        /fontWeight:\s*"500",\s*transition:/,
        'fontWeight: "600",\n                  transition:'
      );
      content = content.replace(
        /transition:\s*"opacity 0.2s",/,
        'transition: "all 0.2s",\n                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",'
      );
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated title styling in ${path.basename(file)}`);
  }
});
