import axios from "axios"
import { ElMessageBox, ElNotification } from "element-plus"
import store from "../../store"
import baseUrl from "./evn"
import Config from "./config"

/** @type {*}
 * 创建一个axios实例
*/
const http = axios.create({
    baseURL: baseUrl,
    timeout: Config.timeout,
});

http.interceptors.request.use(config=>{
    if
    return config;
})



