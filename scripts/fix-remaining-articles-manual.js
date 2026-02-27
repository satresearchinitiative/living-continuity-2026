const fs = require('fs');
const path = require('path');

const files = [
  { file: 'models/active/a5.jsx', img: '/entriesImages/a5.jpg' },
  { file: 'models/active/a6.jsx', img: '/entriesImages/a6.jpg' },
  { file: 'models/active/a7.jsx', img: '/entriesImages/a7.jpg' },
  { file: 'models/active/a8.jsx', img: '/entriesImages/a8.jpg' },
  { file: 'models/active/a9.jsx', img: '/entriesImages/a9.jpg' },
  { file: 'models/active/a11.jsx', img: '/entriesImages/a11.jpg' },
  { file: 'models/active/a12.jsx', img: '/entriesImages/a12.jpg' },
  { file: 'models/active/a13.jsx', img: '/entriesImages/a13.jpg' },
  { file: 'models/active/a14.jsx', img: '/entriesImages/a14.jpg' },
  { file: 'models/active/a15.jsx', img: '/entriesImages/a15.jpg' },
  { file: 'models/active/a16.jsx', img: '/entriesImages/a16.jpg' },
  { file: 'models/active/a17.jsx', img: '/entriesImages/a17.jpg' },
  { file: 'models/active/a18.jsx', img: '/entriesImages/a18.jpg' },
  { file: 'models/active/a19.jsx', img: '/entriesImages/a19.jpg' },
  { file: 'models/active/a20.jsx', img: '/entriesImages/a20.png' },
  { file: 'models/active/a21.jsx', img: '/entriesImages/a21.jpg' },
  { file: 'models/active/a22.jsx', img: '/entriesImages/a22.jpg' },
  { file: 'models/active/a23.jsx', img: '/entriesImages/a23.jpg' },
  { file: 'models/active/a24.jsx', img: '/entriesImages/a24.jpg' },
  { file: 'models/active/a25.jsx', img: '/entriesImages/a25.jpg' },
  { file: 'models/active/a26.jsx', img: '/entriesImages/a26.jpg' },
  { file: 'models/active/a27.jsx', img: '/entriesImages/a27.jpg' },
];

const ROOT = path.join(__dirname, '..');

files.forEach(({ file, img }) => {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const basename = path.basename(file, '.jsx');
  
  // Skip if already has RotatingImage
  if (content.includes('RotatingImage') && content.includes(img)) {
    return;
  }
  
  // Add import
  if (!content.includes('import { RotatingImage }')) {
    content = content.replace(
      /(import { useShouldShowTitle } from "\.\.\/\.\.\/components\/utils\/useShouldShowTitle";)/,
      `$1\nimport { RotatingImage } from "../../components/utils/RotatingImage";`
    );
  }
  
  // Replace mesh group - multiline pattern
  const meshPattern = /<group>\s*<mesh[\s\S]*?geometry=\{nodes\.[^}]+\}[\s\S]*?<\/mesh>\s*<mesh[\s\S]*?geometry=\{nodes\.[^}]+\}[\s\S]*?<\/mesh>\s*<\/group>/;
  
  if (meshPattern.test(content)) {
    content = content.replace(meshPattern, `<RotatingImage
              imageUrl="${img}"
              position={[0, 0, 0]}
              scale={[3, 3, 1]}
              rotationSpeed={0.3}
              tiltAmount={0.15}
            />`);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${basename}`);
  } else {
    console.log(`Could not find mesh pattern in ${basename}`);
  }
});
