const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Extract title from ArchiveModal or use default
function extractTitle(content, basename) {
  const titleMatch = content.match(/title="([^"]+)"/);
  if (titleMatch) {
    return titleMatch[1];
  }
  return basename;
}

articleFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  
  // Skip if already using shouldShowTitle for title display
  if (content.includes('{shouldShowTitle &&') && content.includes('View more')) {
    return;
  }
  
  // Find old title display patterns and replace
  const oldPatterns = [
    /\{linesActive\s*&&\s*\([\s\S]*?<Html[\s\S]*?center[\s\S]*?style=\{[\s\S]*?backgroundColor:\s*"#ff6600"[\s\S]*?\}[\s\S]*?>[\s\S]*?<span>[\s\S]*?([^<]+)[\s\S]*?<\/span>[\s\S]*?<\/Html>[\s\S]*?\)\}/,
    /\{linesActive\s*&&\s*modelState\s*&&\s*\([\s\S]*?<Html[\s\S]*?center[\s\S]*?style=\{[\s\S]*?backgroundColor:\s*"#ff6600"[\s\S]*?\}[\s\S]*?>[\s\S]*?<span>[\s\S]*?([^<]+)[\s\S]*?<\/span>[\s\S]*?<\/Html>[\s\S]*?\)\}/,
  ];
  
  let updated = content;
  let title = extractTitle(content, basename);
  
  for (const pattern of oldPatterns) {
    if (pattern.test(updated)) {
      const match = updated.match(pattern);
      const extractedTitle = match[1] ? match[1].trim() : title;
      
      const newTitleDisplay = `{shouldShowTitle && (
            <Html
              center
              style={{
                width: "max-content",
                padding: "8px 12px",
                backgroundColor: "#ff6600",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #ffffff",
                borderRadius: "4px",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: "bold" }}>
                ${extractedTitle}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#ff6600",
                  border: "none",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "500",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                View more →
              </button>
            </Html>
          )}`;
      
      updated = updated.replace(pattern, newTitleDisplay);
      break;
    }
  }
  
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    console.log(`Fixed title display in ${basename}`);
  }
});
