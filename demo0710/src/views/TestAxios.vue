<template>
    
  <div>==Axios+Mock==</div>
  <el-form>
    <el-form-item>
      <el-button type="primary" @click="getUserInfo">Axios+get请求</el-button> <br>
      <el-button type="primary" @click="getUserInfoByHttp">Axios二次封装get请求</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue";
import "../mock/mockServer";
import http from "../utils/http1/http";

export default defineComponent({
  name: "TestAxios",
  setup() {
    const refData = ref(0);
    const { proxy }: any = getCurrentInstance();
    const getUserInfo = () => {
      console.log(proxy);
      //使用全局axios方式
      proxy.$axios.get("/user/info").then((res:any)=>{
        console.log(res.data);
      });
    };
    const getUserInfoByHttp = ()=>{
      http.get("user/info").then((res:any)=>{
        console.log(res.data);
      })
    };
    return {
      refData,
      getUserInfo,
      getUserInfoByHttp,
    };
  },
});
</script>
<style scoped></style>
