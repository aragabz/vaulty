import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';

export const KeyboardControllerExample = () => {
  return (
    <KeyboardProvider>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        bottomOffset={20}>
        <Text style={styles.title}>Keyboard Controller Example</Text>
        <Text style={styles.subtitle}>
          The keyboard will automatically adjust the view
        </Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          placeholderTextColor="#9ca3af"
        />
      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#111827',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
