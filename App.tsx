import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import FlashMessage from 'react-native-flash-message';
import BootSplash from 'react-native-bootsplash';
import {ErrorBoundary} from './src/components/ErrorBoundary';
import {enableEdgeToEdge} from './src/utils/edgeToEdge';
import {useThemeStore} from './src/store';

function AppContent() {
  const theme = useThemeStore(state => state.theme);

  useEffect(() => {
    enableEdgeToEdge();
    
    // Hide splash screen after app is ready
    const init = async () => {
      // Simulate app initialization (remove this in production)
      await new Promise(resolve => setTimeout(resolve, 1000));
      await BootSplash.hide({fade: true});
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Vaulty</Text>
        <Text style={styles.subtitle}>Your secure vault app</Text>
      </View>
    </View>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={styles.flex}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <AppContent />
            <FlashMessage position="top" />
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
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6b7280',
  },
});

export default App;
