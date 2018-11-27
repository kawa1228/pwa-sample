import axios from "axios";

// axiosをプラグイン化してみる
const install = (Vue, config = {}) => {
  const client = axios.create(config);
  // Vue prototype $_axios
  Object.defineProperty(Vue.prototype, "$_axios", {
    get() {
      return client;
    }
  });
};
// install Object export
export default {
  install
};
