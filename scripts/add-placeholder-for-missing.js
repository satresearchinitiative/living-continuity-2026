const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

// Check which images exist
const imageExists = {};
for (let i = 1; i <= 27; i++) {
  const jpg = path.join(ROOT, 'public', 'entriesImages', `a${i}.jpg`);
  const png = path.join(ROOT, 'public', 'entriesImages', `a${i}.png`);
  imageExists[`a${i}`] = fs.existsSync(jpg) || fs.existsSync(png);
}

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const hasImage = imageExists[basename.toLowerCase()];
  
  // If article doesn't have RotatingImage, add it with placeholder
  if (!content.includes('RotatingImage')) {
    // Add import
    if (content.includes('import { useShouldShowTitle }')) {
      content = content.replace(
        /(import { useShouldShowTitle } from "\.\.\/\.\.\/components\/utils\/useShouldShowTitle";)/,
        `$1\nimport { RotatingImage } from "../../components/utils/RotatingImage";`
      );
    }
    
    // Find where to insert (after clickCount === 0 check)
    const insertPattern = /(\{clickCount === 0[^}]*&&[^}]*\()/;
    if (insertPattern.test(content)) {
      const imagePath = hasImage 
        ? `/entriesImages/${basename.toLowerCase()}.jpg`
        : '/entriesImages/placeholder.svg';
      
      const replacement = `$1
            <RotatingImage
              imageUrl="${imagePath}"
              position={[0, 0, 0]}
              scale={[6, 6, 1]}
              rotationSpeed={0.3}
              tiltAmount={0.15}
            />
          )`;
      content = content.replace(insertPattern, replacement);
      fs.writeFileSync(file, content);
      console.log(`Added RotatingImage to ${basename} with ${hasImage ? 'existing' : 'placeholder'} image`);
    }
  } else if (!hasImage && content.includes('RotatingImage')) {
    // Update existing RotatingImage to use placeholder
    const imagePattern = /imageUrl="[^"]+"/;
    if (imagePattern.test(content)) {
      content = content.replace(imagePattern, 'imageUrl="/entriesImages/placeholder.svg"');
      fs.writeFileSync(file, content);
      console.log(`Updated ${basename} to use placeholder`);
    }
  }
});
