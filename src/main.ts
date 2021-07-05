/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:20:42
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 12:19:30
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store';


const app = createApp(App);
app.use(router).use(ElementPlus).use(store);
app.mount('#app');
