const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Map all articles to their images (use placeholder if image doesn't exist)
const articleImages = {
  'a1': '/entriesImages/a1.jpg',
  'a2': '/entriesImages/a2.jpg',
  'a3': '/entriesImages/a3.png',
  'a4': '/entriesImages/a4.jpg',
  'a5': '/entriesImages/a5.jpg',
  'a6': '/entriesImages/a6.jpg',
  'a7': '/entriesImages/a7.jpg',
  'a8': '/entriesImages/a8.jpg',
  'a9': '/entriesImages/a9.jpg',
  'a10': '/entriesImages/a10.jpg',
  'a11': '/entriesImages/a11.jpg',
  'a12': '/entriesImages/a12.jpg',
  'a13': '/entriesImages/a13.jpg',
  'a14': '/entriesImages/a14.jpg',
  'a15': '/entriesImages/a15.jpg',
  'a16': '/entriesImages/a16.jpg',
  'a17': '/entriesImages/a17.jpg',
  'a18': '/entriesImages/a18.jpg',
  'a19': '/entriesImages/a19.jpg',
  'a20': '/entriesImages/a20.png',
  'a21': '/entriesImages/a21.jpg',
  'a22': '/entriesImages/a22.jpg',
  'a23': '/entriesImages/a23.jpg',
  'a24': '/entriesImages/a24.jpg',
  'a25': '/entriesImages/a25.jpg',
  'a26': '/entriesImages/a26.jpg',
  'a27': '/entriesImages/a27.jpg',
};

// Placeholder image (we'll use a simple data URI or a default image)
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2U1ZTVlNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const imagePath = articleImages[basename.toLowerCase()] || PLACEHOLDER_IMAGE;
  
  let modified = false;
  
  // Add import if missing
  if (!content.includes('import { RotatingImage }')) {
    if (content.includes('import { useShouldShowTitle }')) {
      content = content.replace(
        /(import { useShouldShowTitle } from "\.\.\/\.\.\/components\/utils\/useShouldShowTitle";)/,
        `$1\nimport { RotatingImage } from "../../components/utils/RotatingImage";`
      );
      modified = true;
    }
  }
  
  // Check if still has mesh elements that need to be replaced
  if (content.includes('<mesh') && content.includes('geometry={nodes.')) {
    // Find the mesh group block - look for pattern with two meshes
    const lines = content.split('\n');
    let meshStart = -1;
    let meshEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('<group>') && i + 1 < lines.length && lines[i + 1].includes('<mesh')) {
        meshStart = i;
        // Find the closing </group>
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].includes('</group>')) {
            meshEnd = j;
            break;
          }
        }
        break;
      }
    }
    
    if (meshStart >= 0 && meshEnd >= 0) {
      // Get indentation from the line before meshStart
      const indent = lines[meshStart].match(/^(\s*)/)[1];
      
      const before = lines.slice(0, meshStart).join('\n');
      const after = lines.slice(meshEnd + 1).join('\n');
      const replacement = `${indent}<RotatingImage
              imageUrl="${imagePath}"
              position={[0, 0, 0]}
              scale={[6, 6, 1]}
              rotationSpeed={0.3}
              tiltAmount={0.15}
            />`;
      content = before + '\n' + replacement + '\n' + after;
      modified = true;
    }
  }
  
  // Update scale if RotatingImage already exists but has old scale
  if (content.includes('RotatingImage') && content.includes('scale={[3, 3, 1]}')) {
    content = content.replace(/scale=\{\[3, 3, 1\]\}/g, 'scale={[6, 6, 1]}');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${basename} with image: ${imagePath.substring(0, 30)}...`);
  }
});
