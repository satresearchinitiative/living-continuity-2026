const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

const titles = {
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

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const title = titles[basename];
  
  if (!title) return;
  
  // Multiple patterns to match empty spans
  const patterns = [
    /<span style=\{\{[\s\S]*?textAlign:\s*"center"\s*\}\}>[\s\n]*<\/span>/,
    /<span style=\{\{ color: "#ffffff", fontSize: "16px", fontWeight: "bold",\s*textAlign: "center" \}\}>[\s\n]*<\/span>/,
    /<span style=\{\{ color: "#ffffff", fontSize: "16px", fontWeight: "bold",[\s\n]*textAlign: "center" \}\}>[\s\n]*<\/span>/,
  ];
  
  let fixed = false;
  for (const pattern of patterns) {
    if (pattern.test(content) && !content.includes(`>${title}<`)) {
      const replacement = `<span style={{ color: "#ffffff", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
                ${title}
              </span>`;
      content = content.replace(pattern, replacement);
      fixed = true;
      break;
    }
  }
  
  if (fixed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed title in ${basename}`);
  }
});
