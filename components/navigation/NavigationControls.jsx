'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useStore, getStore } from 'usestore-react';
import { toPng } from 'html-to-image';
import InfoPanel from './InfoPanel';
import IndexPanel from './IndexPanel';
import SubmitEntryPanel from './SubmitEntryPanel';
import InventoryPanel from './InventoryPanel';
import CaptureModal from '../captureModal/CaptureModal';
import './navigation.scss';

export default function NavigationControls({
  camera,
  setCamera,
  onSubmitEntry = null,
  currentKeywordTitle = null
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cameraOptions, setCameraOptions] = useStore('cameraOptions');
  const [infoPanelOpen, setInfoPanelOpen] = useState(false);
  const [indexPanelOpen, setIndexPanelOpen] = useState(false);
  const [submitEntryPanelOpen, setSubmitEntryPanelOpen] = useState(false);
  const submitFormRef = useRef(null);
  const currentKeywordTitleRef = useRef(currentKeywordTitle);
  const isGlossaryPage = pathname === '/glossary';

  useEffect(() => {
    currentKeywordTitleRef.current = currentKeywordTitle;
  }, [currentKeywordTitle]);
  const isKitOfPartsPage = pathname === '/kit-of-parts';
  const isLivingContinuityPage = pathname === '/living-continuity' || pathname === '/';
  const isLandingPage = pathname === '/' || pathname === '/living-continuity';
  const [objects, setObjects] = useStore('kitOfParts_objectsState', false);
  const [bathroom, setBathroom] = useStore('kitOfParts_clickbathroom2', false);
  const [boxbed, setBoxbed] = useStore('kitOfParts_boxbedState', false);
  const [front, setFront] = useStore('kitOfParts_frontState', false);
  const [kitchen, setKitchen] = useStore('kitOfParts_kitchenState', false);
  const [k2, setK2] = useStore('kitOfParts_k2State', false);
  const [st1, setSt1] = useStore('kitOfParts_st1State', false);
  const [st2, setSt2] = useStore('kitOfParts_st2State', false);
  const [stairs, setStairs] = useStore('kitOfParts_stairsState', false);
  const [sceneRotation, setSceneRotation] = useStore('kitOfParts_sceneRotation', false);
  const [livingContinuityRotation, setLivingContinuityRotation] = useStore('livingContinuity_sceneRotation', false);
  const [selectedObjectId] = useStore('selectedObjectId', null);
  const [, setObjectRotationTrigger] = useStore('objectRotationTrigger', 0);
  const [, setObjectPositionResetTrigger] = useStore('objectPositionResetTrigger', 0);
  const [walkThroughActive, setWalkThroughActive] = useStore('walkThroughActive', false);
  const [closeAllPanels, setCloseAllPanels] = useStore('kitOfParts_closeAllPanels', false);
  const [isCaptureModalOpen, setIsCaptureModalOpen] = useStore('kitOfParts_captureModalOpen', false);
  const [cachedImageDataUrl] = useStore('kitOfParts_cachedImageDataUrl', null);
  const [, setCaptureMode] = useStore('kitOfParts_captureMode', false);
  const [, setCachedImageDataUrl] = useStore('kitOfParts_cachedImageDataUrl', null);

  useEffect(() => {
    if (closeAllPanels && isKitOfPartsPage) {
      setInfoPanelOpen(false);
      setIndexPanelOpen(false);
      setCloseAllPanels(false);
    }
  }, [closeAllPanels, isKitOfPartsPage, setCloseAllPanels]);

  const handleCloseCaptureModal = useCallback(() => {
    setIsCaptureModalOpen(false);
    setCaptureMode(false);
    setTimeout(() => setCachedImageDataUrl(null), 300);
  }, [setIsCaptureModalOpen, setCaptureMode, setCachedImageDataUrl]);

  const [cameFromLivingContinuity, setCameFromLivingContinuity] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && isGlossaryPage) {
      const timestamp = sessionStorage.getItem('fromLivingContinuity');
      if (timestamp) {
        const timeDiff = Date.now() - parseInt(timestamp, 10);
        const isRecentNavigation = timeDiff < 10000;
        let hasValidReferrer = false;
        try {
          if (document.referrer) {
            const referrerUrl = new URL(document.referrer);
            hasValidReferrer = (referrerUrl.pathname === '/living-continuity' || referrerUrl.pathname === '/') && referrerUrl.origin === window.location.origin;
          }
        } catch (e) {
          hasValidReferrer = false;
        }
        setCameFromLivingContinuity(isRecentNavigation && hasValidReferrer);
      } else {
        setCameFromLivingContinuity(false);
      }
    } else if (typeof window !== 'undefined' && !isGlossaryPage) {
      sessionStorage.removeItem('fromLivingContinuity');
    }
  }, [isGlossaryPage]);

  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('fromLivingContinuity');
    }
    window.location.href = '/living-continuity';
  };

  const handleInfoClick = () => {
    setInfoPanelOpen(!infoPanelOpen);
    if (indexPanelOpen) {
      setIndexPanelOpen(false);
    }
  };

  const handleIndexClick = () => {
    setIndexPanelOpen(!indexPanelOpen);
    if (infoPanelOpen) {
      setInfoPanelOpen(false);
    }
  };

  const handleTour = () => {
    setWalkThroughActive(!walkThroughActive);
  };

  const handleSaveImage = useCallback(() => {
    if (isKitOfPartsPage) {
      setCaptureMode(true);
    } else {
      const mainContent = document.querySelector('main.kit-parts-main');
      if (!mainContent) {
        return;
      }

      toPng(mainContent, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'kit-of-parts.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isKitOfPartsPage, setCaptureMode]);

  const slugifyTitleForUrl = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    if (!isGlossaryPage && submitEntryPanelOpen) {
      setSubmitEntryPanelOpen(false);
    }
  }, [isGlossaryPage, submitEntryPanelOpen]);

  useEffect(() => {
    if (!isGlossaryPage) return;

    if (!submitEntryPanelOpen) {
      const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
      if (currentHash.endsWith('-submit')) {
        const keywordSlug = currentHash.replace('#', '').replace('-submit', '');
        window.history.replaceState(null, '', `#${keywordSlug}`);
      }
      return;
    }

  }, [submitEntryPanelOpen, currentKeywordTitle, pathname, router, isGlossaryPage]);

  const slugifyTitle = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmitEntryClick = () => {
    if (submitEntryPanelOpen && submitFormRef.current) {
      submitFormRef.current();
    } else {
      if (isGlossaryPage && typeof window !== 'undefined') {
        const hash = window.location.hash.substring(1);
        let keywordTitle = currentKeywordTitle || 'self-determination';

        if (hash && !hash.endsWith('-submit')) {
          const keywordElement = document.getElementById(hash);
          if (keywordElement) {
            const translations = keywordElement.querySelectorAll('[class*="glossaryTranslation"]');
            if (translations.length > 0) {
              const firstTranslation = translations[0].textContent?.trim();
              if (firstTranslation) {
                keywordTitle = firstTranslation;
                currentKeywordTitleRef.current = firstTranslation;
              }
            }
          } else {
            const allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
            let centeredItem = null;
            for (const item of allGlossaryItems) {
              const rect = item.getBoundingClientRect();
              const viewportCenter = window.innerHeight / 2;
              const itemCenter = rect.top + rect.height / 2;
              if (Math.abs(itemCenter - viewportCenter) < 100) {
                centeredItem = item;
                break;
              }
            }

            if (centeredItem) {
              const translations = centeredItem.querySelectorAll('[class*="glossaryTranslation"]');
              if (translations.length > 0) {
                const firstTranslation = translations[0].textContent?.trim();
                if (firstTranslation) {
                  keywordTitle = firstTranslation;
                  currentKeywordTitleRef.current = firstTranslation;
                }
              }
            }
          }
        } else {
          const allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
          let centeredItem = null;
          for (const item of allGlossaryItems) {
            const rect = item.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            if (Math.abs(itemCenter - viewportCenter) < 100) {
              centeredItem = item;
              break;
            }
          }

          if (centeredItem) {
            const translations = centeredItem.querySelectorAll('[class*="glossaryTranslation"]');
            if (translations.length > 0) {
              const firstTranslation = translations[0].textContent?.trim();
              if (firstTranslation) {
                keywordTitle = firstTranslation;
                currentKeywordTitleRef.current = firstTranslation;
              }
            }
          }
        }

        const keywordSlug = slugifyTitle(keywordTitle);
        window.history.replaceState(null, '', `#${keywordSlug}-submit`);
      }
      setSubmitEntryPanelOpen(true);
      if (onSubmitEntry) {
        onSubmitEntry();
      }
    }
  };

  const handleCloseSubmitPanel = () => {
    setSubmitEntryPanelOpen(false);
  };

  const handleInventoryClick = () => {
    if (isKitOfPartsPage) {
      setObjects(!objects);
    }
  };

  const [hashInitialized, setHashInitialized] = useState(false);

  const updateURLHash = useCallback(() => {
    if (!isKitOfPartsPage || !hashInitialized) return;

    const activeItems = [];
    if (bathroom) activeItems.push('bathroom');
    if (boxbed) activeItems.push('boxbed');
    if (front) activeItems.push('front');
    if (kitchen) activeItems.push('kitchen');
    if (k2) activeItems.push('k2');
    if (st1) activeItems.push('st1');
    if (st2) activeItems.push('st2');
    if (stairs) activeItems.push('stairs');

    const hash = activeItems.length > 0 ? `#${activeItems.join('-')}` : '';
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `${pathname}${hash}`);
    }
  }, [isKitOfPartsPage, bathroom, boxbed, front, kitchen, k2, st1, st2, stairs, pathname, hashInitialized]);

  useEffect(() => {
    if (!isKitOfPartsPage || typeof window === 'undefined') return;

    const hash = window.location.hash.slice(1);
    if (hash) {
      const items = hash.split('-');
      items.forEach(item => {
        switch (item.trim()) {
          case 'bathroom':
            setBathroom(true);
            break;
          case 'boxbed':
            setBoxbed(true);
            break;
          case 'front':
            setFront(true);
            break;
          case 'kitchen':
            setKitchen(true);
            break;
          case 'k2':
            setK2(true);
            break;
          case 'st1':
            setSt1(true);
            break;
          case 'st2':
            setSt2(true);
            break;
          case 'stairs':
            setStairs(true);
            break;
          default:
            break;
        }
      });
    } else {
      setBathroom(true);
      setBoxbed(true);
      setFront(true);
      setKitchen(true);
      setK2(true);
      setSt1(true);
      setSt2(true);
      setStairs(true);
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `${pathname}#bathroom-boxbed-front-kitchen-k2-st1-st2-stairs`);
      }
    }
    setHashInitialized(true);
  }, [isKitOfPartsPage, pathname]);

  useEffect(() => {
    if (!isKitOfPartsPage || !hashInitialized) return;
    updateURLHash();
  }, [isKitOfPartsPage, bathroom, boxbed, front, kitchen, k2, st1, st2, stairs, updateURLHash, hashInitialized]);

  const handleInventoryItemClick = (itemType) => {
    if (!isKitOfPartsPage) return;

    switch (itemType) {
      case 'bathroom':
        setBathroom(!bathroom);
        break;
      case 'boxbed':
        setBoxbed(!boxbed);
        break;
      case 'front':
        setFront(!front);
        break;
      case 'kitchen':
        setKitchen(!kitchen);
        break;
      case 'k2':
        setK2(!k2);
        break;
      case 'st1':
        setSt1(!st1);
        break;
      case 'st2':
        setSt2(!st2);
        break;
      case 'stairs':
        setStairs(!stairs);
        break;
      default:
        break;
    }
  };

  const handleRemoveItem = (itemType) => {
    if (!isKitOfPartsPage) return;

    switch (itemType) {
      case 'bathroom':
        setBathroom(false);
        break;
      case 'boxbed':
        setBoxbed(false);
        break;
      case 'front':
        setFront(false);
        break;
      case 'kitchen':
        setKitchen(false);
        break;
      case 'k2':
        setK2(false);
        break;
      case 'st1':
        setSt1(false);
        break;
      case 'st2':
        setSt2(false);
        break;
      case 'stairs':
        setStairs(false);
        break;
      default:
        break;
    }
  };

  const handleRevert = () => {
    if (!isKitOfPartsPage) return;
    
    setBathroom(true);
    setBoxbed(true);
    setFront(true);
    setKitchen(true);
    setK2(true);
    setSt1(true);
    setSt2(true);
    setStairs(true);
    
    setObjectPositionResetTrigger(prev => prev + 1);
  };

  const furnitureItems = isKitOfPartsPage ? [
    { type: 'bathroom', name: 'Bathroom', image: '/images/B1.png', active: bathroom },
    { type: 'boxbed', name: 'Boxbed', image: '/images/BB.png', active: boxbed },
    { type: 'front', name: 'Front Porch', image: '/images/FP.png', active: front },
    { type: 'kitchen', name: 'Kitchen', image: '/images/K1.png', active: kitchen },
    { type: 'k2', name: 'Kitchen (storage)', image: '/images/K2.png', active: k2 },
    { type: 'st1', name: 'Storage 1', image: '/images/S1.png', active: st1 },
    { type: 'st2', name: 'Storage 2', image: '/images/S1.png', active: st2 },
    { type: 'stairs', name: 'Stairs', image: '/images/ST1.png', active: stairs },
  ] : [];

  return (
    <>
      {isGlossaryPage && cameFromLivingContinuity && (
        <div className="navigation-controls-top-right">
          <button
            className="navigation-button navigation-button-go-back"
            onClick={handleGoBack}
            aria-label="Go back to living continuity"
          >
            <small>←</small><span>a collective inquiry</span>
            <img 
              src="/SVG/arrow.svg" 
              alt="" 
              className="navigation-button-go-back-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
      {isKitOfPartsPage && (
        <div className="navigation-controls-left">
          <button
            className="navigation-button navigation-button-inventory"
            onClick={handleInventoryClick}
            aria-label="Inventory"
          >
            ELEMENTS
          </button>
          <button
            className="navigation-button navigation-button-restart navigation-button-restart-mobile"
            onClick={handleRevert}
            aria-label="Restart"
          >
            restart
          </button>
        </div>
      )}
      <div className="navigation-controls">
        {isGlossaryPage ? (
          <button
            className={`navigation-button navigation-button-submit ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`}
            onClick={handleSubmitEntryClick}
            aria-label="Submit Entry"
          >
            TAP TO SUBMIT YOUR ENTRY
          </button>
        ) : isKitOfPartsPage ? (
          <>
            <button
              className={`navigation-button navigation-button-rotation ${sceneRotation === true ? 'navigation-button-rotation-active' : ''}`}
              onClick={() => {
                const currentValue = sceneRotation === true;
                setSceneRotation(!currentValue);
              }}
              aria-label={sceneRotation === true ? "Stop Rotation" : "Start Rotation"}
            >
              <span className="navigation-button-rotation-text">{sceneRotation === true ? 'focus' : 'rotate'}</span>
              <span className="navigation-button-rotation-icon">
                {sceneRotation === true ? (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
            <button
              className={`navigation-button navigation-button-capture ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`}
              onClick={handleSaveImage}
              aria-label="Capture"
            >
              capture
            </button>
            <button
              className="navigation-button navigation-button-restart navigation-button-restart-desktop"
              onClick={handleRevert}
              aria-label="Restart"
            >
              restart
            </button>
          </>
        ) : (
          <>
            <button
              className={`navigation-button navigation-button-rotation ${livingContinuityRotation ? 'navigation-button-rotation-active' : ''}`}
              onClick={() => {
                const currentValue = livingContinuityRotation ?? false;
                setLivingContinuityRotation(!currentValue);
              }}
              aria-label={livingContinuityRotation ? "Stop Rotation" : "Start Rotation"}
            >
              <span className="navigation-button-rotation-text">{livingContinuityRotation ? 'focus' : 'rotate'}</span>
              <span className="navigation-button-rotation-icon">
                {livingContinuityRotation ? (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10H10V13M17 10H20V13M13 20H10V17M17 20H20V17M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15M26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15M26 15C26 17.12 23.0974 18.9318 19 19.6591M26 15C26 12.2386 21.0751 10 15 10M4 15C4 12.88 6.90264 11.0682 11 10.3409M4 15C4 17.7615 8.92487 20 15 20M15 10L17 7M15 10L17 13M15 20L13 17M15 20L13 23" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
            <button
              className={`navigation-button navigation-button-walk-through ${walkThroughActive ? 'navigation-button-open' : ''} ${submitEntryPanelOpen ? 'navigation-button-open' : ''}`}
              onClick={handleTour}
              aria-label={walkThroughActive ? "Stop Walk Through" : "Start Walk Through"}
            >
              {walkThroughActive ? 'static view' : ' dynamic view'}
            </button>
          </>
        )}
        {isLivingContinuityPage && (
          <button
            className="navigation-button navigation-button-index"
            onClick={handleIndexClick}
            aria-label="List View"
          >
            <span className="navigation-button-info-text">List View</span>
          </button>
        )}
        <button
          className="navigation-button navigation-button-pink"
          onClick={handleInfoClick}
          aria-label="Info"
        >
          <span className="navigation-button-info-text">info</span>
          <span className="navigation-button-info-icon">?</span>
        </button>
        {isKitOfPartsPage && (
          <CaptureModal 
            isOpen={isCaptureModalOpen}
            onClose={handleCloseCaptureModal}
            cachedImageDataUrl={cachedImageDataUrl}
          />
        )}
      </div>
      {isLandingPage && (
        <IndexPanel 
          isOpen={indexPanelOpen} 
          onClose={() => setIndexPanelOpen(false)}
          onReopen={() => setIndexPanelOpen(true)}
        />
      )}
      <InfoPanel isOpen={infoPanelOpen} onClose={() => setInfoPanelOpen(false)} />
      <SubmitEntryPanel
        isOpen={submitEntryPanelOpen}
        onClose={handleCloseSubmitPanel}
        currentKeywordTitle={currentKeywordTitle || 'self-determination'}
        onSubmitRef={submitFormRef}
      />
      {isKitOfPartsPage && (
        <InventoryPanel
          isOpen={objects}
          onClose={() => setObjects(false)}
          furnitureItems={furnitureItems}
          onItemClick={handleInventoryItemClick}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </>
  );
}
