'use client';

import React, { useState, useRef, useEffect } from 'react';
import CrossButton from '../menu/CrossButton';
import { COLOR_WHITE } from '../_setup/colors';
import { getRecaptchaToken } from '../utils/recaptcha';
import {
  parseFormErrorResponse,
  userFacingFormError
} from '../utils/formSubmissionClient';
import './capture-modal.scss';

function dataUrlToBlob(dataUrl) {
  if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) return null;
  const comma = dataUrl.indexOf(',');
  if (comma === -1) return null;
  const header = dataUrl.slice(0, comma);
  const data = dataUrl.slice(comma + 1);
  let mime = 'image/png';
  const mimeMatch = /^data:([^;,]+)/i.exec(header);
  if (mimeMatch) mime = mimeMatch[1];
  const isBase64 = /;base64/i.test(header);
  try {
    let bytes;
    if (isBase64) {
      const binary = atob(data);
      const len = binary.length;
      bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
    } else {
      bytes = new TextEncoder().encode(decodeURIComponent(data));
    }
    return new Blob([bytes], { type: mime });
  } catch {
    return null;
  }
}

export default function CaptureModal({ 
  isOpen, 
  onClose, 
  cachedImageDataUrl,
  onSubmitSuccess
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSentAck, setSubmitSentAck] = useState(false);
  const afterSubmitCloseRef = useRef(null);
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

  React.useEffect(() => {
    if (isOpen) setSubmitError('');
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) setSubmitSentAck(false);
  }, [isOpen]);

  useEffect(() => () => {
    if (afterSubmitCloseRef.current) {
      clearTimeout(afterSubmitCloseRef.current);
    }
  }, []);

  const clearPendingAfterSubmit = () => {
    if (afterSubmitCloseRef.current) {
      clearTimeout(afterSubmitCloseRef.current);
      afterSubmitCloseRef.current = null;
    }
  };

  const handleUserClose = () => {
    clearPendingAfterSubmit();
    setSubmitSentAck(false);
    onClose();
  };

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
    setSubmitError('');

    try {
      downloadImage(cachedImageDataUrl);

      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      const token = siteKey ? await getRecaptchaToken(siteKey, 'screenshot_submit') : null;

      const blob = dataUrlToBlob(cachedImageDataUrl);
      if (!blob || blob.size === 0) {
        setSubmitError('Could not read the capture. Please capture again.');
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append('screenshot', blob, 'floor-plan.png');
      if (token) formData.append('recaptchaToken', token);
      formData.append('website', website);

      const submitResponse = await fetch('/api/submit-floor-plan', {
        method: 'POST',
        body: formData,
      });

      if (!submitResponse.ok) {
        const err = await parseFormErrorResponse(submitResponse, 'submit-floor-plan');
        setSubmitError(userFacingFormError(err, 'Could not send your floor plan.'));
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitSentAck(true);
      onSubmitSuccess?.();
      clearPendingAfterSubmit();
      afterSubmitCloseRef.current = setTimeout(() => {
        afterSubmitCloseRef.current = null;
        setSubmitSentAck(false);
        onClose();
      }, 1200);
    } catch (error) {
      console.error('Error processing submission:', error);
      setSubmitError('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`capture-modal-wrapper ${isOpen ? 'open' : ''}${submitSentAck ? ' capture-modal-wrapper--confirmation' : ''}`}>
      <div className="capture-modal-close">
        <CrossButton color={COLOR_WHITE} onClick={handleUserClose} />
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
          {submitSentAck ? (
            <p role="status">Your floor plan has been submitted. Thank you.</p>
          ) : (
            <p>If you want to share your floor Plan arrangement with us Click submit Below</p>
          )}
        </div>

        {submitError ? (
          <p className="capture-modal-submit-error" role="alert">
            {submitError}
          </p>
        ) : null}

        {!submitSentAck ? (
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
        ) : null}
      </div>
    </div>
  );
}
