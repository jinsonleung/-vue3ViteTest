import store from "../../store";
import axios from "axios";

class HttpRequest {
  baseURL: string;
  constructor(baseURL = "") {
    this.baseURL = baseURL;
    //this.pending = {}
  }
  getDefaultConfig() {
    return {
      baseURL: this.baseURL,
      header: {
        common: {
          Authorization: `Bear ${store.state.token}` || "",
          post: {
            "Content-Type": "application/json; charset=utf-8",
          },
        },
        timeout: 10 * 1000,
      },
    };
  }

  createAxiosInstance(options){
      const axiosInstance = axios.create();
      const newOptions = this.mergeOptions(this.getDefaultConfig(), options);
          // 调用拦截器
    this.interceptors(axiosInstance)
    // 返回实例
    return axiosInstance(newOptions)

  }

  mergeOptions (default, source) {
    if (typeof source !== 'object' || source == null) {
      return default
    }
    return Object.assign(default, source)

}
