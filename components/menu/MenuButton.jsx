'use client';

import React from 'react';
import './menu.scss';

export default function MenuButton({ onClick, title = 'A collective Inquiry' }) {
  return (
    <>
      <div className="menu-button-wrapper">
        <button 
          onClick={onClick} 
          className="menu-button"
          aria-label="Open menu"
        >
          <span className="menu-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8H23M7 15H23M7 22H23" stroke="black" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </span>
        </button>
      </div>
      <div className="menu-title-wrapper">
        <span className="menu-title">{title}</span>
      </div>
    </>
  );
}
