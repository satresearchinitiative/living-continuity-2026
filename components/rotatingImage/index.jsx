import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Html } from '@react-three/drei';
import * as THREE from 'three';
import { COLOR_ACCENT } from '../_setup/colors';
import { registerCrossGroup, unregisterCrossGroup, updateCrossPosition } from '../utils/crossPositionTracker';
import { useStore } from 'usestore-react';
import './RotatingImage.scss';
import '../templates/ArticleNodeTemplate.scss';

export function RotatingImage({
  imageUrl,
  position,
  scale = [10.8, 10.8, 1],
  tiltAmount = 0.15,
  opacity = 1.0,
  faceCamera = false,
  showCross = false,
  title = "",
  showTitle = false,
  showReadButton = false,
  onReadClick = null,
  onCloseCross = null,
  onClick = null,
  highlightState = { isSelected: false, isHighlighted: false, isSecondaryHighlighted: false, hasSelection: false },
  nodeId = null,
}) {
  const meshRef = useRef();
  const imageMeshRef = useRef();
  const rotatingWrapperRef = useRef();
  const groupRef = useRef();
  const crossGroupRef = useRef();
  const secondaryConnectionPointRef = useRef();
  const titleWrapperRefFront = useRef(null);
  const titleWrapperRefBack = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [htmlElementsVisible, setHtmlElementsVisible] = useState(true);
  const [backHtmlElementsVisible, setBackHtmlElementsVisible] = useState(false);
  const [crossVisible, setCrossVisible] = useState(true);
  const [measuredTitleHeightFront, setMeasuredTitleHeightFront] = useState(0);
  const [measuredTitleHeightBack, setMeasuredTitleHeightBack] = useState(0);
  const [isMeasurementReadyFront, setIsMeasurementReadyFront] = useState(false);
  const [isMeasurementReadyBack, setIsMeasurementReadyBack] = useState(false);

  const [selectedNode] = useStore('selectedNodeStore', null);
  const [highlightedNodes] = useStore('highlightedNodesStore', []);
  const [secondaryHighlightedArticles] = useStore('secondaryHighlightedArticlesStore', []);
  
  const isSelected = highlightState?.isSelected || (nodeId && selectedNode?.id === nodeId);
  const isHighlighted = highlightState?.isHighlighted || (nodeId && highlightedNodes.includes(nodeId));
  const isSecondaryHighlighted = highlightState?.isSecondaryHighlighted || (nodeId && secondaryHighlightedArticles.includes(nodeId));
  const hasSelection = highlightState?.hasSelection || (selectedNode !== null);
  const isDimmed = hasSelection && !isSelected && !isHighlighted && !isSecondaryHighlighted;
  const displayOpacity = isDimmed ? opacity * 0.2 : opacity;
  const borderColor = isSelected || isHighlighted ? COLOR_ACCENT : (isSecondaryHighlighted ? "#ffffff" : "#ffffff");

  /** When secondary highlighted, image uses same values as text: same renderOrder and depth, so they occlude together (no READ through plane). */
  const textRenderOrder = isSecondaryHighlighted ? 2 : (isSelected || isHighlighted) ? 13 : 7;
  const textDepthOn = isSecondaryHighlighted;

  const center = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useEffect(() => {
    if (!imageUrl) {
      setImageError(true);
      return;
    }

    const encodedUrl = imageUrl.includes(' ') ? imageUrl.split('/').map(part => encodeURIComponent(part)).join('/') : imageUrl;

    const img = new window.Image();
    img.onload = () => {
      setImageError(false);
      setCurrentImageUrl(encodedUrl);
    };
    img.onerror = (error) => {
      console.warn(`Failed to load image: ${imageUrl}`, error);
      if (imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
        const placeholderUrl = '/entriesImages/placeholder.svg';
        const placeholderImg = new window.Image();
        placeholderImg.onload = () => {
          setImageError(false);
          setCurrentImageUrl(placeholderUrl);
          console.warn(`Using placeholder for external image: ${imageUrl}`);
        };
        placeholderImg.onerror = () => {
          setImageError(true);
          setCurrentImageUrl(null);
        };
        placeholderImg.src = placeholderUrl;
        return;
      }

      if (imageUrl.endsWith('.jpg')) {
        const pngUrl = imageUrl.replace('.jpg', '.png');
        const encodedPngUrl = pngUrl.includes(' ') ? pngUrl.split('/').map(part => encodeURIComponent(part)).join('/') : pngUrl;
        const img2 = new window.Image();
        img2.onload = () => {
          setImageError(false);
          setCurrentImageUrl(encodedPngUrl);
        };
        img2.onerror = () => {
          const placeholderUrl = '/entriesImages/placeholder.svg';
          const img3 = new window.Image();
          img3.onload = () => {
            setImageError(false);
            setCurrentImageUrl(placeholderUrl);
            console.warn(`Using placeholder for missing image: ${imageUrl}`);
          };
          img3.onerror = () => {
            console.warn(`Could not load image: ${imageUrl} or ${pngUrl} or placeholder`);
            setImageError(true);
          };
          img3.src = placeholderUrl;
        };
        img2.src = encodedPngUrl;
      } else if (imageUrl.endsWith('.png')) {
        const jpgUrl = imageUrl.replace('.png', '.jpg');
        const encodedJpgUrl = jpgUrl.includes(' ') ? jpgUrl.split('/').map(part => encodeURIComponent(part)).join('/') : jpgUrl;
        const img2 = new window.Image();
        img2.onload = () => {
          setImageError(false);
          setCurrentImageUrl(encodedJpgUrl);
        };
        img2.onerror = () => {
          const placeholderUrl = '/entriesImages/placeholder.svg';
          const img3 = new window.Image();
          img3.onload = () => {
            setImageError(false);
            setCurrentImageUrl(placeholderUrl);
            console.warn(`Using placeholder for missing image: ${imageUrl}`);
          };
          img3.onerror = () => {
            console.warn(`Could not load image: ${imageUrl} or ${jpgUrl} or placeholder`);
            setImageError(true);
          };
          img3.src = placeholderUrl;
        };
        img2.src = encodedJpgUrl;
      } else {
        const placeholderUrl = '/entriesImages/placeholder.svg';
        const img2 = new window.Image();
        img2.onload = () => {
          setImageError(false);
          setCurrentImageUrl(placeholderUrl);
          console.warn(`Using placeholder for missing image: ${imageUrl}`);
        };
        img2.onerror = () => {
          console.warn(`Could not load image: ${imageUrl} or placeholder`);
          setImageError(true);
        };
        img2.src = placeholderUrl;
      }
    };
    img.src = encodedUrl;
  }, [imageUrl]);

  const tempVec1 = useRef(new THREE.Vector3());
  const tempVec2 = useRef(new THREE.Vector3());
  const tempVec3 = useRef(new THREE.Vector3());
  const tempVec4 = useRef(new THREE.Vector3());
  const tempVec5 = useRef(new THREE.Vector3());
  const tempQuat = useRef(new THREE.Quaternion());
  const tempQuat2 = useRef(new THREE.Quaternion());
  const tempMatrix = useRef(new THREE.Matrix4());
  const worldUp = useRef(new THREE.Vector3(0, 1, 0));

  useFrame((state, delta) => {
    if (!groupRef.current || !rotatingWrapperRef.current) return;

    let targetQuaternion = tempQuat.current;

    if (faceCamera) {
      const camera = state.camera;
      const currentPos = tempVec1.current;
      groupRef.current.getWorldPosition(currentPos);

      const directionToCamera = tempVec2.current.subVectors(camera.position, currentPos).normalize();

      const cameraY = camera.position.y;
      const articleY = currentPos.y;
      const verticalDistance = Math.abs(cameraY - articleY);
      const isTopOrBottomView = verticalDistance > 8;

      let right, correctedUp;

      if (isTopOrBottomView) {
        tempVec5.current.set(1, 0, 0);
        tempVec5.current.applyQuaternion(camera.quaternion);
        
        const cameraRightXZ = tempVec3.current.set(tempVec5.current.x, 0, tempVec5.current.z);
        
        if (cameraRightXZ.length() < 0.001) {
          right = tempVec3.current.set(1, 0, 0);
        } else {
          right = tempVec3.current.normalize();
        }

        correctedUp = tempVec4.current.crossVectors(directionToCamera, right).normalize();
      } else {
        right = tempVec3.current.crossVectors(worldUp.current, directionToCamera);

        if (right.length() < 0.001) {
          right.set(1, 0, 0);
        }
        right.normalize();

        correctedUp = tempVec4.current.crossVectors(directionToCamera, right).normalize();
      }

      const basis = tempMatrix.current.makeBasis(right, correctedUp, directionToCamera);
      targetQuaternion.setFromRotationMatrix(basis);
    } else {
      const currentPos = tempVec1.current;
      groupRef.current.getWorldPosition(currentPos);

      const directionToCenter = tempVec2.current.subVectors(center, currentPos);
      const distance = directionToCenter.length();
      if (distance < 0.001) return;
      directionToCenter.normalize();

      const right = tempVec3.current.crossVectors(worldUp.current, directionToCenter);
      if (right.length() < 0.001) {
        right.set(1, 0, 0);
      }
      right.normalize();

      const stableUp = tempVec4.current.crossVectors(directionToCenter, right).normalize();

      const basis = tempMatrix.current.makeBasis(right, stableUp, directionToCenter);
      targetQuaternion.setFromRotationMatrix(basis);

      if (tiltAmount !== 0) {
        const tiltQuaternion = tempQuat2.current.setFromAxisAngle(right, tiltAmount);
        targetQuaternion.multiply(tiltQuaternion);
      }
    }

    const currentQuaternion = rotatingWrapperRef.current.quaternion;
    const rotationLerp = Math.min(1, 8.0 * delta);
    currentQuaternion.slerp(targetQuaternion, rotationLerp);

    const camera = state.camera;
    const cardPosition = tempVec1.current;
    groupRef.current.getWorldPosition(cardPosition);

    const forward = tempVec2.current.set(0, 0, 1);
    forward.applyQuaternion(currentQuaternion);

    const toCamera = tempVec3.current.subVectors(camera.position, cardPosition).normalize();

    const dotProduct = forward.dot(toCamera);

    setHtmlElementsVisible(dotProduct > 0);
    setBackHtmlElementsVisible(dotProduct <= 0);
    setCrossVisible(dotProduct > 0);
  });

  const borderWidth = 0.2;
  const borderScale = useMemo(() => [
    scale[0] + (borderWidth * 2),
    scale[1] + (borderWidth * 2),
    scale[2]
  ], [scale]);

  const showPlaceholder = !imageUrl || (imageError && !currentImageUrl);

  const imageWidth = scale[0];
  const imageHeight = scale[1];
  const totalWidth = imageWidth + (borderWidth * 2);
  const totalHeight = imageHeight + (borderWidth * 2);

  const topLeft = useMemo(() => new THREE.Vector3(-totalWidth / 2, totalHeight / 2, 0), [totalWidth, totalHeight]);
  const topRight = useMemo(() => new THREE.Vector3(totalWidth / 2, totalHeight / 2, 0), [totalWidth, totalHeight]);
  const bottomLeft = useMemo(() => new THREE.Vector3(-totalWidth / 2, -totalHeight / 2, 0), [totalWidth, totalHeight]);
  const bottomRight = useMemo(() => new THREE.Vector3(totalWidth / 2, -totalHeight / 2, 0), [totalWidth, totalHeight]);
  const imageCenter = center;
  const topCenter = useMemo(() => new THREE.Vector3(0, totalHeight / 2, 0), [totalHeight]);
  const bottomCenter = useMemo(() => new THREE.Vector3(0, -totalHeight / 2, 0), [totalHeight]);
  const leftCenter = useMemo(() => new THREE.Vector3(-totalWidth / 2, 0, 0), [totalWidth]);
  const rightCenter = useMemo(() => new THREE.Vector3(totalWidth / 2, 0, 0), [totalWidth]);

  const crossSize = 1.5;
  const crossLineWidth = 0.1;
  const crossBottomPosition = -totalHeight / 2 - 0.1;
  const crossZPosition = 0.001;
  const circleRadius = crossSize * 0.7;

  const titleAndReadWrapperZPosition = -0.08;

  const wrapperWidthMultiplier = 2.14;
  const wrapperHeightMultiplier = 2.07;
  const wrapperWidth = useMemo(() => scale[0] * wrapperWidthMultiplier, [scale]);
  const wrapperHeight = useMemo(() => scale[1] * wrapperHeightMultiplier, [scale]);
  const wrapperWidthPx = useMemo(() => Math.round(wrapperWidth * 20), [wrapperWidth]);
  const wrapperHeightPx = useMemo(() => Math.round(wrapperHeight * 20), [wrapperHeight]);
  const titleWidthPx = useMemo(() => Math.round(wrapperWidthPx * 0.95), [wrapperWidthPx]);

  const truncateTitle = useMemo(() => {
    if (!title || title.length <= 96) return title;
    const truncated = title.substring(0, 96);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + '...';
    }
    return truncated + '...';
  }, [title]);

  const articleHeightPx = useMemo(() => Math.round(scale[1] * 41), [scale]);
  
  const measureTitle = (titleWrapperElement) => {
    if (!titleWrapperElement) return null;
    
    const titleContainer = titleWrapperElement.querySelector('.titleContainer');
    const elementToMeasure = titleContainer || titleWrapperElement;
    
    const computedStyle = window.getComputedStyle(elementToMeasure);
    let height = elementToMeasure.offsetHeight || elementToMeasure.scrollHeight || elementToMeasure.clientHeight;
    
    if (height === 0) {
      const rect = elementToMeasure.getBoundingClientRect();
      height = rect.height;
    }
    
    if (height === 0) return null;
    
    const marginTop = parseFloat(computedStyle.marginTop) || 0;
    const marginBottom = parseFloat(computedStyle.marginBottom) || 0;
    
    const wrapperStyle = window.getComputedStyle(titleWrapperElement);
    const wrapperMarginTop = parseFloat(wrapperStyle.marginTop) || 0;
    const wrapperMarginBottom = parseFloat(wrapperStyle.marginBottom) || 0;
    
    const totalHeight = height + marginTop + marginBottom + wrapperMarginTop + wrapperMarginBottom;
    
    return totalHeight > 0 ? Math.round(totalHeight) : null;
  };

  useEffect(() => {
    if (!showTitle || !title) {
      setMeasuredTitleHeightFront(0);
      setMeasuredTitleHeightBack(0);
      if (showReadButton) {
        setIsMeasurementReadyFront(true);
        setIsMeasurementReadyBack(true);
      } else {
        setIsMeasurementReadyFront(false);
        setIsMeasurementReadyBack(false);
      }
      return;
    }

    setIsMeasurementReadyFront(false);
    setIsMeasurementReadyBack(false);

    const performMeasurement = () => {
      let frontMeasured = false;
      let backMeasured = false;

      if (titleWrapperRefFront.current) {
        const frontHeight = measureTitle(titleWrapperRefFront.current);
        if (frontHeight !== null && frontHeight > 0) {
          setMeasuredTitleHeightFront(frontHeight);
          frontMeasured = true;
          setTimeout(() => {
            setIsMeasurementReadyFront(true);
          }, 150);
        }
      }

      if (titleWrapperRefBack.current) {
        const backHeight = measureTitle(titleWrapperRefBack.current);
        if (backHeight !== null && backHeight > 0) {
          setMeasuredTitleHeightBack(backHeight);
          backMeasured = true;
          setTimeout(() => {
            setIsMeasurementReadyBack(true);
          }, 150);
        }
      }

      return frontMeasured && backMeasured;
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        performMeasurement();
      });
    });

    const setupObservers = () => {
      const elementsToObserve = [];
      if (titleWrapperRefFront.current) {
        elementsToObserve.push(titleWrapperRefFront.current);
      }
      if (titleWrapperRefBack.current) {
        elementsToObserve.push(titleWrapperRefBack.current);
      }

      if (elementsToObserve.length > 0) {
        elementsToObserve.forEach(element => {
          resizeObserver.observe(element);
        });
        return true;
      }
      return false;
    };

    if (setupObservers()) {
      let measurementAttempts = 0;
      const maxAttempts = 30;
      
      const tryMeasurement = () => {
        const success = performMeasurement();
        measurementAttempts++;
        
        if (!success && measurementAttempts < maxAttempts) {
          setTimeout(tryMeasurement, 100);
        } else if (measurementAttempts >= maxAttempts && showReadButton) {
          setIsMeasurementReadyFront(true);
          setIsMeasurementReadyBack(true);
        }
      };

      setTimeout(() => {
        tryMeasurement();
      }, 200);

      const checkInterval = setInterval(() => {
        performMeasurement();
      }, 300);

      const maxTimeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (showReadButton) {
          setIsMeasurementReadyFront(true);
          setIsMeasurementReadyBack(true);
        }
      }, 2000);

      return () => {
        clearTimeout(maxTimeout);
        clearInterval(checkInterval);
        resizeObserver.disconnect();
      };
    } else {
      let checkCount = 0;
      const checkInterval = setInterval(() => {
        if (setupObservers()) {
          clearInterval(checkInterval);
          setTimeout(() => {
            performMeasurement();
          }, 100);
          
          const measurementInterval = setInterval(() => {
            performMeasurement();
          }, 200);
          
          const maxTimeout = setTimeout(() => {
            clearInterval(measurementInterval);
            if (showReadButton) {
              setIsMeasurementReadyFront(true);
              setIsMeasurementReadyBack(true);
            }
          }, 1500);

          return () => {
            clearTimeout(maxTimeout);
            clearInterval(measurementInterval);
            resizeObserver.disconnect();
          };
        }
        checkCount++;
        if (checkCount > 40) {
          clearInterval(checkInterval);
          if (showReadButton) {
            setIsMeasurementReadyFront(true);
            setIsMeasurementReadyBack(true);
          }
        }
      }, 50);

      const maxTimeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (showReadButton) {
          setIsMeasurementReadyFront(true);
          setIsMeasurementReadyBack(true);
        }
      }, 2000);

      return () => {
        clearTimeout(maxTimeout);
        clearInterval(checkInterval);
        resizeObserver.disconnect();
      };
    }
  }, [showTitle, title, truncateTitle, titleWidthPx, showReadButton]);

  const readWrapperHeightPxFront = useMemo(() => {
    let titleHeight = measuredTitleHeightFront || 0;
    
    if (showTitle && title && titleHeight === 0) {
      const estimatedTitleHeight = Math.min(articleHeightPx * 0.3, 120);
      titleHeight = estimatedTitleHeight;
    }
    
    const calculatedHeight = Math.max(0, articleHeightPx - titleHeight);
    return calculatedHeight;
  }, [articleHeightPx, measuredTitleHeightFront, showTitle, title]);

  const readWrapperHeightPxBack = useMemo(() => {
    let titleHeight = measuredTitleHeightBack || 0;
    
    if (showTitle && title && titleHeight === 0) {
      const estimatedTitleHeight = Math.min(articleHeightPx * 0.3, 120);
      titleHeight = estimatedTitleHeight;
    }
    
    const calculatedHeight = Math.max(0, articleHeightPx - titleHeight);
    return calculatedHeight;
  }, [articleHeightPx, measuredTitleHeightBack, showTitle, title]);

  useEffect(() => {
    if (!nodeId) return;

    if (showCross && crossVisible && crossGroupRef.current) {
      registerCrossGroup(nodeId, crossGroupRef);
    } else if (isSecondaryHighlighted && !showCross && secondaryConnectionPointRef.current) {
      registerCrossGroup(nodeId, secondaryConnectionPointRef);
    } else {
      unregisterCrossGroup(nodeId);
    }

    return () => {
      unregisterCrossGroup(nodeId);
    };
  }, [nodeId, showCross, crossVisible, isSecondaryHighlighted]);

  useFrame(() => {
    if (nodeId && showCross && crossVisible && crossGroupRef.current) {
      updateCrossPosition(nodeId);
    } else if (nodeId && isSecondaryHighlighted && !showCross && secondaryConnectionPointRef.current) {
      updateCrossPosition(nodeId);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <group ref={rotatingWrapperRef}>
        <mesh position={[0, 0, -0.15]} renderOrder={isSecondaryHighlighted ? textRenderOrder : (isSelected || isHighlighted || isSecondaryHighlighted) ? 11 : 1} frustumCulled={false}>
          <planeGeometry args={[borderScale[0], borderScale[1]]} />
          <meshBasicMaterial
            color="#000000"
            transparent
            opacity={1.0 * displayOpacity}
            side={THREE.DoubleSide}
            depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
            depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
          />
        </mesh>
        <mesh position={[0, 0, -0.10]} renderOrder={isSecondaryHighlighted ? textRenderOrder : (isSelected || isHighlighted || isSecondaryHighlighted) ? 12 : 2} frustumCulled={false}>
          <planeGeometry args={[borderScale[0], borderScale[1]]} />
          <meshBasicMaterial
            color={borderColor}
            transparent
            opacity={1.0 * displayOpacity}
            side={THREE.DoubleSide}
            depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
            depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
          />
        </mesh>
        {isSelected && (
          <mesh position={[0, 0, -0.05]} renderOrder={isSecondaryHighlighted ? textRenderOrder : (isSelected || isHighlighted || isSecondaryHighlighted) ? 12.5 : 2.5} frustumCulled={false}>
            <planeGeometry args={[borderScale[0], borderScale[1]]} />
            <meshBasicMaterial
              color={COLOR_ACCENT}
              transparent
              opacity={0.18 * displayOpacity}
              side={THREE.DoubleSide}
              depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
              depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
            />
          </mesh>
        )}
        {showPlaceholder ? (
          <mesh 
            ref={meshRef} 
            position={[0, 0, 0]} 
            renderOrder={isSecondaryHighlighted ? textRenderOrder : (isSelected || isHighlighted || isSecondaryHighlighted) ? 10 : 3} 
            frustumCulled={false}
            {...(onClick ? { onClick } : {})}
          >
            <planeGeometry args={[scale[0], scale[1]]} />
            <meshBasicMaterial
              color={COLOR_ACCENT}
              transparent
              opacity={(isSelected || isHighlighted || isSecondaryHighlighted) ? 1.0 * displayOpacity : 0.98 * displayOpacity}
              side={THREE.DoubleSide}
              depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
              depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
            />
          </mesh>
        ) : currentImageUrl && !imageError && (
          <group ref={imageMeshRef} position={[0, 0, 0]} renderOrder={isSecondaryHighlighted ? textRenderOrder : (isSelected || isHighlighted || isSecondaryHighlighted) ? 10 : 3}>
            <mesh
              position={[0, 0, 0]}
              {...(onClick ? { onClick } : {})}
            >
              <planeGeometry args={[scale[0], scale[1]]} />
              <meshBasicMaterial
                transparent
                opacity={0}
                side={THREE.DoubleSide}
                depthWrite={false}
                depthTest={false}
              />
            </mesh>
            {currentImageUrl && (
              <>
                <Image
                  url={currentImageUrl}
                  scale={scale}
                  transparent
                  opacity={(isSelected || isHighlighted || isSecondaryHighlighted) ? 1.0 * displayOpacity : 0.98 * displayOpacity}
                  depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
                  depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
                  frustumCulled={false}
                  onError={(error) => {
                    console.warn(`Image component failed to load: ${currentImageUrl}`, error);
                    setImageError(true);
                    setCurrentImageUrl(null);
                  }}
                />
                <Image
                  url={currentImageUrl}
                  scale={scale}
                  transparent
                  opacity={(isSelected || isHighlighted || isSecondaryHighlighted) ? 1.0 * displayOpacity : 0.98 * displayOpacity}
                  depthWrite={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
                  depthTest={isSecondaryHighlighted ? textDepthOn : !(isSelected || isHighlighted || isSecondaryHighlighted)}
                  frustumCulled={false}
                  rotation={[0, Math.PI, 0]}
                  onError={(error) => {
                    console.warn(`Image component failed to load (back): ${currentImageUrl}`, error);
                    setImageError(true);
                    setCurrentImageUrl(null);
                  }}
                />
              </>
            )}
          </group>
        )}

        {((showTitle && title) || showReadButton) && htmlElementsVisible && (
          <group position={[0, 0, titleAndReadWrapperZPosition]} renderOrder={textRenderOrder}>
            <mesh 
              renderOrder={textRenderOrder} 
              frustumCulled={false}
              {...(onClick ? { onClick } : {})}
            >
              <planeGeometry args={[wrapperWidth, wrapperHeight]} />
              <meshBasicMaterial
                color="#000000"
                transparent
                opacity={0}
                side={THREE.FrontSide}
                depthWrite={textDepthOn}
                depthTest={textDepthOn}
              />
            </mesh>
            <Html
              center={false}
              className="titleAndReadWrapper"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -30%)',
                width: `${wrapperWidthPx}px`,
                height: `${wrapperHeightPx}px`,
                minWidth: `${wrapperWidthPx}px`,
                minHeight: `${wrapperHeightPx}px`,
                maxWidth: 'none',
                maxHeight: 'none',
                margin: 0,
                padding: 0,
                pointerEvents: 'none',
              }}
              transform
              occlude={isSecondaryHighlighted || (hasSelection && !isSelected && !isHighlighted) ? true : false}
            >
              <div
                className="titleAndReadContainer"
                style={{
                  width: `${wrapperWidthPx}px`,
                  height: `${articleHeightPx}px`,
                  minWidth: `${wrapperWidthPx}px`,
                  minHeight: `${articleHeightPx}px`,
                  maxWidth: 'none',
                  maxHeight: 'none',
                  opacity: displayOpacity,
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  pointerEvents: 'none',
                  transform: 'translateY(-20%)',
                }}
              >
                {showReadButton && (
                  <div 
                    className="readWrapper"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: `${readWrapperHeightPxFront}px`,
                      opacity: isMeasurementReadyFront ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                      pointerEvents: isMeasurementReadyFront ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className="readButton"
                      onClick={onReadClick}
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="readButtonText">
                        READ
                      </span>
                    </div>
                  </div>
                )}
                {showTitle && title && (
                  <div 
                    ref={titleWrapperRefFront}
                    className="titleWrapper"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                    }}
                  >
                    <div
                      className="titleContainer"
                      style={{
                        width: `${titleWidthPx}px`,
                      }}
                    >
                      {truncateTitle}
                    </div>
                  </div>
                )}
              </div>
            </Html>
          </group>
        )}
        {((showTitle && title) || showReadButton) && backHtmlElementsVisible && (
          <group position={[0, 0, titleAndReadWrapperZPosition]} rotation={[0, Math.PI, 0]} renderOrder={textRenderOrder}>
            <mesh 
              renderOrder={textRenderOrder} 
              frustumCulled={false}
              {...(onClick ? { onClick } : {})}
            >
              <planeGeometry args={[wrapperWidth, wrapperHeight]} />
              <meshBasicMaterial
                color="#000000"
                transparent
                opacity={0}
                side={THREE.FrontSide}
                depthWrite={textDepthOn}
                depthTest={textDepthOn}
              />
            </mesh>
            <Html
              center={false}
              className="titleAndReadWrapper"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -30%)',
                width: `${wrapperWidthPx}px`,
                height: `${wrapperHeightPx}px`,
                minWidth: `${wrapperWidthPx}px`,
                minHeight: `${wrapperHeightPx}px`,
                maxWidth: 'none',
                maxHeight: 'none',
                margin: 0,
                padding: 0,
                pointerEvents: 'none',
              }}
              transform
              occlude={isSecondaryHighlighted || (hasSelection && !isSelected && !isHighlighted) ? true : false}
            >
              <div
                className="titleAndReadContainer"
                style={{
                  width: `${wrapperWidthPx}px`,
                  height: `${articleHeightPx}px`,
                  minWidth: `${wrapperWidthPx}px`,
                  minHeight: `${articleHeightPx}px`,
                  maxWidth: 'none',
                  maxHeight: 'none',
                  opacity: displayOpacity,
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  pointerEvents: 'none',
                  transform: 'translateY(-20%)',
                }}
              >
                {showReadButton && (
                  <div 
                    className="readWrapper"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: `${readWrapperHeightPxBack}px`,
                      opacity: isMeasurementReadyBack ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                      pointerEvents: isMeasurementReadyBack ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className="readButton"
                      onClick={onReadClick}
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="readButtonText">
                        READ
                      </span>
                    </div>
                  </div>
                )}
                {showTitle && title && (
                  <div 
                    ref={titleWrapperRefBack}
                    className="titleWrapper"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                    }}
                  >
                    <div
                      className="titleContainer"
                      style={{
                        width: `${titleWidthPx}px`,
                      }}
                    >
                      {truncateTitle}
                    </div>
                  </div>
                )}
              </div>
            </Html>
          </group>
        )}

        {showCross && crossVisible && (
          <group ref={crossGroupRef} position={[0, crossBottomPosition, crossZPosition]} renderOrder={1000}>
            <Html
              center
              className="crossHtml"
              transform
              occlude={false}
            >
              <div
                className="crossContainer"
                style={{
                  opacity: isSecondaryHighlighted ? 0 : displayOpacity,
                }}
                onClick={onCloseCross || undefined}
              >
                <div className="crossBackground" />
                <div className="crossBorder" />
                <div className="crossLines">
                  <div className="crossLine line1" />
                  <div className="crossLine line2" />
                </div>
              </div>
            </Html>
          </group>
        )}
        {isSecondaryHighlighted && !showCross && (
          <group ref={secondaryConnectionPointRef} position={[0, crossBottomPosition, crossZPosition]} renderOrder={1000}>
            {crossVisible && (
              <mesh>
                <planeGeometry args={[0.01, 0.01]} />
                <meshBasicMaterial color="#ff0000" transparent opacity={1} side={THREE.DoubleSide} depthWrite={false} depthTest={true} />
              </mesh>
            )}
          </group>
        )}
      </group>
    </group>
  );
}

export default RotatingImage;
