// TODO: REFACTORING

let defaultStorage: StorageType = "session";

type StorageType = "local" | "session";

type AvailableStorageType = Record<StorageType, Storage>;

const availableStorage: AvailableStorageType = {
  local: localStorage,
  session: sessionStorage,
};

export const storage = {
  setDefault(type: StorageType) {
    defaultStorage = type;
  },

  getItem(key: string) {
    return availableStorage[defaultStorage].getItem(key);
  },

  setItem(key: string, value: string) {
    availableStorage[defaultStorage].setItem(key, value);
  },

  removeItem(key: string) {
    availableStorage[defaultStorage].removeItem(key);
  },

  clear() {
    availableStorage[defaultStorage].clear();
  },

  getItemOther(type: StorageType, key: string) {
    return availableStorage[type].getItem(key);
  },

  setItemOther(type: StorageType, key: string, value: string) {
    availableStorage[type].setItem(key, value);
  },

  removeItemOther(type: StorageType, key: string) {
    availableStorage[type].removeItem(key);
  },
  clearOther(type: StorageType) {
    availableStorage[type].clear();
  },

  setItemAll(key: string, value: string) {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].setItem(key, value)
    );
  },

  removeItemAll(key: string) {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].removeItem(key)
    );
  },

  clearAll() {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].clear()
    );
  },
};
