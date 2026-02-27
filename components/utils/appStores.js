import { createStore } from "usestore-react";

if (typeof window !== 'undefined') {
  console.log('[appStores] Initializing stores...');
}

const createStoreSafe = (name, defaultValue) => {
  try {
    return createStore(name, defaultValue);
  } catch (error) {
    console.error(`[appStores] Error creating store "${name}":`, error);
    throw error;
  }
};

export const selectedNodeStore = createStoreSafe('selectedNodeStore', null);
export const cameraOptionsStore = createStoreSafe('cameraOptions', null);
export const kitOfPartsSceneRotationStore = createStoreSafe('kitOfParts_sceneRotation', false);
export const livingContinuitySceneRotationStore = createStoreSafe('livingContinuity_sceneRotation', false);
export const walkThroughActiveStore = createStoreSafe('walkThroughActive', false);
export const selectedObjectIdStore = createStoreSafe('selectedObjectId', null);
export const objectRotationTriggerStore = createStoreSafe('objectRotationTrigger', 0);
export const objectPositionResetTriggerStore = createStoreSafe('objectPositionResetTrigger', 0);
export const gridDimensionsStore = createStoreSafe('gridDimensions', { width: 144, height: 192, cellSize: 12, centerX: 0, centerZ: 0 });

export const kitOfPartsObjectsStateStore = createStoreSafe('kitOfParts_objectsState', false);
export const kitOfPartsClickbathroom2Store = createStoreSafe('kitOfParts_clickbathroom2', false);
export const kitOfPartsBoxbedStateStore = createStoreSafe('kitOfParts_boxbedState', false);
export const kitOfPartsFrontStateStore = createStoreSafe('kitOfParts_frontState', false);
export const kitOfPartsKitchenStateStore = createStoreSafe('kitOfParts_kitchenState', false);
export const kitOfPartsK2StateStore = createStoreSafe('kitOfParts_k2State', false);
export const kitOfPartsS1StateStore = createStoreSafe('kitOfParts_s1State', false);
export const kitOfPartsSt1StateStore = createStoreSafe('kitOfParts_st1State', false);
export const kitOfPartsSt2StateStore = createStoreSafe('kitOfParts_st2State', false);
export const kitOfPartsStairsStateStore = createStoreSafe('kitOfParts_stairsState', false);
export const kitOfPartsCameraStateStore = createStoreSafe('kitOfParts_cameraState', false);
export const kitOfPartsCaptureModeStore = createStoreSafe('kitOfParts_captureMode', false);
export const kitOfPartsCaptureModalOpenStore = createStoreSafe('kitOfParts_captureModalOpen', false);
export const kitOfPartsCachedImageDataUrlStore = createStoreSafe('kitOfParts_cachedImageDataUrl', null);

export const clickbathroom2Store = createStoreSafe('clickbathroom2', false);
export const boxbedStateStore = createStoreSafe('boxbedState', false);
export const frontStateStore = createStoreSafe('frontState', false);
export const kitchenStateStore = createStoreSafe('kitchenState', false);
export const k2StateStore = createStoreSafe('k2State', false);
export const s1StateStore = createStoreSafe('s1State', false);
export const st1StateStore = createStoreSafe('st1State', false);
export const cameraStateStore = createStoreSafe('cameraState', false);

export const highlightedNodesStore = createStoreSafe('highlightedNodesStore', []);
export const secondaryHighlightedArticlesStore = createStoreSafe('secondaryHighlightedArticlesStore', []);
export const elementOpacityStore = createStoreSafe('elementOpacityStore', {});
export const connectionLinesVisibilityStore = createStoreSafe('connectionLinesVisibilityStore', true);
export const cameraInteractionStore = createStoreSafe('cameraInteractionStore', false);
export const loadingStateStore = createStoreSafe('loadingState', {
  nodesLoaded: 0,
  totalNodes: 0,
  isLoading: true,
  nodesVisible: [],
});
export const adaptStore = createStoreSafe('adapt', false);

export const handleOpenStore = createStoreSafe('handleOpen', false);
export const closeCloseUpVarStore = createStoreSafe('closeCloseUpVar', false);
export const handleTitleBoxStore = createStoreSafe('handleTitleBox', false);
export const clickedStore = createStoreSafe('clicked', false);
export const handleClicksStore = createStoreSafe('handleClicks', 0);
export const keyWordOneStore = createStoreSafe('keyWordOne', true);
export const keyWordTwoStore = createStoreSafe('keyWordTwo', true);
export const keyWordTreeStore = createStoreSafe('keyWordTree', true);
export const keyWordFourStore = createStoreSafe('keyWordFour', false);
export const keyWordFiveStore = createStoreSafe('keyWordFive', false);

const articleStores = {};
const glossaryStores = {};

for (let i = 1; i <= 26; i++) {
  const storeName = `A${i}Store`;
  articleStores[storeName] = createStoreSafe(storeName, false);
}

for (let i = 1; i <= 54; i++) {
  const storeName = `G${i}Store`;
  glossaryStores[storeName] = createStoreSafe(storeName, false);
}

export { articleStores, glossaryStores };

if (typeof window !== 'undefined') {
  console.log('[appStores] All stores initialized successfully');
}
