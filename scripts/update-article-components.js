const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Article titles mapping
const articleTitles = {
  'a1': 'Adaptive Re-Use in Sharjah',
  'a2': 'Alleyways mapping forgotten spaces',
  'a3': 'Asymmetries of Waste Infrastructure Urban Pakistan (and Beyond)',
  'a4': 'City as a Category of Practice',
  'a5': 'Community Expulsion',
  'a6': 'Documenting Informality in Sharjah\'s Industrial Zones',
  'a7': 'Domestication of the Public Realm',
  'a8': 'Fareej in the Sky: Vertical Social Housing in UAE',
  'a9': 'Folk Housing Revisited (Ghubaibah)',
  'a10': 'Gentrification in Cairo',
  'a11': 'Living Legacies? Making space for the social in the mega-event city',
  'a12': 'Meet Your Neighbors (Again)',
  'a13': 'Migrant Spatial Practice / Residential Typologies',
  'a14': 'More than buildings',
  'a15': '(Re)tracing Beirut\'s Neighbourhood Boundaries',
  'a16': '[Re]wilding the urban void',
  'a17': 'Seeking Environmental Justice in the In-Between Spaces of Sharjah',
  'a18': 'Social Cohesion',
  'a19': 'The Built Environment, Rebuilt: Assessing the Role of LEED in Enabling Socio-Spatial Transformations',
  'a20': 'the Friends Schools, tracing the interconnected socio-cultural, spatial and political',
  'a21': 'The Vast Land of Al Rahba City; a Neighbourhood Afflicted by The Suburban Dream',
  'a22': 'Third Spaces as opportunities for community enrichment spaces',
  'a23': 'Urban Design for social progress: Learning from the neighborhood planning of early 20th century Hyderabad, India',
  'a24': 'Urban Diversions: (Un)Intended Uses of an Abu Dhabi Park',
  'a25': 'Waste/land: Plants and people out of place, right where they belong',
  'a26': 'We Remember What The Land Forgets: Mediating Urban Heritage in/as Archival Commons',
  'a27': 'My hope is that mugunghwa does not become a weed',
};

function updateArticleFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const nodeId = basename.toUpperCase();
  const title = articleTitles[basename] || basename;
  
  let updated = content;
  
  // 1. Remove second click modal opening
  updated = updated.replace(
    /else if \(clickCount === 2\)\s*\{[^}]*setOpen\(true\);[^}]*\}/g,
    '// Removed second click modal opening - now handled by "View more" button'
  );
  
  // 2. Update click handler to always activate (not toggle)
  const clickHandlerPattern = /function handleClick\(\)\s*\{[^}]*setClicked\(!clicked\);[^}]*setClickCount\(clickCount \+ 1\);[^}]*\}/s;
  if (clickHandlerPattern.test(updated)) {
    updated = updated.replace(
      clickHandlerPattern,
      `function handleClick() {
    // Always activate on click (don't toggle)
    if (clickCount === 0) {
      setClicked(true);
      setClickCount(1);
      setLinesActive(true);
      ${content.includes('setA1Store') ? 'setA1Store(true);' : content.includes('setStore') ? 'setStore(true);' : ''}
      setTitle();
    } else {
      // If already active, clicking again deselects
      setClickCount(0);
      setClicked(false);
      setLinesActive(false);
      setDefault();
      ${content.includes('setA1Store') ? 'setA1Store(false);' : content.includes('setStore') ? 'setStore(false);' : ''}
    }
  }`
    );
  }
  
  // 3. Update title display to include "View more" button
  // This is complex and varies, so we'll do a pattern match
  const titleDisplayPattern = /\{shouldShowTitle && \([\s\S]*?<Html[\s\S]*?center[\s\S]*?style=\{[\s\S]*?\}[\s\S]*?>[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/Html>[\s\S]*?\)\}/;
  
  if (titleDisplayPattern.test(updated)) {
    const titleMatch = updated.match(titleDisplayPattern);
    const extractedTitle = titleMatch[1] || title;
    
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
    
    updated = updated.replace(titleDisplayPattern, newTitleDisplay);
  }
  
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    console.log(`Updated ${basename}`);
    return true;
  }
  return false;
}

console.log('Updating article files...');
let updatedCount = 0;
articleFiles.forEach(file => {
  if (updateArticleFile(file)) {
    updatedCount++;
  }
});

console.log(`\nUpdated ${updatedCount} files.`);
console.log('Note: Some files may need manual review for title text extraction.');
