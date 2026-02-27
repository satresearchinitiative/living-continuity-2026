/**
 * GradientController Component
 * 
 * Manages smooth gradient color transitions between pages using JavaScript.
 * The gradients persist across page changes and smoothly animate color changes.
 */
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useStore } from 'usestore-react';
import { COLOR_PINK_LIGHT, COLOR_BLUE_LIGHT, COLOR_ORANGE_1, COLOR_ORANGE_2, COLOR_MINT, COLOR_BLACK, COLOR_GRAY_DARK_3, COLOR_WHITE } from '../_setup/colors';

// Define gradient colors for each page
const PAGE_GRADIENTS = {
  '/': {
    top: COLOR_PINK_LIGHT,
    bottom: COLOR_PINK_LIGHT,
  },
  '/living-continuity': {
    top: COLOR_PINK_LIGHT,
    bottom: COLOR_PINK_LIGHT,
  },
  '/glossary': {
    top: COLOR_BLUE_LIGHT,
    bottom: COLOR_BLUE_LIGHT,
  },
  '/kit-of-parts': {
    top: COLOR_ORANGE_2,
    bottom: COLOR_ORANGE_2,
  },
  '/circle': {
    top: COLOR_BLUE_LIGHT,
    bottom: COLOR_BLUE_LIGHT,
  },
  '/room': {
    top: COLOR_BLUE_LIGHT,
    bottom: COLOR_BLUE_LIGHT,
  },
  // Default gradient (fallback)
  default: {
    top: COLOR_BLUE_LIGHT,
    bottom: COLOR_BLUE_LIGHT,
  },
};

/**
 * Converts hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Converts RGB to hex
 */
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

/**
 * Interpolates between two colors
 */
function interpolateColor(color1, color2, factor) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return color1;
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  
  return rgbToHex(r, g, b);
}

/**
 * Creates a gradient string from a color
 */
