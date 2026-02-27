const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Map article IDs to their image paths
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

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const imagePath = articleImages[basename.toLowerCase()];
  
  if (!imagePath) {
    console.log(`No image found for ${basename}`);
    return;
  }
  
  let modified = false;
  
  // Add RotatingImage import if not present
  if (!content.includes('import { RotatingImage }')) {
    if (content.includes('import { useShouldShowTitle }')) {
      content = content.replace(
        /import { useShouldShowTitle } from "\.\.\/\.\.\/components\/utils\/useShouldShowTitle";/,
        `import { useShouldShowTitle } from "../../components/utils/useShouldShowTitle";\nimport { RotatingImage } from "../../components/utils/RotatingImage";`
      );
      modified = true;
    }
  }
  
  // Find and replace the mesh group with RotatingImage
  // Pattern: {clickCount === 0 && ... (<group><mesh>...</mesh></group>)}
  const meshPattern = /(\{clickCount === 0[^}]*&&[^}]*\()\s*<group>\s*<mesh[\s\S]*?<\/mesh>[\s\S]*?<\/mesh>[\s\S]*?<\/group>\s*\)/;
  
  if (meshPattern.test(content)) {
    const replacement = `$1
              <RotatingImage
                imageUrl="${imagePath}"
                position={[0, 0, 0]}
                scale={[3, 3, 1]}
                rotationSpeed={0.3}
                tiltAmount={0.15}
              />
            )`;
    content = content.replace(meshPattern, replacement);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${basename} with image: ${imagePath}`);
  }
});
