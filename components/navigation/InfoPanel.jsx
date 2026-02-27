/**
 * InfoPanel Component
 * 
 * Sliding panel that slides in from the right side.
 * Pink background with font weight 100.
 * @param {boolean} isOpen - Controls panel visibility
 * @param {function} onClose - Callback function to close the panel
 */
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import CrossButton from '../menu/CrossButton';
import { COLOR_BLACK } from '../_setup/colors';
import './navigation.scss';

export default function InfoPanel({ isOpen, onClose }) {
  const pathname = usePathname();
  const [infoData, setInfoData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Prevent body scroll when panel is open
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
    // Load info data from JSON
    const loadInfoData = async () => {
      try {
        console.log('[InfoPanel] Loading info data for pathname:', pathname);
        // Add cache-busting parameter to ensure fresh data
        const response = await fetch(`/data/info.json?t=${Date.now()}`);
        if (!response.ok) {
          console.error('[InfoPanel] HTTP error:', response.status, response.statusText);
          throw new Error(`HTTP ${response.status}: Failed to load info data`);
        }
        const data = await response.json();
        console.log('[InfoPanel] Info data loaded successfully:', data);
        
        // Get the route key (normalize pathname)
        const routeKey = pathname === '/' ? '/' : pathname;
        const routeInfo = data[routeKey] || data['/'];
        console.log('[InfoPanel] Route key:', routeKey, 'Route info:', routeInfo);
        
        // Ensure we only use the content, not any old array structure
        if (routeInfo) {
          // If it's a string, use it directly
          if (typeof routeInfo.content === 'string') {
            console.log('[InfoPanel] Setting info data with content string');
            setInfoData({ content: routeInfo.content });
          } else {
            // Fallback: set the whole object (shouldn't happen with current JSON)
            console.warn('[InfoPanel] Route info content is not a string, using whole object');
            setInfoData(routeInfo);
          }
        } else {
          // No route info found, use fallback
          console.warn('[InfoPanel] No route info found for:', routeKey, 'using fallback');
          setInfoData({
            content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
          });
        }
      } catch (error) {
        console.error('[InfoPanel] Error loading info data:', error);
        console.error('[InfoPanel] Error details:', {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        // Fallback content
        setInfoData({
          content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
        });
      } finally {
        setLoading(false);
        console.log('[InfoPanel] Loading complete');
      }
    };

    if (isOpen) {
      setLoading(true);
      loadInfoData();
    }
  }, [pathname, isOpen]);

  // Helper function to render markdown-style emphasis
  const renderText = (text) => {
    if (!text) return null;
    
    // Convert *text* to <em>text</em>
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <>
      <div className={`info-panel-wrapper ${isOpen ? 'open' : ''}`}>
        {/* Close Button - Positioned on the right */}
        <div className="info-panel-close">
          <CrossButton color={COLOR_BLACK} onClick={onClose} />
        </div>

        {/* Info Content */}
        <div className="info-panel-content">
          {loading ? (
            <p>Loading...</p>
          ) : infoData ? (
            <>   
              <h4>Info:</h4>
              <div className="info-panel-content-inner">          
              {infoData.content && (
                typeof infoData.content === 'string' ? (
                  <p>{renderText(infoData.content)}</p>
                ) : Array.isArray(infoData.content) ? (
                  infoData.content.map((section, index) => (
                    <div key={index}>
                      {section.text && <p>{renderText(section.text)}</p>}
                    </div>
                    
                  ))
                ) : null
              )}
              {pathname !== '/' && (
                <span>
                  <a 
                    href="/content_folder/SRCE_LC_Images/Leon Duval.pdf" 
                    download="Leon Duval.pdf"
                    className="menu-download-button"
                  >
                    Download PDF
                  </a>
                </span>
              )}
              </div> 
            </>
          ) : null}
        </div>
      </div>

      <div 
        className={`info-panel-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
    </>
  );
}

