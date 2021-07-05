<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:27:03
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 17:36:04
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\views\Login.vue
-->

<template>
  <div>==LOGIN PAGE==</div>
  <el-row>
    <el-button type="primary" @click="getAxios">通过axios发走Get请求</el-button>
  </el-row>
</template>

<script lang="ts">
import axios from "axios";
import { ref, defineComponent, onMounted, getCurrentInstance } from "vue";
import store from "../store";
import "../mock/mockServer";

export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0);
    const proxy = getCurrentInstance();
    onMounted(() => {
      console.log("count", store.state.count);
      store.commit("increment");
      console.log("count", store.state.count);
    });

    const getAxios = ()=>{
        axios.get("/info").then((res)=>{
            console.log(res.data.data.name);
        });
    }

    return {
      refData,
      getAxios,
    };
  },
});
</script>
<style>
</style>