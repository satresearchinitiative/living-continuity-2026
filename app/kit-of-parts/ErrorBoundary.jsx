'use client';

import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error);
    console.error('Error Details:', {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || 'Unknown error';
      const errorStack = this.state.error?.stack || '';
      
      return (
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          fontSize: '14px'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Error loading 3D scene</div>
          <div style={{ maxWidth: '600px', wordBreak: 'break-word', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>Error: {errorMessage}</div>
            {errorStack && (
              <details style={{ marginTop: '10px', fontSize: '12px', opacity: 0.8 }}>
                <summary style={{ cursor: 'pointer' }}>Stack Trace</summary>
                <pre style={{ textAlign: 'left', overflow: 'auto', maxHeight: '200px' }}>
                  {errorStack}
                </pre>
              </details>
            )}
          </div>
          <button 
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: 'black',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
