/**
 * Menu Component
 * 
 * Sliding menu panel that slides in from the left side.
 * @param {boolean} isOpen - Controls menu visibility
 * @param {function} onClose - Callback function to close the menu
 */
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CrossButton from './CrossButton';
import { COLOR_BLACK } from '../_setup/colors';
import './menu.scss';

export default function Menu({ isOpen, onClose }) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'A Collective Inquiry', href: '/', external: false },
    // { label: 'Archive', href: '#', external: false }
    { label: 'Kit Of Parts', href: '/kit-of-parts', external: false },
    { label: 'Glossary', href: '/glossary', external: false },
    { label: 'Toolkit', href: 'https://drive.google.com/drive/u/2/folders/12uXdvFvDyFfQSQ1xgGVDB3wzs5fKsMnV', external: true }, 
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
        {/* Close Button - Positioned on the right */}
        <div className="menu-close">
          <CrossButton color={COLOR_BLACK} onClick={onClose} />
        </div>

        {/* Menu Items - Start immediately on the left */}
        <nav className="menu-nav">
          <ul>
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              const className = isActive ? 'menu-item menu-item-archive' : 'menu-item';
              
              if (item.external) {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={className}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
