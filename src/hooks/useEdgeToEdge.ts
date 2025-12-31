import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * Hook to get safe area insets for edge-to-edge layouts
 * Returns insets for top, bottom, left, and right
 */
export const useEdgeToEdge = () => {
  const insets = useSafeAreaInsets();

  return {
    insets,
    // Helper values for common use cases
    top: insets.top,
    bottom: insets.bottom,
    left: insets.left,
    right: insets.right,
    // Combined horizontal and vertical
    horizontal: insets.left + insets.right,
    vertical: insets.top + insets.bottom,
  };
};
