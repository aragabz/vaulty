/**
 * Utility exports
 * Centralized exports for all utility functions
 */

// Storage utilities
export {
  storage,
  StorageUtils,
  createStorage,
  MMKVStorage,
} from './storage';

// Flash message utilities
export {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
  showInfoMessage,
} from './flashMessage';

// Edge-to-edge utilities
export {
  enableEdgeToEdge,
  setDarkSystemBars,
  setLightSystemBars,
  setAutoSystemBars,
} from './edgeToEdge';