function createGradient(color, direction) {
  // Convert hex to rgba with 0 opacity for transparency
  const rgb = hexToRgb(color);
  const transparent = rgb 
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
    : 'rgba(255, 255, 255, 0)';
  
  // Create intermediate stops with partial opacity for softer gradient
  const midStop1 = rgb 
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`
    : 'rgba(255, 255, 255, 0.6)';
  const midStop2 = rgb 
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
    : 'rgba(255, 255, 255, 0.3)';
  
  if (direction === 'top') {
    return `linear-gradient(to bottom, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
  } else if (direction === 'bottom') {
    return `linear-gradient(to top, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
  } else if (direction === 'center') {
    // For center gradients, fade from transparent to color to transparent
    return `linear-gradient(to bottom, ${transparent} 0%, ${midStop2} 30%, ${color} 50%, ${midStop2} 70%, ${transparent} 100%)`;
  } else {
    return `linear-gradient(to top, ${color} 0%, ${midStop1} 40%, ${midStop2} 70%, ${transparent} 100%)`;
  }
}

export default function GradientController() {
  const pathname = usePathname();
  const [selectedNode] = useStore('selectedNodeStore', null);
  const topGradientRef = useRef(null);
  const bottomGradientRef = useRef(null);
  // Additional gradient refs for glossary page (4 sections)
  const glossaryGradient1Ref = useRef(null);
  const glossaryGradient2Ref = useRef(null);
  const glossaryGradient3Ref = useRef(null);
  const glossaryGradient4Ref = useRef(null);
  const animationFrameRef = useRef(null);
  const isInitializedRef = useRef(false);
  const currentColorsRef = useRef(null);
  const targetColorsRef = useRef(null);
  const startTimeRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const previousPathnameRef = useRef(null);
  const previousSelectedNodeRef = useRef(null);

  const basePageGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS.default;
  
  const targetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode
    ? { top: COLOR_MINT, bottom: COLOR_MINT }
    : basePageGradient;

  useEffect(() => {
    if (!isInitializedRef.current) {
      currentColorsRef.current = {
        top: targetGradient.top,
        bottom: targetGradient.bottom,
      };
      targetColorsRef.current = {
        top: targetGradient.top,
        bottom: targetGradient.bottom,
      };
      previousPathnameRef.current = pathname;
      previousSelectedNodeRef.current = selectedNode;
      isInitializedRef.current = true;

      requestAnimationFrame(() => {
        const isGlossary = pathname === '/glossary';
        if (isGlossary) {
          // Initialize glossary gradients (top left, top right, bottom left, bottom right)
          if (glossaryGradient1Ref.current) {
            glossaryGradient1Ref.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
            glossaryGradient1Ref.current.style.setProperty('transition', 'none', 'important');
          }
          if (glossaryGradient2Ref.current) {
            glossaryGradient2Ref.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
            glossaryGradient2Ref.current.style.setProperty('transition', 'none', 'important');
          }
          if (glossaryGradient3Ref.current) {
            glossaryGradient3Ref.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
            glossaryGradient3Ref.current.style.setProperty('transition', 'none', 'important');
          }
          if (glossaryGradient4Ref.current) {
            glossaryGradient4Ref.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
            glossaryGradient4Ref.current.style.setProperty('transition', 'none', 'important');
          }
        } else {
          // Initialize standard gradients
          if (topGradientRef.current) {
            topGradientRef.current.style.setProperty('background', createGradient(targetGradient.top, 'top'), 'important');
            topGradientRef.current.style.setProperty('transition', 'none', 'important');
          }
          if (bottomGradientRef.current) {
            bottomGradientRef.current.style.setProperty('background', createGradient(targetGradient.bottom, 'bottom'), 'important');
            bottomGradientRef.current.style.setProperty('transition', 'none', 'important');
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!isInitializedRef.current) return;
    
    const pathnameChanged = previousPathnameRef.current !== pathname;
    const previousNodeId = previousSelectedNodeRef.current?.id ?? null;
    const currentNodeId = selectedNode?.id ?? null;
    const selectedNodeChanged = previousNodeId !== currentNodeId;
    
    if (!pathnameChanged && !selectedNodeChanged) return;

    const baseGradient = PAGE_GRADIENTS[pathname] || PAGE_GRADIENTS.default;
    const newTargetGradient = (pathname === '/living-continuity' || pathname === '/') && selectedNode
      ? { top: COLOR_MINT, bottom: COLOR_MINT }
      : baseGradient;

    const targetTop = newTargetGradient.top;
    const targetBottom = newTargetGradient.bottom;
    
    if (!currentColorsRef.current) {
      currentColorsRef.current = {
        top: baseGradient.top,
        bottom: baseGradient.bottom,
      };
    }
    
    const currentTop = currentColorsRef.current.top;
    const currentBottom = currentColorsRef.current.bottom;

    if (currentTop === targetTop && currentBottom === targetBottom) {
      previousPathnameRef.current = pathname;
      previousSelectedNodeRef.current = selectedNode;
      return;
    }

    targetColorsRef.current = {
      top: targetTop,
      bottom: targetBottom,
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const isGlossary = pathname === '/glossary';
    if (isGlossary) {
      if (glossaryGradient1Ref.current) {
        glossaryGradient1Ref.current.style.setProperty('transition', 'none', 'important');
      }
      if (glossaryGradient2Ref.current) {
        glossaryGradient2Ref.current.style.setProperty('transition', 'none', 'important');
      }
      if (glossaryGradient3Ref.current) {
        glossaryGradient3Ref.current.style.setProperty('transition', 'none', 'important');
      }
      if (glossaryGradient4Ref.current) {
        glossaryGradient4Ref.current.style.setProperty('transition', 'none', 'important');
      }
    } else {
      if (topGradientRef.current) {
        topGradientRef.current.style.setProperty('transition', 'none', 'important');
      }
      if (bottomGradientRef.current) {
        bottomGradientRef.current.style.setProperty('transition', 'none', 'important');
      }
    }

    isAnimatingRef.current = true;
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const duration = 1000;
      const progress = Math.min(elapsed / duration, 1);

      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const currentTop = interpolateColor(
        currentColorsRef.current.top,
        targetColorsRef.current.top,
        eased
      );
      const currentBottom = interpolateColor(
        currentColorsRef.current.bottom,
        targetColorsRef.current.bottom,
        eased
      );

      const isGlossary = pathname === '/glossary';
      if (isGlossary) {
        // Update glossary gradients (top left, top right, bottom left, bottom right)
        if (glossaryGradient1Ref.current) {
          glossaryGradient1Ref.current.style.background = createGradient(currentTop, 'top');
        }
        if (glossaryGradient2Ref.current) {
          glossaryGradient2Ref.current.style.background = createGradient(currentTop, 'top');
        }
        if (glossaryGradient3Ref.current) {
          glossaryGradient3Ref.current.style.background = createGradient(currentBottom, 'bottom');
        }
        if (glossaryGradient4Ref.current) {
          glossaryGradient4Ref.current.style.background = createGradient(currentBottom, 'bottom');
        }
      } else {
        // Update standard gradients
        const topGradient = topGradientRef.current;
        const bottomGradient = bottomGradientRef.current;
        
        if (topGradient) {
          topGradient.style.background = createGradient(currentTop, 'top');
        }
        if (bottomGradient) {
          bottomGradient.style.background = createGradient(currentBottom, 'bottom');
        }
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        currentColorsRef.current = {
          top: targetColorsRef.current.top,
          bottom: targetColorsRef.current.bottom,
        };
        isAnimatingRef.current = false;
        previousPathnameRef.current = pathname;
        previousSelectedNodeRef.current = selectedNode;
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pathname, selectedNode]);

  const initialTop = currentColorsRef.current?.top || targetGradient.top;
  const initialBottom = currentColorsRef.current?.bottom || targetGradient.bottom;
  const isGlossaryPage = pathname === '/glossary';

  return (
    <>
      {!isGlossaryPage && (
        <>
          <div 
            ref={topGradientRef}
            className="gradient-overlay-top"
            style={{
              background: createGradient(initialTop, 'top'),
              transition: 'none',
            }}
          />
          <div 
            ref={bottomGradientRef}
            className="gradient-overlay-bottom"
            style={{
              background: createGradient(initialBottom, 'bottom'),
              transition: 'none',
            }}
          />
        </>
      )}
      {isGlossaryPage && (
        <>
          {/* Top left gradient section */}
          <div 
            ref={glossaryGradient1Ref}
            className="gradient-overlay-glossary-top-left"
            style={{
              background: createGradient(initialTop, 'top'),
              transition: 'none',
            }}
          />
          {/* Top right gradient section */}
          <div 
            ref={glossaryGradient2Ref}
            className="gradient-overlay-glossary-top-right"
            style={{
              background: createGradient(initialTop, 'top'),
              transition: 'none',
            }}
          />
          {/* Bottom left gradient section */}
          <div 
            ref={glossaryGradient3Ref}
            className="gradient-overlay-glossary-bottom-left"
            style={{
              background: createGradient(initialBottom, 'bottom'),
              transition: 'none',
            }}
          />
          {/* Bottom right gradient section */}
          <div 
            ref={glossaryGradient4Ref}
            className="gradient-overlay-glossary-bottom-right"
            style={{
              background: createGradient(initialBottom, 'bottom'),
              transition: 'none',
            }}
          />
        </>
      )}
    </>
  );
}

