/**
 * CrossButton Component
 * 
 * A reusable cross/X button component with customizable color.
 * @param {string} color - The color of the cross lines (default: COLOR_BLACK)
 * @param {function} onClick - Click handler function
 * @param {string} className - Additional CSS classes
 */
'use client';

import React from 'react';
import { COLOR_BLACK } from '../_setup/colors';
import './menu.scss';

export default function CrossButton({ color = COLOR_BLACK, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick} 
      className={`cross-button ${className}`}
      aria-label="Close menu"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line 
          x1="3" 
          y1="3" 
          x2="21" 
          y2="21" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <line 
          x1="21" 
          y1="3" 
          x2="3" 
          y2="21" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
