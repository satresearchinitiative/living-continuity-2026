const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const articleFiles = glob.sync(path.join(ROOT, 'models', 'active', 'a*.jsx'));

const articleImages = {
  'a4': '/entriesImages/a4.jpg', 'a5': '/entriesImages/a5.jpg', 'a6': '/entriesImages/a6.jpg',
  'a7': '/entriesImages/a7.jpg', 'a8': '/entriesImages/a8.jpg', 'a9': '/entriesImages/a9.jpg',
  'a11': '/entriesImages/a11.jpg', 'a12': '/entriesImages/a12.jpg', 'a13': '/entriesImages/a13.jpg',
  'a14': '/entriesImages/a14.jpg', 'a15': '/entriesImages/a15.jpg', 'a16': '/entriesImages/a16.jpg',
  'a17': '/entriesImages/a17.jpg', 'a18': '/entriesImages/a18.jpg', 'a19': '/entriesImages/a19.jpg',
  'a20': '/entriesImages/a20.png', 'a21': '/entriesImages/a21.jpg', 'a22': '/entriesImages/a22.jpg',
  'a23': '/entriesImages/a23.jpg', 'a24': '/entriesImages/a24.jpg', 'a25': '/entriesImages/a25.jpg',
  'a26': '/entriesImages/a26.jpg', 'a27': '/entriesImages/a27.jpg',
};

articleFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  const imagePath = articleImages[basename.toLowerCase()];
  
  if (!imagePath) return;
  if (content.includes('RotatingImage') && content.includes(imagePath)) return;
  
  // Add import
  if (!content.includes('import { RotatingImage }')) {
    content = content.replace(
      /(import { useShouldShowTitle } from "\.\.\/\.\.\/components\/utils\/useShouldShowTitle";)/,
      `$1\nimport { RotatingImage } from "../../components/utils/RotatingImage";`
    );
  }
  
  // Find the exact pattern: <group> followed by two <mesh> elements
  const pattern = /(\s*)<group>\s*<mesh[\s\S]*?geometry=\{nodes\.[^}]+\}[\s\S]*?<\/mesh>\s*<mesh[\s\S]*?geometry=\{nodes\.[^}]+\}[\s\S]*?<\/mesh>\s*<\/group>/;
  
  if (pattern.test(content)) {
    const match = content.match(pattern);
    const indent = match[1] || '            ';
    const replacement = `${indent}<RotatingImage
              imageUrl="${imagePath}"
              position={[0, 0, 0]}
              scale={[3, 3, 1]}
              rotationSpeed={0.3}
              tiltAmount={0.15}
            />`;
    content = content.replace(pattern, replacement);
    fs.writeFileSync(file, content);
    console.log(`Fixed ${basename}`);
  }
});
