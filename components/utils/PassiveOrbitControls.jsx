import { useEffect } from 'react';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function PassiveOrbitControls(props) {
  const { gl } = useThree();

  useEffect(() => {
    const domElement = gl.domElement;
    if (!domElement) return;

    const makeEventsPassive = () => {
      const passiveListeners = [];
      const originalAddEventListener = domElement.addEventListener.bind(domElement);
      const originalRemoveEventListener = domElement.removeEventListener.bind(domElement);
      
      const passiveEvents = ['wheel', 'touchstart', 'touchmove'];
      
      domElement.addEventListener = function(type, listener, options) {
        if (passiveEvents.includes(type)) {
          passiveListeners.push({ type, listener, options });
          const passiveOptions = typeof options === 'boolean' 
            ? { passive: true, capture: options }
            : options && typeof options === 'object'
            ? { ...options, passive: true }
            : { passive: true };
          return originalAddEventListener(type, listener, passiveOptions);
        }
        return originalAddEventListener(type, listener, options);
      };

      domElement.removeEventListener = function(type, listener, options) {
        if (passiveEvents.includes(type)) {
          const index = passiveListeners.findIndex(l => l.listener === listener && l.type === type);
          if (index !== -1) {
            passiveListeners.splice(index, 1);
          }
        }
        return originalRemoveEventListener(type, listener, options);
      };
    };

    makeEventsPassive();

    return () => {
      if (domElement.addEventListener && domElement.addEventListener !== EventTarget.prototype.addEventListener) {
        delete domElement.addEventListener;
        domElement.addEventListener = EventTarget.prototype.addEventListener.bind(domElement);
      }
      if (domElement.removeEventListener && domElement.removeEventListener !== EventTarget.prototype.removeEventListener) {
        delete domElement.removeEventListener;
        domElement.removeEventListener = EventTarget.prototype.removeEventListener.bind(domElement);
      }
    };
  }, [gl]);

  return <DreiOrbitControls {...props} />;
}
