const STORAGE_KEY = "mall";

export default {
  setItem(key, value, module_name) {
    const storage = this.getStorage();
    if (module_name) {
      if (storage[module_name]) {
        storage[module_name][key] = value;
      } else {
        storage[module_name] = { [key]: value };
      }
    } else {
      storage[key] = value;
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  },
  getItem(key, module_name) {
    if (module_name) {
      let module = this.getItem(module_name);
      return module ? module[key] : null;
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  clear(key, module_name) {
    const storage = this.getStorage();
    if (module_name && storage[module_name]) {
      delete storage[module_name][key];
    } else {
      delete storage[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  },
};
