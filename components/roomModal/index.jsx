'use client';

import * as React from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

export default function RoomModal({ close }) {
  const pathname = usePathname();
  const [infoData, setInfoData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadInfoData = async () => {
      try {
        const response = await fetch('/data/info.json');
        if (!response.ok) {
          throw new Error('Failed to load info data');
        }
        const data = await response.json();
        
        const routeKey = pathname === '/' ? '/' : pathname;
        const routeInfo = data[routeKey] || data['/living-continuity'];
        
        setInfoData(routeInfo);
      } catch (error) {
        console.error('Error loading info data:', error);
        setInfoData({
          title: "Welcome",
          content: "To navigate in the digital exhibition, depending on the device you are currently browsing this space on you can use both your fingers or mouse. Zoom in or out, drag or pan to interact with the scene."
        });
      } finally {
        setLoading(false);
      }
    };

    loadInfoData();
  }, [pathname]);

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

  if (loading) {
    return (
      <div className={styles.modal_wrapper}>
        <div className={styles.content}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!infoData) {
    return null;
  }

  return (
    <>
      <div className={styles.modal_wrapper}>
        {close && (
          <div className={styles.close_button} onClick={close}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line 
                x1="3" 
                y1="3" 
                x2="21" 
                y2="21" 
                stroke="#000000" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <line 
                x1="21" 
                y1="3" 
                x2="3" 
                y2="21" 
                stroke="#000000" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        <div className={styles.content}>
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
        </div>
      </div>
    </>
  );
}
