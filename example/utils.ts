export const local_storage = {
  clear: () => {
    localStorage.clear();
  },
  remove_item: (key: string) => {
    localStorage.removeItem(key);
  },
  set_item: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  get_item: (key: string): string => localStorage.getItem(key) || "",
  get_length: () => localStorage.length,
  get_key: (index: number) => localStorage.key(index),
  format_item<T extends object>(key: string, initValue?: T): T {
    let obj = initValue || {};
    try {
      obj = JSON.parse(this.get_item(key));
    } catch (err) {
      console.log(err);
    }
    return <T>obj;
  },
};
