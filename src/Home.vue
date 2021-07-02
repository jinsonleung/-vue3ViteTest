<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-02 17:43:25
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\Home.vue
-->

<template>
  <div>==HOME PAGE==</div>
</template>

<script lang='ts'>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0);
    return {
      refData
    };
  }
});
</script>
<style scoped>
</style>
