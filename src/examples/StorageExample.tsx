/* eslint-disable react-hooks/set-state-in-effect */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';
import {storage, StorageUtils, createStorage} from '../utils/storage';

interface User {
  id: string;
  name: string;
  email: string;
}

export function StorageExample() {
  const [stringValue, setStringValue] = useState<string | undefined>();
  const [numberValue, setNumberValue] = useState<number | undefined>();
  const [booleanValue, setBooleanValue] = useState<boolean | undefined>();
  const [objectValue, setObjectValue] = useState<User | undefined>();
  const [arrayValue, setArrayValue] = useState<string[] | undefined>();
  const [allKeys, setAllKeys] = useState<string[]>([]);

  // Define loadAllValues before using it
  const loadAllValues = () => {
    setStringValue(storage.getString('example_string'));
    setNumberValue(storage.getNumber('example_number'));
    setBooleanValue(storage.getBoolean('example_boolean'));
    setObjectValue(storage.getObject<User>('example_object'));
    setArrayValue(storage.getArray<string>('example_array'));
    setAllKeys(storage.getAllKeys());
  };

  // Load values on mount
  useEffect(() => {
    setStringValue(storage.getString('example_string'));
    setNumberValue(storage.getNumber('example_number'));
    setBooleanValue(storage.getBoolean('example_boolean'));
    setObjectValue(storage.getObject<User>('example_object'));
    setArrayValue(storage.getArray<string>('example_array'));
    setAllKeys(storage.getAllKeys());
  }, []);

  // ==================== String Example ====================
  const saveString = () => {
    storage.setString('example_string', 'Hello MMKV!');
    loadAllValues();
  };

  // ==================== Number Example ====================
  const saveNumber = () => {
    storage.setNumber('example_number', 42);
    loadAllValues();
  };

  // ==================== Boolean Example ====================
  const saveBoolean = () => {
    storage.setBoolean('example_boolean', true);
    loadAllValues();
  };

  // ==================== Object Example ====================
  const saveObject = () => {
    const user: User = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
    };
    storage.setObject('example_object', user);
    loadAllValues();
  };

  // ==================== Array Example ====================
  const saveArray = () => {
    const fruits = ['Apple', 'Banana', 'Orange'];
    storage.setArray('example_array', fruits);
    loadAllValues();
  };

  // ==================== Utility Examples ====================
  const checkExists = () => {
    const exists = storage.contains('example_string');
    Alert.alert('Key Exists', `Key exists: ${exists}`);
  };

  const removeKey = () => {
    storage.remove('example_string');
    loadAllValues();
  };

  const clearAllData = () => {
    storage.clearAll();
    loadAllValues();
  };

  const getStorageSize = () => {
    const size = storage.getSize();
    Alert.alert('Storage Size', `Storage size: ${size} bytes`);
  };

  // ==================== Using StorageUtils (convenience methods) ====================
  const useStorageUtils = () => {
    StorageUtils.setString('utils_example', 'Using StorageUtils!');
    const value = StorageUtils.getString('utils_example');
    Alert.alert('StorageUtils', `StorageUtils value: ${value}`);
    loadAllValues();
  };

  // ==================== Using Custom Storage Instance ====================
  const useCustomStorage = () => {
    const userStorage = createStorage('user-data');
    userStorage.setString('username', 'custom_user');
    const username = userStorage.getString('username');
    Alert.alert('Custom Storage', `Custom storage value: ${username}`);
  };

  // ==================== Listener Example ====================
  const addListener = () => {
    const listener = storage.addOnValueChangedListener(key => {
      console.log(`Value changed for key: ${key}`);
      Alert.alert('Value Changed', `Value changed for key: ${key}`);
    });

    // Store listener to remove later
    setTimeout(() => {
      listener.remove();
      Alert.alert('Listener', 'Listener removed after 10 seconds');
    }, 10000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MMKV Storage Examples</Text>

      {/* String Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>String</Text>
        <Button title="Save String" onPress={saveString} />
        <Text style={styles.value}>Value: {stringValue || 'Not set'}</Text>
      </View>

      {/* Number Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Number</Text>
        <Button title="Save Number" onPress={saveNumber} />
        <Text style={styles.value}>
          Value: {numberValue !== undefined ? numberValue : 'Not set'}
        </Text>
      </View>

      {/* Boolean Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Boolean</Text>
        <Button title="Save Boolean" onPress={saveBoolean} />
        <Text style={styles.value}>
          Value: {booleanValue !== undefined ? String(booleanValue) : 'Not set'}
        </Text>
      </View>

      {/* Object Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Object</Text>
        <Button title="Save Object" onPress={saveObject} />
        <Text style={styles.value}>
          Value: {objectValue ? JSON.stringify(objectValue, null, 2) : 'Not set'}
        </Text>
      </View>

      {/* Array Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Array</Text>
        <Button title="Save Array" onPress={saveArray} />
        <Text style={styles.value}>
          Value: {arrayValue ? JSON.stringify(arrayValue) : 'Not set'}
        </Text>
      </View>

      {/* Utility Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Utility Methods</Text>
        <Button title="Check Key Exists" onPress={checkExists} />
        <Button title="Remove String Key" onPress={removeKey} />
        <Button title="Get Storage Size" onPress={getStorageSize} />
        <Button title="Clear All Data" onPress={clearAllData} color="red" />
      </View>

      {/* Advanced Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Advanced</Text>
        <Button title="Use StorageUtils" onPress={useStorageUtils} />
        <Button title="Use Custom Storage" onPress={useCustomStorage} />
        <Button title="Add Listener (10s)" onPress={addListener} />
      </View>

      {/* All Keys */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Keys ({allKeys.length})</Text>
        {allKeys.map(key => (
          <Text key={key} style={styles.keyItem}>
            • {key}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  value: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    fontFamily: 'monospace',
  },
  keyItem: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
});
