<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 16:34:06
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 12:23:47
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
