/**
 * Error Boundary - Next.js App Router
 * 
 * This component catches errors in the app and displays a fallback UI.
 * In the App Router, this replaces error handling from pages/_app.js and pages/500.js.
 * This file must be a Client Component.
 */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('[ERROR] Application error caught:', error);
    console.error('[ERROR] Error message:', error?.message);
    console.error('[ERROR] Error stack:', error?.stack);
    console.error('[ERROR] Error name:', error?.name);
    
    // Log to Vercel/deployment logs (will appear in deployment logs)
    if (typeof window !== 'undefined') {
      try {
        // Additional context
        console.error('[ERROR] URL:', window.location.href);
        console.error('[ERROR] User Agent:', navigator.userAgent);
      } catch (e) {
        // Silently fail if we can't access window
      }
    }
  }, [error]);
  
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>500</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '30px' }}>
        An error occurred while loading this page. Please try again.
      </p>
      {isDevelopment && error && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '800px',
          width: '100%',
          fontSize: '14px'
        }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Error Details (Development Only):</h3>
          <p><strong>Message:</strong> {error.message || 'Unknown error'}</p>
          {error.stack && (
            <details style={{ marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Stack Trace</summary>
              <pre style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#fff', 
                borderRadius: '3px',
                overflow: 'auto',
                fontSize: '12px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      )}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            border: '1px solid #000',
            borderRadius: '5px',
            background: '#fff',
            cursor: 'pointer'
          }}
        >
          Try again
        </button>
        <Link 
          href="/" 
          style={{
            padding: '10px 20px',
            border: '1px solid #000',
            borderRadius: '5px',
            textDecoration: 'none',
            color: '#000'
          }}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

