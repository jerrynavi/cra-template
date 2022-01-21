import localforage from "localforage";
import getFrom from "lodash/get";
import setAt from "lodash/set";
import { STORE_NAME } from "./constants";

const storage = () => {
  let _storage: LocalForage;
  let _store: Record<string, string | number | boolean>;

  _storage = localforage;

  initStore();

  async function initStore() {
    try {
      const exists = await _storage.getItem(STORE_NAME);
      if (!exists) {
        const data = {};
        await _storage.setItem(STORE_NAME, data);
      }
      _store = (await getFromStorage(STORE_NAME)) as any;
    } catch (error) {
      console.error(error);
    }
  }

  async function writeToStorage(): Promise<typeof _store | undefined> {
    try {
      return _storage.setItem(STORE_NAME, _store);
    } catch (error) {
      console.error(error);
    }
  }

  async function getFromStorage<T>(key: string): Promise<T | undefined> {
    try {
      const value = await _storage.getItem<T>(key);
      if (value == null) {
        throw new Error("Error: No data with the specified key exists.");
      }
      return value;
    } catch (error) {
      console.error(error);
    }
  }

  async function get(key: string): Promise<unknown> {
    if (!_store) {
      await initStore();
    }
    return getFrom(_store, key);
  }

  async function set(key: string, value: unknown) {
    try {
      _store = setAt(_store, key, value);
      return await writeToStorage();
    } catch (error) {
      console.error(error);
    }
  }

  async function clearStorage(): Promise<void> {
    await _storage.clear();
    _store = {};
  }

  return {
    get,
    set,
    clearStorage,
  };
};

export default storage();
