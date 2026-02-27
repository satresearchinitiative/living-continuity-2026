'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import CrossButton from '../menu/CrossButton';
import { COLOR_WHITE } from '../_setup/colors';
import { getRecaptchaToken } from '../utils/recaptcha';
import './navigation.scss';

const slugifyTitle = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const deslugifyTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function SubmitEntryPanel({ 
  isOpen, 
  onClose, 
  currentKeywordTitle = 'self-determination',
  onSubmitRef
}) {
  const [interpretation, setInterpretation] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const pathname = usePathname();
  const isGlossaryPage = pathname === '/glossary';
  const savedScrollPosition = useRef(0);
  
  const getKeywordFromHash = useCallback(() => {
    if (typeof window === 'undefined' || !isGlossaryPage) return currentKeywordTitle;
    
    const hash = window.location.hash.substring(1);
    if (hash && hash.endsWith('-submit')) {
      const keywordSlug = hash.replace('-submit', '');
      const allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
      for (const item of allGlossaryItems) {
        const translations = item.querySelectorAll('[class*="glossaryTranslation"]');
        if (translations.length > 0) {
          const firstTranslation = translations[0].textContent?.trim();
          if (firstTranslation && slugifyTitle(firstTranslation) === keywordSlug) {
            return firstTranslation;
          }
        }
      }
      return deslugifyTitle(keywordSlug);
    }
    
    if (hash && !hash.endsWith('-submit')) {
      const allGlossaryItems = document.querySelectorAll('[data-keyword-id]');
      for (const item of allGlossaryItems) {
        const translations = item.querySelectorAll('[class*="glossaryTranslation"]');
        if (translations.length > 0) {
          const firstTranslation = translations[0].textContent?.trim();
          if (firstTranslation && slugifyTitle(firstTranslation) === hash) {
            return firstTranslation;
          }
        }
      }
    }
    
    return currentKeywordTitle;
  }, [currentKeywordTitle, isGlossaryPage]);
  
  const [effectiveKeywordTitle, setEffectiveKeywordTitle] = useState(currentKeywordTitle);
  
  useEffect(() => {
    if (isOpen && isGlossaryPage) {
      const keyword = getKeywordFromHash();
      setEffectiveKeywordTitle(keyword);
    } else {
      setEffectiveKeywordTitle(currentKeywordTitle);
    }
  }, [isOpen, currentKeywordTitle, isGlossaryPage, getKeywordFromHash]);

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

  useEffect(() => {
    if (!isGlossaryPage) return;

    if (isOpen) {
      savedScrollPosition.current = window.scrollY || document.documentElement.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = savedScrollPosition.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      document.body.setAttribute('data-restoring-scroll', 'true');
      
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollY,
          behavior: 'instant'
        });
        
        setTimeout(() => {
          window.scrollTo({
            top: scrollY,
            behavior: 'instant'
          });
          
          setTimeout(() => {
            document.body.removeAttribute('data-restoring-scroll');
          }, 100);
        }, 50);
      });
    }

    return () => {
      if (isGlossaryPage && !isOpen) {
        const scrollY = savedScrollPosition.current;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollY,
            behavior: 'instant'
          });
        });
      }
    };
  }, [isOpen, isGlossaryPage]);

  const handleSubmit = useCallback(async () => {
    if (!interpretation.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      const token = siteKey ? await getRecaptchaToken(siteKey, 'glossary_submit') : null;

      const formData = {
        interpretation,
        name: name || null,
        keyword: effectiveKeywordTitle,
        recaptchaToken: token,
        website
      };

      const response = await fetch('/api/submit-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setInterpretation('');
        setName('');
        onClose();
      } else {
        const error = await response.json();
        console.error('Failed to submit entry:', error);
      }
    } catch (error) {
      console.error('Error submitting entry:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [interpretation, name, effectiveKeywordTitle, onClose]);

  useEffect(() => {
    if (onSubmitRef) {
      onSubmitRef.current = handleSubmit;
    }
  }, [onSubmitRef, handleSubmit]);

  return (
    <>
      <div className={`submit-entry-panel-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="submit-entry-panel-close">
          <CrossButton color={COLOR_WHITE} onClick={onClose} />
        </div>

        <div className="submit-entry-panel-content">
          <form ref={formRef} className="submit-entry-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <textarea 
              className="submit-entry-textarea submit-entry-interpretation"
              placeholder={`Type to Submit your interpretation of ${effectiveKeywordTitle || 'this word'}`}
              rows={10}
              value={interpretation}
              onChange={(e) => setInterpretation(e.target.value)}
            />
            
            <input 
              type="text"
              className="submit-entry-input submit-entry-name"
              placeholder="Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
            />
            <div className="submit-entry-privacy-text">
              <p>Data Privacy Consent:</p>
              <p className="submit-entry-privacy-content">By submitting an entry, you consent to its use for research, educational, and documentation purposes related to this project. Identifying information will not be shared without your consent.</p>
            </div>
          </form>
        </div>
      </div>

      <div 
        className={`submit-entry-panel-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
    </>
  );
}
