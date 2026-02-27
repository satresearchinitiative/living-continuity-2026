'use client';

import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import ArchiveModal from '../treeModals/archiveModal';
import '../treeModals/archive.scss';
import { NavigationControls } from '../navigation';
import { COLOR_WHITE } from '../_setup/colors';
import Contributions from './contributions/Contributions';
import styles from './glossary.module.scss';

// Generate alphabet array A-Z and #
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
alphabet.push('#');

// Get first letter of keyword (English translation)
const getFirstLetter = (keyword) => {
  const firstChar = keyword.title.charAt(0).toUpperCase();
  return /[A-Z]/.test(firstChar) ? firstChar : '#';
};

// Language display order for translations
const LANGUAGE_ORDER = [
  'eng',
  'arabic',
  'hindi',
  'urdu',
  'tagalog',
  'farsi',
  'nepali',
  'bengali',
  'malayalam'
];

// Language labels for display (optional, if needed)
const LANGUAGE_LABELS = {
  eng: 'English',
  arabic: 'Arabic',
  hindi: 'Hindi',
  urdu: 'Urdu',
  tagalog: 'Tagalog',
  farsi: 'Farsi',
  nepali: 'Nepali',
  bengali: 'Bengali',
  malayalam: 'Malayalam'
};

export default function GlossaryList() {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [centeredKeywordId, setCenteredKeywordId] = useState(null);
  const centeredKeywordIdRef = useRef(null);
  const [glossaryData, setGlossaryData] = useState([]);
  const alphabetBarRef = useRef(null);
  const [alphabetPreview, setAlphabetPreview] = useState(null);
  const alphabetTouchActiveRef = useRef(false);
  const articleImagesStackRef = useRef(null);
  const isCalculatingScaleRef = useRef(false);
  const scaleCalculationTimeoutRef = useRef(null);
  const lastCalculatedMaxHeightRef = useRef(null);
  const [wrapperMaxHeights, setWrapperMaxHeights] = useState({});
  const [wrapperMaxWidths, setWrapperMaxWidths] = useState({});
  const [wrapperMinWidths, setWrapperMinWidths] = useState({});
  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleModalOpen, setArticleModalOpen] = useState(false);

  const slugifyTitle = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const getKeywordBySlug = (slug) => {
    return glossaryData.find(k => slugifyTitle(k.title) === slug);
  };

  // Parse hash: "keywordSlug" or "keywordSlug:articleId" (colon = no ambiguity with hyphenated keywords)
  const parseGlossaryHash = useCallback((hash) => {
    if (!hash) return { keywordSlug: null, articleId: null };
    if (hash.includes(':')) {
      const idx = hash.lastIndexOf(':');
      const keywordSlug = hash.slice(0, idx).trim() || null;
      const articleId = hash.slice(idx + 1).trim() || null;
      return { keywordSlug: keywordSlug || null, articleId: articleId || null };
    }
    const parts = hash.split('-');
    const last = parts[parts.length - 1];
    const isArticleId = allArticles.some(a => a.id === last);
    if (isArticleId && parts.length >= 2) {
      return { keywordSlug: parts.slice(0, -1).join('-'), articleId: last };
    }
    return { keywordSlug: hash, articleId: null };
  }, [allArticles]);

  const updateCenteredKeyword = useCallback((keywordId) => {
    centeredKeywordIdRef.current = keywordId;
    setCenteredKeywordId(keywordId);

    if (typeof window !== 'undefined' && keywordId && glossaryData.length > 0) {
      const keyword = glossaryData.find(k => k.id === keywordId);
      if (keyword) {
        const keywordSlug = slugifyTitle(keyword.title);
        const currentHash = window.location.hash.substring(1);
        const { articleId: hashArticleId } = parseGlossaryHash(currentHash);
        const hasArticleInHash = !!hashArticleId;
        const isArticleHash = allArticles.some(article => {
          if (!article.title) return false;
          const articleHash = slugifyTitle(article.title);
          return articleHash === currentHash || currentHash.endsWith(`-${article.id}`) || currentHash.endsWith(`:${article.id}`);
        });
        if (!currentHash.endsWith('-submit') && currentHash !== keywordSlug && !isArticleHash && !hasArticleInHash && !articleModalOpen && !isOpeningModalRef.current && !isClosingModalRef.current) {
          window.history.replaceState(null, '', `#${keywordSlug}`);
        }
      }
    }
  }, [glossaryData, allArticles, articleModalOpen, parseGlossaryHash]);

  const scrollToElement = useCallback((element, keywordId, retryCount = 0) => {
    if (!element || retryCount > 15) {
      isProgrammaticScroll.current = false;
      isScrollingRef.current = false;
      return;
    }

    isProgrammaticScroll.current = true;
    isScrollingRef.current = true;

    requestAnimationFrame(() => {
      const itemRect = element.getBoundingClientRect();
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const itemTop = itemRect.top + currentScrollTop;
      const itemHeight = itemRect.height;
      const viewportHeight = window.innerHeight;
      const targetScrollTop = Math.max(0, itemTop - (viewportHeight / 2) + (itemHeight / 2));

      if (Math.abs(currentScrollTop - targetScrollTop) < 3) {
        updateCenteredKeyword(keywordId);
        isProgrammaticScroll.current = false;
        isScrollingRef.current = false;
        return;
      }

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });

      updateCenteredKeyword(keywordId);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const newItemRect = element.getBoundingClientRect();
        const newItemTop = newItemRect.top + newScrollTop;
        const newTargetScrollTop = Math.max(0, newItemTop - (viewportHeight / 2) + (itemHeight / 2));
        const distance = Math.abs(newScrollTop - newTargetScrollTop);

        if (distance > 5 && retryCount < 10) {
          scrollToElement(element, keywordId, retryCount + 1);
        } else {
          // Final scroll to exact position
          window.scrollTo({
            top: newTargetScrollTop,
            behavior: 'auto'
          });
          updateCenteredKeyword(keywordId);
          // Keep flags set a bit longer to prevent snap-to-nearest interference
          setTimeout(() => {
            isProgrammaticScroll.current = false;
            isScrollingRef.current = false;
          }, 200);
        }
      }, 1200);
    });
  }, [updateCenteredKeyword]);

  const contributionsRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const scrollVelocityRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const lastScrollTopRef = useRef(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const [keywordsWithArticles, setKeywordsWithArticles] = useState(['G6', 'G8', 'G9', 'G10', 'G11', 'G22', 'G30', 'G17']);
  const isOverContributionsRef = useRef(false);
  const isOverGlossaryRef = useRef(false);
  const contributionsRefElement = useRef(null);
  const scrollPositionBeforeModalRef = useRef(null);
  const isClosingModalRef = useRef(false);
  const skipHashNavigationUntilRef = useRef(0);
  const isOpeningModalRef = useRef(false);
  const keywordHashBeforeModalRef = useRef(null);

  const LANDING_PAGE_NODE_ID = 'A1';

  const currentKeywordTitle = useMemo(() => {
    if (!centeredKeywordId || !glossaryData.length) {
      return 'self-determination';
    }
    const keyword = glossaryData.find(k => k.id === centeredKeywordId);
    return keyword?.title || 'self-determination';
  }, [centeredKeywordId, glossaryData]);

  useEffect(() => {
    centeredKeywordIdRef.current = centeredKeywordId;
  }, [centeredKeywordId]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.classList.add('glossary-page');
    html.classList.add('glossary-page');

    return () => {
      body.classList.remove('glossary-page');
      html.classList.remove('glossary-page');
    };
  }, []);


  const handleHashNavigation = useCallback((hash) => {
    if (!hash || !glossaryData.length) return;
    
    // Prevent interference from other scroll handlers or when closing modal
    if (isScrollingRef.current || isProgrammaticScroll.current || isClosingModalRef.current || isOpeningModalRef.current) {
      return;
    }

    const { keywordSlug: parsedKeywordSlug } = parseGlossaryHash(hash);
    const keywordSlug = parsedKeywordSlug || hash;

    if (keywordSlug.endsWith('-submit')) {
      const keywordSlugClean = keywordSlug.replace('-submit', '');
      const keyword = getKeywordBySlug(keywordSlugClean);
      if (keyword) {
        const attemptScroll = (attempt = 0) => {
          if (attempt > 30) {
            isProgrammaticScroll.current = false;
            isScrollingRef.current = false;
            return;
          }

          const element = document.getElementById(keyword.id) || itemRefs.current[keyword.id];
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.height > 0 && rect.width > 0) {
              // Ensure we're not already scrolling
              if (!isScrollingRef.current && !isProgrammaticScroll.current) {
                scrollToElement(element, keyword.id);
              }
            } else {
              setTimeout(() => attemptScroll(attempt + 1), 100);
            }
          } else {
            setTimeout(() => attemptScroll(attempt + 1), 100);
          }
        };

        // Longer delay when coming from modal to ensure DOM is ready
        setTimeout(() => attemptScroll(), 500);
      }
      return;
    }

    const keyword = getKeywordBySlug(keywordSlug);
    if (keyword) {
      const attemptScroll = (attempt = 0) => {
        if (attempt > 30) {
          isProgrammaticScroll.current = false;
          isScrollingRef.current = false;
          return;
        }

        const element = document.getElementById(keyword.id) || itemRefs.current[keyword.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.height > 0 && rect.width > 0) {
            // Ensure we're not already scrolling
            if (!isScrollingRef.current && !isProgrammaticScroll.current) {
              scrollToElement(element, keyword.id);
            }
          } else {
            setTimeout(() => attemptScroll(attempt + 1), 100);
          }
        } else {
          setTimeout(() => attemptScroll(attempt + 1), 100);
        }
      };

      // Longer delay when coming from modal to ensure DOM is ready
      setTimeout(() => attemptScroll(), 500);
      return;
    }
  }, [glossaryData, scrollToElement, allArticles, parseGlossaryHash]);

  useEffect(() => {
    if (typeof window === 'undefined' || !glossaryData.length) return;

    const hash = window.location.hash.substring(1);
    if (hash && !isOpeningModalRef.current && !isClosingModalRef.current) {
      handleHashNavigation(hash);
    }

    const handleHashChange = () => {
      if (isOpeningModalRef.current || isClosingModalRef.current) {
        return;
      }
      if (Date.now() < skipHashNavigationUntilRef.current) {
        return;
      }
      const newHash = window.location.hash.substring(1);
      if (newHash) {
        handleHashNavigation(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [glossaryData.length, handleHashNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined' || !glossaryData.length || !allArticles.length) return;

    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const isKeywordId = glossaryData.some(k => k.id === hash);
    if (isKeywordId) return;

    const { keywordSlug: parsedKeywordSlug, articleId: parsedArticleId } = parseGlossaryHash(hash);
    let articleId = parsedArticleId;
    const keywordSlug = parsedKeywordSlug;

    const findArticleByHash = () => {
      if (articleId) {
        return allArticles.find(article => article.id === articleId);
      }
      return allArticles.find(article => {
        if (!article.title) return false;
        const articleHash = slugifyTitle(article.title);
        return articleHash === hash;
      });
    };

    const article = findArticleByHash();
    if (article) {
      setTimeout(() => {
        const keywords = article.keywords && article.keywords.length > 0
          ? article.keywords
          : article.connectionKeywords
            ? article.connectionKeywords.map((keyword, index) => {
              const connectionId = article.connections && article.connections[index];
              if (connectionId) {
                const keywordInGlossary = glossaryData.find(k => k.id === connectionId);
                if (keywordInGlossary) {
                  const keywordSlug = slugifyTitle(keywordInGlossary.title);
                  return {
                    text: keyword,
                    link: `/glossary#${keywordSlug}`
                  };
                }
              }
              return {
                text: keyword,
                link: null
              };
            })
            : [];
        setSelectedArticle({
          id: article.id,
          title: article.title,
          author: article.author,
          imageUrl: article.imageUrl,
          content: article.content,
          authorBio: article.authorBio || '',
          keywords: keywords,
          connectionKeywords: article.connectionKeywords || []
        });
        setArticleModalOpen(true);
        
        if (keywordSlug) {
          const keyword = getKeywordBySlug(keywordSlug);
          if (keyword) {
            keywordHashBeforeModalRef.current = keywordSlug;
            const isMobile = window.innerWidth <= 812;
            if (isMobile && listRef.current) {
              scrollPositionBeforeModalRef.current = listRef.current.scrollTop;
            } else {
              scrollPositionBeforeModalRef.current = window.pageYOffset || document.documentElement.scrollTop;
            }
          }
        }
      }, 1000);
    }
  }, [glossaryData, allArticles, parseGlossaryHash]);

  // Load glossary data and articles from files
  useEffect(() => {
    Promise.all([
      fetch('/data/glossary.json').then(res => res.json()),
      fetch('/data/nodes.json').then(res => res.json()),
      fetch('/data/glossary-connections.json').then(res => res.json()).catch(() => ({ glossary: {} }))
    ])
      .then(([glossaryData, nodesData, connectionsData]) => {
        // Set articles
        if (nodesData && nodesData.articles) {
          setAllArticles(nodesData.articles);
        }

        // Merge glossary data with connections from glossary-connections.json
        if (glossaryData && glossaryData.glossary) {
          const connectionsMap = connectionsData.glossary || {};
          
          const formattedData = glossaryData.glossary.map((item) => ({
            id: item.id,
            title: item.title,
            glossaryId: item.id,
            connections: connectionsMap[item.id] || item.connections || [],
            translations: item.translations || {}
          }));
          setGlossaryData(formattedData);
        }

        // Get landing page keywords
        if (nodesData && nodesData.articles) {
          const landingPageArticle = nodesData.articles.find(article => article.id === LANDING_PAGE_NODE_ID);
          if (landingPageArticle && landingPageArticle.connections) {
            const landingPageKeywords = landingPageArticle.connections
              .filter(conn => conn.startsWith('G'))
              .slice(0, 5);

            if (landingPageKeywords.length > 0) {
              setKeywordsWithArticles(prev => {
                const combined = [...prev, ...landingPageKeywords];
                return [...new Set(combined)];
              });
            }
          }
        }
      })
      .catch((err) => console.error('Failed to load data:', err));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && glossaryData && glossaryData.length > 0) {
      // This effect is handled by the hashchange listener above
      // Only handle initial load if no hash is present
      // Skip if we're closing a modal to prevent unwanted scrolling
      if (!window.location.hash && !isClosingModalRef.current && !isOpeningModalRef.current && !articleModalOpen) {
        // When entering glossary page without a hash, stay at top and set first keyword as centered
        // Do NOT scroll - just set the centered keyword without any scrolling behavior
        setTimeout(() => {
          const groups = {};
          glossaryData.forEach((keyword) => {
            const letter = getFirstLetter(keyword);
            if (!groups[letter]) {
              groups[letter] = [];
            }
            groups[letter].push(keyword);
          });

          Object.keys(groups).forEach(letter => {
            groups[letter].sort((a, b) => a.title.localeCompare(b.title));
          });

          const sortedLetters = Object.keys(groups).sort((a, b) => {
            if (a === '#') return 1;
            if (b === '#') return -1;
            return a.localeCompare(b);
          });

          const firstLetter = sortedLetters[0];
          const firstKeyword = groups[firstLetter] && groups[firstLetter][0];

          if (firstKeyword) {
            // Just set the centered keyword without scrolling
            // Ensure page stays at top
            window.scrollTo({
              top: 0,
              behavior: 'instant'
            });
            
            // Set the first keyword as centered without triggering scroll
            updateCenteredKeyword(firstKeyword.id);
          }
        }, 200);
      }
    }
  }, [glossaryData.length, updateCenteredKeyword]);

  // Get related articles for the centered keyword - show for all keywords with connections
  const relatedArticles = useMemo(() => {
    if (!centeredKeywordId) {
      return [];
    }

    // Find the current keyword in glossary data
    const currentKeyword = glossaryData.find(k => k.id === centeredKeywordId);
    if (!currentKeyword) {
      return [];
    }

    // Show articles for any keyword that has connections
    if (!currentKeyword.connections || currentKeyword.connections.length === 0) {
      return [];
    }

    // Get articles that match the connections
    const articleIds = currentKeyword.connections;
    const articles = allArticles
      .filter(article => articleIds.includes(article.id))
      .map(article => {
        const keywords = article.keywords && article.keywords.length > 0
          ? article.keywords
          : article.connectionKeywords
            ? article.connectionKeywords.map((keyword, index) => {
              const connectionId = article.connections && article.connections[index];
              if (connectionId) {
                const keywordInGlossary = glossaryData.find(k => k.id === connectionId);
                if (keywordInGlossary) {
                  const keywordSlug = slugifyTitle(keywordInGlossary.title);
                  return {
                    text: keyword,
                    link: `/glossary#${keywordSlug}`
                  };
                }
              }
              return {
                text: keyword,
                link: null
              };
            })
            : [];
        return {
          id: article.id,
          title: article.title,
          author: article.author,
          imageUrl: article.imageUrl,
          content: article.content,
          authorBio: article.authorBio || '',
          keywords: keywords,
          connectionKeywords: article.connectionKeywords || []
        };
      });

    return articles;
  }, [centeredKeywordId, glossaryData, allArticles]);

  const calculateWrapperHeights = useCallback(() => {
    if (typeof window === 'undefined' || relatedArticles.length === 0) {
      setWrapperMaxHeights({});
      setWrapperMaxWidths({});
      setWrapperMinWidths({});
      return;
    }

    const isMobile = window.innerWidth <= 812;
    
    if (isMobile) {
      const paddingBaseValue = 18;
      const paddingBaseWidth = 834;
      const padding = (window.innerWidth * paddingBaseValue) / paddingBaseWidth;
      
      const availableWidth = window.innerWidth - (padding * 2);
      const numberOfWrappers = relatedArticles.length;
      
      const naturalWidthPerWrapper = availableWidth / 6;
      const totalNaturalWidth = naturalWidthPerWrapper * numberOfWrappers;
      const maxAllowedWidth = window.innerWidth - (padding * 2);
      
      if (numberOfWrappers > 5 && totalNaturalWidth > maxAllowedWidth && maxAllowedWidth > 0) {
        const reductionFactor = 0.7;
        const condensedWidthPerWrapper = (maxAllowedWidth / numberOfWrappers) * reductionFactor;
        const minWidth = 50;
        const finalWidth = Math.max(condensedWidthPerWrapper, minWidth);
        
        const maxWidths = {};
        const minWidths = {};
        relatedArticles.forEach((article) => {
          maxWidths[article.id] = finalWidth;
          minWidths[article.id] = minWidth;
        });
        setWrapperMaxWidths(maxWidths);
        setWrapperMinWidths(minWidths);
        setWrapperMaxHeights({});
      } else {
        setWrapperMaxWidths({});
        setWrapperMinWidths({});
        setWrapperMaxHeights({});
      }
      return;
    }

    const headerHeight = Math.min(window.innerHeight * 0.075, 96);
    const titleHeight = Math.min(window.innerHeight * 0.12, 160);
    const footerHeight = 0;
    const extraPadding = Math.min(window.innerHeight * 0.03, 48);
    const maxAllowedHeight = window.innerHeight - headerHeight - titleHeight - footerHeight - extraPadding;

    const minStackHeight = 80;
    const maxStackHeight = 240;
    const vwHeight = window.innerWidth * 0.12;
    const vhHeight = window.innerHeight * 0.12;
    const imageStackHeightValue = Math.max(minStackHeight, Math.min(Math.min(vwHeight, vhHeight), maxStackHeight));
    
    const naturalHeightPerWrapper = imageStackHeightValue;
    const numberOfWrappers = relatedArticles.length;
    const totalNaturalHeight = naturalHeightPerWrapper * numberOfWrappers;

    if (numberOfWrappers > 4 && totalNaturalHeight > maxAllowedHeight && maxAllowedHeight > 0) {
      const scaleFactor = maxAllowedHeight / totalNaturalHeight;
      const reductionFactor = 0.95;
      const condensedHeight = naturalHeightPerWrapper * scaleFactor * reductionFactor;
      
      const heights = {};
      relatedArticles.forEach((article) => {
        heights[article.id] = condensedHeight;
      });
      setWrapperMaxHeights(heights);
      setWrapperMaxWidths({});
      setWrapperMinWidths({});
    } else {
      setWrapperMaxHeights({});
      setWrapperMaxWidths({});
      setWrapperMinWidths({});
    }
  }, [relatedArticles]);

  useEffect(() => {
    calculateWrapperHeights();
  }, [calculateWrapperHeights]);

  useEffect(() => {
    if (!articleImagesStackRef.current) return;

    const stack = articleImagesStackRef.current;
    const hasCondensedHeights = Object.keys(wrapperMaxHeights).length > 0;
    const hasCondensedWidths = Object.keys(wrapperMaxWidths).length > 0;
    const isMobile = window.innerWidth <= 812;
    
    if (hasCondensedHeights || (hasCondensedWidths && isMobile)) {
      stack.style.setProperty('--stack-overflow', 'hidden');
    } else {
      stack.style.setProperty('--stack-overflow', 'auto');
    }
  }, [wrapperMaxHeights, wrapperMaxWidths]);

  useEffect(() => {
    const handleResize = () => {
      calculateWrapperHeights();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateWrapperHeights]);

  // Group keywords by first letter
  const groupedKeywords = useMemo(() => {
    const groups = {};
    glossaryData.forEach((keyword) => {
      const letter = getFirstLetter(keyword);
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(keyword);
    });
    return groups;
  }, [glossaryData]);

  // Flatten all keywords in display order (as they appear on screen)
  const allKeywordsInOrder = useMemo(() => {
    const ordered = [];
    const sortedLetters = Object.keys(groupedKeywords).sort((a, b) => {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });

    sortedLetters.forEach(letter => {
      const keywords = groupedKeywords[letter];
      if (keywords && keywords.length > 0) {
        const sortedKeywords = [...keywords].sort((a, b) => a.title.localeCompare(b.title));
        ordered.push(...sortedKeywords);
      }
    });

    return ordered;
  }, [groupedKeywords]);

  // Ensure a keyword is always selected when keywords are available
  useEffect(() => {
    if (allKeywordsInOrder.length === 0) return;

    const checkAndSetKeyword = () => {
      if (isProgrammaticScroll.current || isOpeningModalRef.current || isClosingModalRef.current || articleModalOpen) return;

      // If there's no hash on initial load, don't override the first keyword selection
      // This prevents unwanted scrolling when entering the glossary page
      const hasHash = typeof window !== 'undefined' && window.location.hash;
      if (!hasHash && !centeredKeywordIdRef.current) {
        // On initial load without hash, just set the first keyword without scrolling
        if (allKeywordsInOrder.length > 0) {
          updateCenteredKeyword(allKeywordsInOrder[0].id);
        }
        return;
      }

      const getCurrentKeyword = () => {
        const viewportCenter = window.innerHeight / 2;
        let nearestKeyword = null;
        let minDistance = Infinity;
        let firstVisibleKeyword = null;

        allKeywordsInOrder.forEach((keyword) => {
          const itemElement = itemRefs.current[keyword.id];
          if (itemElement) {
            const itemRect = itemElement.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            const distanceFromCenter = Math.abs(itemCenter - viewportCenter);

            if (distanceFromCenter < minDistance) {
              minDistance = distanceFromCenter;
              nearestKeyword = keyword;
            }

            if (!firstVisibleKeyword && itemRect.top < window.innerHeight && itemRect.bottom > 0) {
              firstVisibleKeyword = keyword;
            }
          }
        });

        return nearestKeyword || firstVisibleKeyword || allKeywordsInOrder[0];
      };

      const currentId = centeredKeywordIdRef.current;
      if (currentId) {
        const keywordExists = allKeywordsInOrder.some(k => k.id === currentId);
        if (keywordExists) return;
      }

      const keyword = getCurrentKeyword();
      if (keyword) {
        updateCenteredKeyword(keyword.id);
      } else if (allKeywordsInOrder.length > 0) {
        updateCenteredKeyword(allKeywordsInOrder[0].id);
      }
    };

    const timeoutId = setTimeout(checkAndSetKeyword, 300);
    return () => clearTimeout(timeoutId);
  }, [allKeywordsInOrder.length, updateCenteredKeyword]);

  useEffect(() => {
    if (allKeywordsInOrder.length === 0) return;

    const snapToNearestCard = (scrollTop) => {
      if (allKeywordsInOrder.length === 0 || isScrollingRef.current || isProgrammaticScroll.current || isOpeningModalRef.current || isClosingModalRef.current || articleModalOpen) return;

      const viewportCenter = window.innerHeight / 2;
      let nearestKeyword = null;
      let minDistance = Infinity;

      allKeywordsInOrder.forEach((keyword) => {
        const itemElement = itemRefs.current[keyword.id];
        if (itemElement) {
          const itemRect = itemElement.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          const distanceFromCenter = Math.abs(itemCenter - viewportCenter);

          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter;
            nearestKeyword = keyword;
          }
        }
      });

      if (nearestKeyword) {
        const itemElement = itemRefs.current[nearestKeyword.id];
        if (itemElement) {
          isScrollingRef.current = true;
          isProgrammaticScroll.current = true;

          const itemRect = itemElement.getBoundingClientRect();
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const itemTop = itemRect.top + currentScrollTop;
          const itemHeight = itemRect.height;
          const viewportHeight = window.innerHeight;
          const targetScrollTop = itemTop - (viewportHeight / 2) + (itemHeight / 2);

          window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });

          updateCenteredKeyword(nearestKeyword.id);

          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }

          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
            isProgrammaticScroll.current = false;
          }, 500);
        }
      }
    };

    let ticking = false;
    let lastScrollTop = 0;
    let scrollEndTimer = null;

    const getCurrentKeyword = () => {
      const isMobile = listRef.current && window.innerWidth <= 812;
      
      let viewportCenter;
      let containerRect;
      
      if (isMobile && listRef.current) {
        containerRect = listRef.current.getBoundingClientRect();
        viewportCenter = containerRect.top + containerRect.height / 2;
      } else {
        viewportCenter = window.innerHeight / 2;
      }

      let nearestKeyword = null;
      let minDistance = Infinity;
      let mostVisibleKeyword = null;
      let maxVisibleArea = 0;

      allKeywordsInOrder.forEach((keyword) => {
        const itemElement = itemRefs.current[keyword.id];
        if (itemElement) {
          const itemRect = itemElement.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          const distanceFromCenter = Math.abs(itemCenter - viewportCenter);

          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter;
            nearestKeyword = keyword;
          }

          if (isMobile && containerRect) {
            const visibleTop = Math.max(itemRect.top, containerRect.top);
            const visibleBottom = Math.min(itemRect.bottom, containerRect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleArea = visibleHeight / itemRect.height;
            
            if (visibleArea > maxVisibleArea && visibleArea > 0.3) {
              maxVisibleArea = visibleArea;
              mostVisibleKeyword = keyword;
            }
          } else {
            const visibleTop = Math.max(itemRect.top, 0);
            const visibleBottom = Math.min(itemRect.bottom, window.innerHeight);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleArea = visibleHeight / itemRect.height;
            
            if (visibleArea > maxVisibleArea && visibleArea > 0.3) {
              maxVisibleArea = visibleArea;
              mostVisibleKeyword = keyword;
            }
          }
        }
      });

      return mostVisibleKeyword || nearestKeyword || (allKeywordsInOrder.length > 0 ? allKeywordsInOrder[0] : null);
    };


      const handleScroll = () => {
      if (document.body.hasAttribute('data-restoring-scroll')) {
        ticking = false;
        return;
      }

      // Don't interfere with programmatic scrolling from hash navigation or when modal is opening/closing
      if (isProgrammaticScroll.current || isScrollingRef.current || isOpeningModalRef.current || isClosingModalRef.current || articleModalOpen) {
        ticking = false;
        return;
      }

      const isMobile = listRef.current && window.innerWidth <= 812;
      const currentScrollTop = isMobile && listRef.current 
        ? listRef.current.scrollTop 
        : window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);

      if (allKeywordsInOrder.length === 0) {
        ticking = false;
        return;
      }

      // On mobile, update more frequently for better responsiveness
      if (isMobile) {
        const visibleKeyword = getCurrentKeyword();
        if (visibleKeyword && visibleKeyword.id !== centeredKeywordIdRef.current) {
          updateCenteredKeyword(visibleKeyword.id);
        }
      } else {
        if (scrollDelta < 5) {
          ticking = false;
          return;
        }

        const visibleKeyword = getCurrentKeyword();
        if (visibleKeyword && visibleKeyword.id !== centeredKeywordIdRef.current) {
          updateCenteredKeyword(visibleKeyword.id);
        }
      }

      lastScrollTop = currentScrollTop;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    const handleScrollEnd = () => {
      if (isProgrammaticScroll.current || isScrollingRef.current || isOpeningModalRef.current || isClosingModalRef.current || articleModalOpen) return;
      
      // Always update on scroll end to ensure correct item is highlighted
      const visibleKeyword = getCurrentKeyword();
      if (visibleKeyword) {
        updateCenteredKeyword(visibleKeyword.id);
      }
    };


    const handleMouseMove = (e) => {
      const x = e.clientX || 0;
      const y = e.clientY || 0;
      isOverContributionsRef.current = checkIfOverContributions(x, y);
      isOverGlossaryRef.current = checkIfOverGlossary(x, y);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const x = touch.clientX || 0;
        const y = touch.clientY || 0;
        isOverContributionsRef.current = checkIfOverContributions(x, y);
        isOverGlossaryRef.current = checkIfOverGlossary(x, y);
      }
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    const isMobile = window.innerWidth <= 812;
    let scrollEndTimeout = null;
    
    const onScrollWithEndDetection = () => {
      onScroll();
      
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
      
      scrollEndTimeout = setTimeout(() => {
        handleScrollEnd();
      }, 150);
    };
    
    if (isMobile && listRef.current) {
      listRef.current.addEventListener('scroll', onScrollWithEndDetection, { passive: true });
    } else {
      window.addEventListener('scroll', onScrollWithEndDetection, { passive: true });
    }
    
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const ensureKeywordSelected = () => {
      if (allKeywordsInOrder.length === 0) return;

      // If there's no hash on initial load, don't override the first keyword selection
      // This prevents unwanted scrolling when entering the glossary page
      const hasHash = typeof window !== 'undefined' && window.location.hash;
      if (!hasHash && !centeredKeywordIdRef.current && allKeywordsInOrder.length > 0) {
        // On initial load without hash, just set the first keyword without scrolling
        updateCenteredKeyword(allKeywordsInOrder[0].id);
        return;
      }

      const keyword = getCurrentKeyword();
      if (keyword) {
        updateCenteredKeyword(keyword.id);
      } else if (allKeywordsInOrder.length > 0) {
        updateCenteredKeyword(allKeywordsInOrder[0].id);
      }
    };

    setTimeout(() => {
      // Don't trigger scroll handling on initial load if there's no hash
      const hasHash = typeof window !== 'undefined' && window.location.hash;
      if (!hasHash && !centeredKeywordIdRef.current) {
        // Just ensure first keyword is selected without scrolling
        ensureKeywordSelected();
        return;
      }
      
      if (!isProgrammaticScroll.current) {
        handleScroll();
      }
      ensureKeywordSelected();
    }, 100);

    return () => {
      if (isMobile && listRef.current) {
        listRef.current.removeEventListener('scroll', onScrollWithEndDetection);
      } else {
        window.removeEventListener('scroll', onScrollWithEndDetection);
      }
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollEndTimer) {
        clearTimeout(scrollEndTimer);
      }
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [allKeywordsInOrder, groupedKeywords]);

  const scrollToSection = (letter) => {
    const firstKeywordForLetter = allKeywordsInOrder.find((k) => getFirstLetter(k) === letter);
    if (firstKeywordForLetter) {
      const firstKeywordId = firstKeywordForLetter.id;

      const attemptScroll = (attempt = 0) => {
        if (attempt > 20) return;

        const itemElement = itemRefs.current[firstKeywordId] || document.getElementById(firstKeywordId);
        if (itemElement) {
          const isMobile = window.innerWidth <= 812;
          if (isMobile && listRef.current) {
            isProgrammaticScroll.current = true;
            const containerRect = listRef.current.getBoundingClientRect();
            const itemRect = itemElement.getBoundingClientRect();
            const scrollTop = listRef.current.scrollTop;
            const containerHeight = containerRect.height;
            const itemHeight = itemRect.height;
            
            const itemTopRelative = itemRect.top - containerRect.top + scrollTop;
            const targetScrollTop = itemTopRelative - (containerHeight / 2) + (itemHeight / 2);
            
            listRef.current.scrollTo({
              top: Math.max(0, targetScrollTop),
              behavior: 'smooth'
            });
            
            updateCenteredKeyword(firstKeywordId);
            
            setTimeout(() => {
              isProgrammaticScroll.current = false;
            }, 500);
          } else {
            scrollToElement(itemElement, firstKeywordId);
          }
        } else {
          setTimeout(() => attemptScroll(attempt + 1), 50);
        }
      };

      attemptScroll();
    }
  };

  const getLetterFromTouch = (clientY) => {
    if (!alphabetBarRef.current) return null;
    
    const barRect = alphabetBarRef.current.getBoundingClientRect();
    const buttons = alphabetBarRef.current.querySelectorAll('button:not(:disabled)');
    if (buttons.length === 0) return null;
    
    let closestLetter = null;
    let minDistance = Infinity;
    
    buttons.forEach((button) => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenter = buttonRect.top + buttonRect.height / 2;
      const distance = Math.abs(clientY - buttonCenter);
      
      if (distance < minDistance && clientY >= buttonRect.top && clientY <= buttonRect.bottom) {
        minDistance = distance;
        closestLetter = button.textContent.trim();
      }
    });
    
    return closestLetter;
  };

  const handleAlphabetTouchStart = (e) => {
    alphabetTouchActiveRef.current = true;
    const touch = e.touches[0];
    const letter = getLetterFromTouch(touch.clientY);
    if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
      setAlphabetPreview(letter);
      scrollToSection(letter);
    }
  };

  const handleAlphabetTouchMove = (e) => {
    if (!alphabetTouchActiveRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const letter = getLetterFromTouch(touch.clientY);
    if (letter && groupedKeywords[letter] && groupedKeywords[letter].length > 0) {
      setAlphabetPreview(letter);
      scrollToSection(letter);
    }
  };

  const handleAlphabetTouchEnd = () => {
    alphabetTouchActiveRef.current = false;
    setTimeout(() => {
      setAlphabetPreview(null);
    }, 300);
  };

  const scrollToKeyword = (keywordId) => {
    if (isProgrammaticScroll.current || isScrollingRef.current) return;

    const itemElement = itemRefs.current[keywordId];
    if (itemElement) {
      scrollToElement(itemElement, keywordId);
    }
  };


  const handleMouseEnterGlossary = useCallback(() => {
    isOverContributionsRef.current = false;
    isOverGlossaryRef.current = true;
  }, []);

  const checkIfOverContributions = (x, y) => {
    if (!contributionsRefElement.current) {
      const contributionsContainer = document.querySelector('[class*="contributionsContainer"]');
      if (contributionsContainer) {
        contributionsRefElement.current = contributionsContainer;
      }
    }
    
    if (contributionsRefElement.current) {
      const rect = contributionsRefElement.current.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }
    
    return false;
  };

  const checkIfOverGlossary = (x, y) => {
    const elementToCheck = listRef.current || containerRef.current;
    if (elementToCheck) {
      const rect = elementToCheck.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }
    
    return false;
  };

  const handleMouseLeaveGlossary = useCallback((e) => {
    const x = e?.clientX || e?.nativeEvent?.clientX || 0;
    const y = e?.clientY || e?.nativeEvent?.clientY || 0;
    isOverContributionsRef.current = checkIfOverContributions(x, y);
    isOverGlossaryRef.current = checkIfOverGlossary(x, y);
  }, []);

  // Handle submit click - open submit form in Contributions component
  const handleSubmitClick = () => {
    if (contributionsRef.current) {
      contributionsRef.current.openSubmitForm();
    }
  };

  // Handle article image click - open modal
  const handleArticleClick = (article) => {
    isOpeningModalRef.current = true;
    isProgrammaticScroll.current = true;
    isScrollingRef.current = true;
    
    const isMobile = window.innerWidth <= 812;
    let savedScrollTop;
    if (isMobile && listRef.current) {
      savedScrollTop = listRef.current.scrollTop;
      scrollPositionBeforeModalRef.current = savedScrollTop;
    } else {
      savedScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollPositionBeforeModalRef.current = savedScrollTop;
    }
    
    const currentKeywordId = centeredKeywordIdRef.current || centeredKeywordId;
    if (currentKeywordId && glossaryData.length > 0) {
      const keyword = glossaryData.find(k => k.id === currentKeywordId);
      if (keyword) {
        keywordHashBeforeModalRef.current = slugifyTitle(keyword.title);
      }
    }
    
    if (!keywordHashBeforeModalRef.current) {
      const currentHash = window.location.hash.substring(1);
      const { keywordSlug: parsedSlug } = parseGlossaryHash(currentHash);
      const currentKeyword = getKeywordBySlug(parsedSlug || currentHash);
      if (currentKeyword) {
        keywordHashBeforeModalRef.current = slugifyTitle(currentKeyword.title);
      }
    }
    
    const preventScroll = (e) => {
      if (isMobile && listRef.current) {
        listRef.current.scrollTop = savedScrollTop;
      } else {
        window.scrollTo(0, savedScrollTop);
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    if (isMobile && listRef.current) {
      listRef.current.addEventListener('scroll', preventScroll, { passive: false, capture: true });
    } else {
      window.addEventListener('scroll', preventScroll, { passive: false, capture: true });
    }
    
    setSelectedArticle(article);
    setArticleModalOpen(true);
    
    requestAnimationFrame(() => {
      if (keywordHashBeforeModalRef.current && article.id) {
        window.history.replaceState(null, '', `#${keywordHashBeforeModalRef.current}:${article.id}`);
      }
      // Never set hash to article-only (#A2) – keeps feed stable and avoids jumping
      
      setTimeout(() => {
        if (isMobile && listRef.current) {
          listRef.current.removeEventListener('scroll', preventScroll, { capture: true });
        } else {
          window.removeEventListener('scroll', preventScroll, { capture: true });
        }
        isOpeningModalRef.current = false;
        isProgrammaticScroll.current = false;
        isScrollingRef.current = false;
      }, 600);
    });
  };

  // Close article modal – remove :AXX from param, restore keyword hash, then instant jump to that keyword position
  const handleCloseArticleModal = () => {
    isClosingModalRef.current = true;
    isProgrammaticScroll.current = true;
    isScrollingRef.current = true;
    
    const keywordSlug = keywordHashBeforeModalRef.current;
    setArticleModalOpen(false);
    setSelectedArticle(null);
    scrollPositionBeforeModalRef.current = null;

    if (keywordSlug) {
      skipHashNavigationUntilRef.current = Date.now() + 1200;
      window.history.replaceState(null, '', `#${keywordSlug}`);
      keywordHashBeforeModalRef.current = null;
    }

    const doInstantScrollToKeyword = () => {
      if (!keywordSlug) return;
      const keyword = getKeywordBySlug(keywordSlug);
      if (!keyword) return;
      const itemElement = itemRefs.current[keyword.id] || (typeof document !== 'undefined' ? document.getElementById(keyword.id) : null);
      if (!itemElement) return;
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 812;
      if (isMobile && listRef.current) {
        const containerRect = listRef.current.getBoundingClientRect();
        const itemRect = itemElement.getBoundingClientRect();
        const scrollTop = listRef.current.scrollTop;
        const itemTopRelative = itemRect.top - containerRect.top + scrollTop;
        const targetScrollTop = itemTopRelative - (containerRect.height / 2) + (itemRect.height / 2);
        listRef.current.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'auto' });
      } else {
        const itemRect = itemElement.getBoundingClientRect();
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const itemTop = itemRect.top + currentScrollTop;
        const targetScrollTop = Math.max(0, itemTop - (window.innerHeight / 2) + (itemRect.height / 2));
        window.scrollTo({ top: targetScrollTop, left: 0, behavior: 'auto' });
      }
      updateCenteredKeyword(keyword.id);
    };

    requestAnimationFrame(() => {
      doInstantScrollToKeyword();
      requestAnimationFrame(() => {
        doInstantScrollToKeyword();
        setTimeout(() => {
          isClosingModalRef.current = false;
          isProgrammaticScroll.current = false;
          isScrollingRef.current = false;
        }, 200);
      });
    });
  };

  const articleImagesStackContent = relatedArticles.length > 0 ? (
    <div 
      className={styles.articleImagesStack} 
      ref={articleImagesStackRef}
    >
      {relatedArticles.map((article) => {
        const isSelected = selectedArticle && selectedArticle.id === article.id;
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 812;
        const maxHeight = !isMobile && wrapperMaxHeights[article.id] ? `${wrapperMaxHeights[article.id]}px` : undefined;
        const maxWidth = isMobile && wrapperMaxWidths[article.id] ? `${wrapperMaxWidths[article.id]}px` : undefined;
        const minWidth = isMobile && wrapperMinWidths[article.id] ? `${wrapperMinWidths[article.id]}px` : undefined;
        const style = {};
        if (maxHeight) style.maxHeight = maxHeight;
        if (maxWidth) style.maxWidth = maxWidth;
        if (minWidth) style.minWidth = minWidth;
        
        return (
          <div
            key={article.id}
            className={`${styles.articleImageWrapper} ${isSelected ? styles.selected : ''} ${!article.imageUrl ? styles.imagePlaceholder : ''
              }`}
            onClick={() => handleArticleClick(article)}
            style={Object.keys(style).length > 0 ? style : undefined}
          >
            {article.imageUrl ? (
              <div className={styles.imageContainer}>
                <img
                  src={article.imageUrl}
                  alt=""
                  className={`${styles.articleImagePlaceholder} ${styles.articleImage}`}
                  aria-hidden="true"
                  loading="eager"
                />
                <img
                  src={article.imageUrl}
                  alt={article.title || article.id}
                  className={`${styles.articleImage} ${styles.articleImageFull}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.previousElementSibling;
                    if (placeholder) {
                      placeholder.style.display = 'none';
                    }
                    const wrapper = e.target.closest(`.${styles.articleImageWrapper}`);
                    if (wrapper) {
                      wrapper.classList.add(styles.imagePlaceholder);
                    }
                  }}
                  onLoad={(e) => {
                    e.target.classList.add(styles.imageLoaded);
                    const placeholder = e.target.previousElementSibling;
                    if (placeholder && placeholder.classList.contains(styles.articleImagePlaceholder)) {
                      placeholder.style.opacity = '0';
                      setTimeout(() => {
                        placeholder.style.display = 'none';
                      }, 200);
                    }
                    if (articleImagesStackRef.current) {
                      setTimeout(() => {
                        calculateWrapperHeights();
                      }, 100);
                    }
                  }}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  ) : null;

  return (
    <div className={styles.glossaryContainer} ref={containerRef}>
      {/* Article Images Stack - Rendered via Portal to ensure proper z-index stacking */}
      {typeof window !== 'undefined' && articleImagesStackContent
        ? createPortal(articleImagesStackContent, document.body)
        : articleImagesStackContent}

      {/* Article Modal */}
      <Modal
        isOpen={articleModalOpen}
        onRequestClose={handleCloseArticleModal}
        contentLabel="Article Modal"
        className="archive-modal-content"
        overlayClassName="archive-modal-overlay"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        bodyOpenClassName="archive-modal-open"
        htmlOpenClassName="archive-modal-open"
      >
        {selectedArticle && (
          <ArchiveModal
            title={selectedArticle.title}
            author={selectedArticle.author}
            content={selectedArticle.content}
            img={selectedArticle.imageUrl}
            authorBio={selectedArticle.authorBio}
            keywords={selectedArticle.keywords}
            closeModal={handleCloseArticleModal}
          />
        )}
      </Modal>

      {/* Keywords List - Scrollable */}
      <ul
        className={styles.glossaryList}
        ref={listRef}
        onMouseEnter={handleMouseEnterGlossary}
        onMouseLeave={handleMouseLeaveGlossary}
        onTouchStart={(e) => {
          isOverContributionsRef.current = false;
        }}
        onTouchMove={(e) => {
          isOverContributionsRef.current = false;
        }}
        onWheel={(e) => {
          isOverContributionsRef.current = false;
        }}
      >
        {allKeywordsInOrder.map((keyword) => {
          const isCentered = centeredKeywordId === keyword.id;
          return (
            <li
              key={keyword.id}
              id={keyword.id}
              ref={(el) => (itemRefs.current[keyword.id] = el)}
              className={`${styles.glossaryItem} ${isCentered ? styles.glossaryItemCentered : styles.glossaryItemDimmed}`}
              onClick={() => scrollToKeyword(keyword.id)}
              data-keyword-id={keyword.id}
              data-index={keyword.index}
            >
              <div className={styles.glossaryItemNumber}>{keyword.index}</div>
              {LANGUAGE_ORDER.map((langKey, langIndex) => {
                const translation = keyword.translations[langKey];
                if (!translation) return null;
                const isLast = langIndex === LANGUAGE_ORDER.length - 1 ||
                  !LANGUAGE_ORDER.slice(langIndex + 1).some(nextLang => keyword.translations[nextLang]);
                return (
                  <div key={langKey} className={`${styles.glossaryTranslation} ${!isLast ? styles.glossaryTranslationWithBorder : ''}`}>
                    {translation}
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>

      {/* Alphabet Navigation Bar */}
      <div 
        className={styles.alphabetBar}
        ref={alphabetBarRef}
        onTouchStart={handleAlphabetTouchStart}
        onTouchMove={handleAlphabetTouchMove}
        onTouchEnd={handleAlphabetTouchEnd}
      >
        {alphabet.map((letter) => {
          const hasKeywords = groupedKeywords[letter] && groupedKeywords[letter].length > 0;
          const currentKeyword = centeredKeywordId ? glossaryData.find(k => k.id === centeredKeywordId) : null;
          const currentLetter = currentKeyword ? getFirstLetter(currentKeyword) : null;
          const isActive = currentLetter === letter;
          return (
            <button
              key={letter}
              className={`${styles.alphabetLetter} ${!hasKeywords ? styles.alphabetLetterDisabled : ''} ${isActive ? styles.alphabetLetterActive : ''}`}
              onClick={() => hasKeywords && scrollToSection(letter)}
              disabled={!hasKeywords}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Alphabet Preview Popup */}
      {alphabetPreview && (
        <div className={styles.alphabetPreview}>
          {alphabetPreview}
        </div>
      )}

      {/* Navigation Controls - Info Button */}
      <NavigationControls
        onSubmitEntry={handleSubmitClick}
        currentKeywordTitle={currentKeywordTitle}
      />

      {/* Contributions Section */}
      <Contributions
        ref={contributionsRef}
        currentKeywordId={centeredKeywordId}
        glossaryData={glossaryData}
        onSubmitClick={handleSubmitClick}
      />
    </div>
  );
}

