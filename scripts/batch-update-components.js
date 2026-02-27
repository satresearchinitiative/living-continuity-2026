/**
 * Batch Update Script for Tree Components
 * 
 * This script helps identify which files still need updates.
 * Run: node scripts/batch-update-components.js
 */

const fs = require('fs');
const path = require('path');

const componentIndices = {
  // A components (0-26)
  'a1': 0, 'a2': 1, 'a3': 2, 'a4': 3, 'a5': 4, 'a6': 5, 'a7': 6, 'a8': 7, 'a9': 8,
  'a10': 9, 'a11': 10, 'a12': 11, 'a13': 12, 'a14': 13, 'a15': 14, 'a16': 15, 'a17': 16, 'a18': 17,
  'a19': 18, 'a20': 19, 'a21': 20, 'a22': 21, 'a23': 22, 'a24': 23, 'a25': 24, 'a26': 25, 'a27': 26,
  
  // G components (27-58)
  'g1': 27, 'g2': 28, 'g3': 29, 'g4': 30, 'g5': 31, 'g6': 32, 'g7': 33, 'g8': 34, 'g9': 35, 'g10': 36,
  'g11': 37, 'g12': 38, 'g13': 39, 'g14': 40, 'g15': 41, 'g16': 42, 'g17': 43, 'g18': 44, 'g19': 45, 'g20': 46,
  'g21': 47, 'g22': 48, 'g23': 49, 'g24': 50, 'g25': 51, 'g26': 52, 'g27': 53, 'g28': 54, 'g29': 55, 'g30': 56,
  'g31': 57, 'g32': 58,
};

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const needsUpdate = {
    hasUseMemo: content.includes('useMemo'),
    hasRadialPosition: content.includes('getRadialPosition'),
    hasWhiteMaterial: content.includes('createWhiteMaterial'),
    hasCenterPoint: content.includes('centerPoint'),
    hasOldColors: content.includes('#92ecff') || content.includes('#44ffa5') || content.includes('#00aadf'),
    hasThickLines: content.includes('lineWidth={10}') || content.includes('lineWidth={30}'),
    hasQuadraticBezier: content.includes('QuadraticBezierLine'),
  };
  
  return {
    needsUpdate: !needsUpdate.hasUseMemo || !needsUpdate.hasRadialPosition || 
                 !needsUpdate.hasWhiteMaterial || needsUpdate.hasOldColors || 
                 needsUpdate.hasThickLines || needsUpdate.hasQuadraticBezier,
    details: needsUpdate
  };
}

// Check all files
const activeDir = path.join(__dirname, '../models/active');
const unactiveDir = path.join(__dirname, '../models/unactive');

console.log('Checking Active Components (a1-a27):');
for (let i = 1; i <= 27; i++) {
  const file = path.join(activeDir, `a${i}.jsx`);
  if (fs.existsSync(file)) {
    const result = checkFile(file);
    const status = result.needsUpdate ? '❌ NEEDS UPDATE' : '✅ UPDATED';
    console.log(`  a${i}.jsx: ${status}`);
  }
}

console.log('\nChecking Glossary Components (g1-g32):');
for (let i = 1; i <= 32; i++) {
  const file = path.join(unactiveDir, `g${i}.jsx`);
  if (fs.existsSync(file)) {
    const result = checkFile(file);
    const status = result.needsUpdate ? '❌ NEEDS UPDATE' : '✅ UPDATED';
    console.log(`  g${i}.jsx: ${status}`);
  }
}

