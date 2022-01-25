import getFrom from 'lodash/get';
import setAt from 'lodash/set';
import { STORE_NAME } from './constants';

const storage = () => {
  let _storage: Storage;
  let _store: Record<string, string | number | boolean> | undefined;

  _storage = localStorage;

  initStore();

  /**
   * @private
   */
  function initStore() {
    try {
      const exists = _storage.getItem(STORE_NAME);
      if (!exists) {
        const data = {};
        _storage.setItem(STORE_NAME, JSON.stringify(data));
      }
      _store = getFromLocalStorage(STORE_NAME);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @private
   */
  function writeToLocalStorage(): void {
    try {
      return _storage.setItem(STORE_NAME, JSON.stringify(_store));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @private
   * @param key string to lookup
   */
  function getFromLocalStorage(key: string): typeof _store | undefined {
    try {
      const value = _storage.getItem(key);
      if (value === null) {
        throw new Error('Error: No data with the specified key exists.');
      }
      return JSON.parse(value);
    } catch (error) {
      console.error(error);
    }
  }

  function get<T>(key: string): T | undefined {
    if (!_store) {
      initStore();
    }
    return getFrom(_store, key) as any;
  }

  async function set(key: string, value: unknown) {
    try {
      _store = setAt(_store as any, key, value);
      return writeToLocalStorage();
    } catch (error) {
      console.error(error);
    }
  }

  async function clearStorage(): Promise<void> {
    _storage.removeItem(STORE_NAME);
    _store = {};
  }

  return {
    get,
    set,
    clearStorage,
  };
};

export default storage();
