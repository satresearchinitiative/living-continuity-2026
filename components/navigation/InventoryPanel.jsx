'use client';

import React from 'react';
import CrossButton from '../menu/CrossButton';
import { COLOR_BLACK } from '../_setup/colors';
import './inventory.scss';

export default function InventoryPanel({ isOpen, onClose, furnitureItems, onItemClick, onRemoveItem }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('inventory-open');
    } else {
      document.body.classList.remove('inventory-open');
    }
    return () => {
      document.body.classList.remove('inventory-open');
    };
  }, [isOpen]);

  return (
    <>
      <div className={`inventory-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="inventory-close">
          <CrossButton color={COLOR_BLACK} onClick={onClose} />
        </div>

        <nav className="inventory-nav">
          <ul>
            {furnitureItems.map((item, index) => (
              <li key={index}>
                <div
                  className={`inventory-item ${item.active ? 'inventory-item-active' : ''}`}
                  onClick={() => onItemClick(item.type)}
                >
                  <div className="inventory-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  {item.active && (
                    <div 
                      className="inventory-item-remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onRemoveItem) {
                          onRemoveItem(item.type);
                        } else {
                          onItemClick(item.type);
                        }
                      }}
                    >
                      remove
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
