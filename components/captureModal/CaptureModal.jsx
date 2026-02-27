'use client';

import React, { useState } from 'react';
import CrossButton from '../menu/CrossButton';
import { COLOR_WHITE } from '../_setup/colors';
import { getRecaptchaToken } from '../utils/recaptcha';
import './capture-modal.scss';

export default function CaptureModal({ 
  isOpen, 
  onClose, 
  cachedImageDataUrl 
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [website, setWebsite] = useState('');

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

  const downloadImage = (dataUrl) => {
    if (!dataUrl) return;
    
    const link = document.createElement('a');
    link.download = `floor-plan-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const handleSubmit = async () => {
    if (!cachedImageDataUrl) {
      console.error('No cached image available');
      return;
    }

    setIsSubmitting(true);

    try {
      downloadImage(cachedImageDataUrl);

      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      const token = siteKey ? await getRecaptchaToken(siteKey, 'screenshot_submit') : null;

      const response = await fetch(cachedImageDataUrl);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('screenshot', blob, 'floor-plan.png');
      if (token) formData.append('recaptchaToken', token);
      formData.append('website', website);

      const submitResponse = await fetch('/api/submit-floor-plan', {
        method: 'POST',
        body: formData,
      });

      if (!submitResponse.ok) {
        const err = await submitResponse.json();
        console.error('Error submitting floor plan:', err);
      }

      setIsSubmitting(false);
      onClose();
    } catch (error) {
      console.error('Error processing submission:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`capture-modal-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="capture-modal-close">
        <CrossButton color={COLOR_WHITE} onClick={onClose} />
      </div>

      <div className="capture-modal-content">
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
        <div className="capture-modal-text">
          <p>If you want to share your floor Plan arrangement with us Click submit Below</p>
        </div>

        <button 
          type="button" 
          className="capture-submit-button"
          onClick={handleSubmit}
          disabled={isSubmitting || !cachedImageDataUrl}
        >
          {isSubmitting
            ? 'Submitting...'
            : !cachedImageDataUrl
              ? 'Loading data...'
              : 'submit'}
        </button>
      </div>
    </div>
  );
}
