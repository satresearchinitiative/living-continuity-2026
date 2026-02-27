'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, MenuButton } from './index';

const getPageTitle = (pathname) => {
  if (pathname === '/living-continuity' || pathname === '/') {
    return 'A collective Inquiry';
  } else if (pathname === '/glossary') {
    return 'Glossary';
  } else if (pathname === '/kit-of-parts') {
    return 'Kit Of Parts';
  }
  return 'A collective Inquiry';
};

export default function MenuWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <>
      <div>
        <MenuButton onClick={() => setMenuOpen(true)} title={pageTitle} />
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
