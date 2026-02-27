const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');
const keywordFiles = glob.sync(path.join(ROOT, 'models', 'unactive', 'g*.jsx'));

keywordFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file, '.jsx');
  let modified = false;
  
  // Remove opacity from group (doesn't work on groups)
  if (content.includes('opacity={opacity}') && content.includes('<group')) {
    content = content.replace(/<group([^>]*)\s+opacity=\{opacity\}([^>]*)>/g, '<group$1$2>');
    modified = true;
  }
  
  // Apply opacity to materials - find mesh elements and add opacity
  // Look for mesh elements with materials
  if (content.includes('material={whiteMaterial}') || content.includes('material={materials.')) {
    // Add opacity to whiteMaterial usage
    if (content.includes('material={whiteMaterial}') && !content.includes('whiteMaterial.opacity')) {
      // We need to update the material's opacity in useMemo or useEffect
      // First, find where whiteMaterial is created
      if (content.includes('const whiteMaterial = useMemo')) {
        // Add opacity update after whiteMaterial creation
        const whiteMaterialPattern = /(const whiteMaterial = useMemo\([^)]+\);[^;]*;)/;
        if (whiteMaterialPattern.test(content)) {
          // Add useEffect to update opacity
          const opacityEffect = `
  // Update material opacity
  useEffect(() => {
    if (whiteMaterial) {
      whiteMaterial.opacity = opacity;
      whiteMaterial.transparent = opacity < 1.0;
    }
  }, [opacity, whiteMaterial]);`;
          
          // Find a good place to insert (after whiteMaterial definition, before return)
          const insertPoint = content.indexOf('const shouldShowTitle');
          if (insertPoint > 0) {
            content = content.slice(0, insertPoint) + opacityEffect + '\n' + content.slice(insertPoint);
            modified = true;
          }
        }
      }
    }
    
    // Also update materials from useGLTF
    if (content.includes('const { nodes, materials } = useGLTF')) {
      // Add useEffect to update all material opacities
      const materialsOpacityEffect = `
  // Update all material opacities
  useEffect(() => {
    Object.values(materials).forEach(material => {
      if (material) {
        material.opacity = opacity;
        material.transparent = opacity < 1.0;
      }
    });
  }, [opacity, materials]);`;
      
      // Find insertion point (after materials definition)
      const materialsDef = content.indexOf('const { nodes, materials } = useGLTF');
      const nextLine = content.indexOf('\n', materialsDef) + 1;
      if (nextLine > 0 && !content.includes('// Update all material opacities')) {
        // Find where to insert (after all material-related code, before return)
        const insertPoint = content.indexOf('const shouldShowTitle');
        if (insertPoint > 0) {
          content = content.slice(0, insertPoint) + materialsOpacityEffect + '\n' + content.slice(insertPoint);
          modified = true;
        }
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated opacity for ${basename}`);
  }
});
