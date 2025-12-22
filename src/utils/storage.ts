import {createMMKV, MMKV} from 'react-native-mmkv';

/**
 * MMKV Storage Utility Class
 * Provides a type-safe wrapper around react-native-mmkv with support for all data types
 */
class MMKVStorage {
  private storage: MMKV;

  constructor(id?: string) {
    this.storage = createMMKV(id ? {id} : undefined);
  }

  // ==================== String Methods ====================

  /**
   * Set a string value
   */
  setString(key: string, value: string): void {
    this.storage.set(key, value);
  }

  /**
   * Get a string value
   */
  getString(key: string): string | undefined {
    return this.storage.getString(key);
  }

  // ==================== Number Methods ====================

  /**
   * Set a number value
   */
  setNumber(key: string, value: number): void {
    this.storage.set(key, value);
  }

  /**
   * Get a number value
   */
  getNumber(key: string): number | undefined {
    return this.storage.getNumber(key);
  }

  // ==================== Boolean Methods ====================

  /**
   * Set a boolean value
   */
  setBoolean(key: string, value: boolean): void {
    this.storage.set(key, value);
  }

  /**
   * Get a boolean value
   */
  getBoolean(key: string): boolean | undefined {
    return this.storage.getBoolean(key);
  }

  // ==================== Object Methods ====================

  /**
   * Set an object (will be JSON stringified)
   */
  setObject<T>(key: string, value: T): void {
    this.storage.set(key, JSON.stringify(value));
  }

  /**
   * Get an object (will be JSON parsed)
   */
  getObject<T>(key: string): T | undefined {
    const value = this.storage.getString(key);
    if (!value) return undefined;

    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`Error parsing JSON for key "${key}":`, error);
      return undefined;
    }
  }

  // ==================== Array Methods ====================

  /**
   * Set an array (will be JSON stringified)
   */
  setArray<T>(key: string, value: T[]): void {
    this.storage.set(key, JSON.stringify(value));
  }

  /**
   * Get an array (will be JSON parsed)
   */
  getArray<T>(key: string): T[] | undefined {
    const value = this.storage.getString(key);
    if (!value) return undefined;

    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : undefined;
    } catch (error) {
      console.error(`Error parsing array for key "${key}":`, error);
      return undefined;
    }
  }

  // ==================== Buffer Methods ====================

  /**
   * Set a buffer value
   */
  setBuffer(key: string, value: ArrayBuffer): void {
    this.storage.set(key, value);
  }

  /**
   * Get a buffer value
   */
  getBuffer(key: string): ArrayBuffer | undefined {
    return this.storage.getBuffer(key);
  }

  // ==================== Utility Methods ====================

  /**
   * Check if a key exists
   */
  contains(key: string): boolean {
    return this.storage.contains(key);
  }

  /**
   * Remove a key
   */
  remove(key: string): boolean {
    return this.storage.remove(key);
  }

  /**
   * Get all keys
   */
  getAllKeys(): string[] {
    return this.storage.getAllKeys();
  }

  /**
   * Clear all data
   */
  clearAll(): void {
    this.storage.clearAll();
  }

  /**
   * Get storage size in bytes
   */
  getSize(): number {
    return this.storage.size;
  }

  /**
   * Trim storage to reduce memory usage
   */
  trim(): void {
    this.storage.trim();
  }

  /**
   * Add a listener for value changes
   */
  addOnValueChangedListener(
    callback: (key: string) => void,
  ): {remove: () => void} {
    return this.storage.addOnValueChangedListener(callback);
  }

  /**
   * Recrypt the storage with a new encryption key
   */
  recrypt(encryptionKey?: string): void {
    this.storage.recrypt(encryptionKey);
  }

  /**
   * Get the underlying MMKV instance (for advanced usage)
   */
  getInstance(): MMKV {
    return this.storage;
  }
}

// ==================== Default Instance ====================

/**
 * Default storage instance
 */
export const storage = new MMKVStorage();

/**
 * Create a new storage instance with a custom ID
 * Useful for separating different types of data
 */
export const createStorage = (id: string): MMKVStorage => {
  return new MMKVStorage(id);
};

/**
 * Export the class for custom instances
 */
export {MMKVStorage};

// ==================== Convenience Exports ====================

/**
 * Quick access methods using the default instance
 */
export const StorageUtils = {
  // String
  setString: (key: string, value: string) => storage.setString(key, value),
  getString: (key: string) => storage.getString(key),

  // Number
  setNumber: (key: string, value: number) => storage.setNumber(key, value),
  getNumber: (key: string) => storage.getNumber(key),

  // Boolean
  setBoolean: (key: string, value: boolean) =>
    storage.setBoolean(key, value),
  getBoolean: (key: string) => storage.getBoolean(key),

  // Object
  setObject: <T,>(key: string, value: T) => storage.setObject(key, value),
  getObject: <T,>(key: string) => storage.getObject<T>(key),

  // Array
  setArray: <T,>(key: string, value: T[]) => storage.setArray(key, value),
  getArray: <T,>(key: string) => storage.getArray<T>(key),

  // Buffer
  setBuffer: (key: string, value: ArrayBuffer) =>
    storage.setBuffer(key, value),
  getBuffer: (key: string) => storage.getBuffer(key),

  // Utility
  contains: (key: string) => storage.contains(key),
  remove: (key: string) => storage.remove(key),
  getAllKeys: () => storage.getAllKeys(),
  clearAll: () => storage.clearAll(),
  getSize: () => storage.getSize(),
  trim: () => storage.trim(),
};
