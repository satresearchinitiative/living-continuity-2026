import React from "react";
import { Html } from "@react-three/drei";
import "./object-controls.scss";

export function ObjectControls({ 
  isSelected, 
  onRotate, 
  onMoveRight, 
  onMoveLeft, 
  onMoveTop, 
  onMoveBottom,
  onPlace = () => {},
  title
}) {
  if (!isSelected) return null;

  return (
    <Html position={[0, 5.5, 0]} center>
      {title && (
        <div className="object-controls__title">{title}</div>
      )}
      <div className="object-controls">
        <div className="object-controls__row object-controls__row--first">
          <button className="object-controls__action object-controls__action--rotate" onClick={onRotate} title="Rotate">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.29373 16.8632L6.9055 18.3121L7.29373 16.8632ZM15.4147 10.9498C15.2003 11.75 15.6752 12.5725 16.4754 12.787C17.2756 13.0014 18.0981 12.5265 18.3125 11.7263L16.8636 11.3381L15.4147 10.9498ZM12.6883 17.9981C13.4604 17.6977 13.8426 16.8282 13.5422 16.0562C13.2417 15.2842 12.3723 14.9019 11.6003 15.2024L12.1443 16.6002L12.6883 17.9981ZM19.5808 9.6161L20.6414 10.6768C21.0704 10.2478 21.1988 9.60259 20.9666 9.04208C20.7344 8.48156 20.1875 8.1161 19.5808 8.1161L19.5808 9.6161ZM16.9762 12.2207L15.9155 13.2814C16.5013 13.8671 17.4511 13.8671 18.0369 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 8.1161C13.7649 8.1161 13.2179 8.48157 12.9858 9.04208C12.7536 9.60259 12.8819 10.2478 13.3109 10.6768L14.3716 9.6161ZM7.29373 16.8632L7.68196 15.4143C4.31377 14.5118 2.31494 11.0498 3.21744 7.68159L1.76855 7.29336L0.319665 6.90513C-1.01166 11.8737 1.93692 16.9808 6.9055 18.3121L7.29373 16.8632ZM1.76855 7.29336L3.21744 7.68159C4.11994 4.3134 7.58202 2.31457 10.9502 3.21708L11.3384 1.76819L11.7267 0.319298C6.75808 -1.01203 1.65099 1.93655 0.319665 6.90513L1.76855 7.29336ZM11.3384 1.76819L10.9502 3.21708C14.3184 4.11958 16.3172 7.58165 15.4147 10.9498L16.8636 11.3381L18.3125 11.7263C19.6438 6.75771 16.6953 1.65063 11.7267 0.319298L11.3384 1.76819ZM12.1443 16.6002L11.6003 15.2024C10.3925 15.6724 9.03186 15.776 7.68196 15.4143L7.29373 16.8632L6.9055 18.3121C8.89247 18.8445 10.9059 18.6918 12.6883 17.9981L12.1443 16.6002ZM19.5808 9.6161L18.5201 8.55544L15.9155 11.16L16.9762 12.2207L18.0369 13.2814L20.6414 10.6768L19.5808 9.6161ZM16.9762 12.2207L18.0368 11.16L15.4323 8.55544L14.3716 9.6161L13.3109 10.6768L15.9155 13.2814L16.9762 12.2207ZM14.3716 9.6161L14.3716 11.1161L19.5808 11.1161L19.5808 9.6161L19.5808 8.1161L14.3716 8.1161L14.3716 9.6161Z" fill="currentColor"/>
            </svg>
          </button>
          <button className="object-controls__action object-controls__action--save" onClick={onPlace} title="Place">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L11.9184 11.9184M12.3368 1.50001L1.91841 11.9184" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="object-controls__row">
          <button className="object-controls__dpad-button object-controls__dpad-button--up" onClick={onMoveTop} title="Move Top">
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
              <path d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="object-controls__row">
          <button className="object-controls__dpad-button object-controls__dpad-button--left" onClick={onMoveLeft} title="Move Left">
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
              <path d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="object-controls__dpad-button object-controls__dpad-button--right" onClick={onMoveRight} title="Move Right">
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="object-controls__row">
          <button className="object-controls__dpad-button object-controls__dpad-button--down" onClick={onMoveBottom} title="Move Bottom">
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(90deg)' }}>
              <path d="M2 7.20918L21.1003 7.20918M16.3253 2L21.5344 7.20918L16.3253 12.4184" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </Html>
  );
}
