'use client';

import React from 'react';
import './navigation.scss';

export default function SubmitEntryButton({ 
  personName,
  onClick,
  variant = 'default'
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Submit entry clicked');
    }
  };

  return (
    <button 
      className={`navigation-button navigation-button-submit navigation-button-${variant}`}
      onClick={handleClick}
      aria-label="Submit Entry"
    >
      <span className="submit-text">TAP TO SUBMIT YOUR ENTRY</span>
      {personName && (
        <span className="person-name">{personName}</span>
      )}
    </button>
  );
}
