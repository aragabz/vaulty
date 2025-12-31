import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import FlashMessage from 'react-native-flash-message';
// import BootSplash from 'react-native-bootsplash';
import {ErrorBoundary} from './src/components/ErrorBoundary';
import {ThemeProvider} from './src/components/ThemeProvider';
import {RootNavigator} from './src/navigation';
import {enableEdgeToEdge} from './src/utils/edgeToEdge';

function App() {
  useEffect(() => {
    enableEdgeToEdge();

    // Hide splash screen after app is ready
    const init = async () => {
      // Simulate app initialization (remove this in production)
      await new Promise(resolve => setTimeout(resolve, 1000));
      // await BootSplash.hide({fade: true});
    };

    init();
  }, []);

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={styles.flex}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <ThemeProvider>
              <StatusBar translucent backgroundColor="transparent" />
              <RootNavigator />
              <FlashMessage position="top" />
            </ThemeProvider>
          </KeyboardProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;

export default App;
