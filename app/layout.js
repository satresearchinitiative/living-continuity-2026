'use client';

import '../components/utils/appStores';
import { useEffect, useState, useRef, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Modal from 'react-modal';
import '../components/_setup/globals.scss';
import MenuWrapper from '../components/menu/MenuWrapper';
import GradientController from '../components/gradient';
import HomeButton from '../components/homeButton';
import HomeTitle from '../components/homeTitle';
import NavigationControls from '../components/navigation/NavigationControls';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isInitialMount, setIsInitialMount] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootElement = document.getElementById('root');
      if (rootElement && !rootElement.hasAttribute('data-modal-initialized')) {
        try {
          Modal.setAppElement('#root');
          rootElement.setAttribute('data-modal-initialized', 'true');
        } catch (error) {
          console.warn('Modal.setAppElement warning:', error);
        }
      }

      const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setVh();
      window.addEventListener('resize', setVh);
      window.addEventListener('orientationchange', setVh);

      return () => {
        window.removeEventListener('resize', setVh);
        window.removeEventListener('orientationchange', setVh);
      };
    }
  }, []);
  
  useEffect(() => {
    // Skip transition on initial mount
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    
    // Trigger fade-out when pathname changes
    setIsPageVisible(false);
    
    // After fade-out, update children and fade-in using requestAnimationFrame
    let rafId1 = null;
    let rafId2 = null;
    let rafId3 = null;
    let checkTimeRafId = null;
    
    const startTime = performance.now();
    const checkTime = () => {
      if (performance.now() - startTime >= 350) {
        rafId1 = requestAnimationFrame(() => {
          rafId2 = requestAnimationFrame(() => {
      setDisplayChildren(children);
            rafId3 = requestAnimationFrame(() => {
          setIsPageVisible(true);
        });
      });
        });
      } else {
        checkTimeRafId = requestAnimationFrame(checkTime);
      }
    };
    checkTimeRafId = requestAnimationFrame(checkTime);
    
    return () => {
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      if (rafId3) cancelAnimationFrame(rafId3);
      if (checkTimeRafId) cancelAnimationFrame(checkTimeRafId);
    };
  }, [pathname, children, isInitialMount]);
  
  useEffect(() => {
    // Add page-specific class to body for gradient styling
    const body = document.body;
    const html = document.documentElement;
    
    // Remove all page classes
    body.classList.remove('page-landing', 'page-glossary', 'page-kit');
    html.classList.remove('page-landing', 'page-glossary', 'page-kit');
    
    // Add landing page class if on landing page
    if (pathname === '/living-continuity' || pathname === '/') {
      body.classList.add('page-landing');
      html.classList.add('page-landing');
    } 
    // Add glossary page class if on glossary page
    else if (pathname === '/glossary') {
      body.classList.add('page-glossary');
      html.classList.add('page-glossary');
    }
    // Add kit page class if on kit-of-parts page
    else if (pathname === '/kit-of-parts') {
      body.classList.add('page-kit');
      html.classList.add('page-kit');
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Living Continuity</title>
        <meta name="description" content="Living Continuity - Interactive 3D Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1C1C1C" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Living Continuity" />
        <meta property="og:description" content="Living Continuity - Interactive 3D Experience" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/SVG/rotate.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ortica-main/OrticaAngular-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ronzino-main/Ronzino-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: 'var(--color-gray-dark-2)', color: '#ffffff', margin: 0, padding: 0 }}>

       
  
        <div className="elements-wrapper"> 
          <GradientController />
          <HomeButton />
          <Suspense fallback={null}>
            <NavigationControls />
          </Suspense>
          <div className="corner-square top-left"></div>
          <div className="corner-square top-right"></div>
          <div className="corner-square bottom-left"></div>
          <div className="corner-square bottom-right"></div>
        </div>
        
        <MenuWrapper />
        <HomeTitle />
        
        <div id="root" className={isPageVisible ? 'page-visible' : 'page-hidden'}>
          {displayChildren}
        </div>
      </body>
    </html>
  );
}

