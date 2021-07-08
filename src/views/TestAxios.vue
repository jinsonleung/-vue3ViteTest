<template>
    
  <div>==Axios+Mock==</div>
  <el-form>
    <el-form-item>
      <el-button type="primary" @click="getUserInfo">Axios+get请求</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue";
import "../mock/mockServer";

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
    return {
      refData,
      getUserInfo,
    };
  },
});
</script>
<style scoped></style>
