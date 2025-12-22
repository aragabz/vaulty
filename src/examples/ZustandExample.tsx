import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useCounterStore, useAuthStore, useThemeStore} from '../store';

export const ZustandExample = () => {
  // Counter store
  const {count, increment, decrement, reset} = useCounterStore();

  // Auth store
  const {user, isAuthenticated, login, logout} = useAuthStore();

  // Theme store
  const {theme, toggleTheme} = useThemeStore();

  const handleLogin = () => {
    login({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  return (
    <View style={styles.container}>
      {/* Counter Example */}
      <View style={styles.section}>
        <Text style={styles.title}>Counter Store</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Auth Example */}
      <View style={styles.section}>
        <Text style={styles.title}>Auth Store</Text>
        {isAuthenticated ? (
          <>
            <Text style={styles.text}>Welcome, {user?.name}!</Text>
            <Text style={styles.text}>{user?.email}</Text>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.text}>Not logged in</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Theme Example */}
      <View style={styles.section}>
        <Text style={styles.title}>Theme Store (Persisted)</Text>
        <Text style={styles.text}>Current theme: {theme}</Text>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonText}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#3b82f6',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
