<template>
  <div>
    ==HOME PAGE==
    <input type="text" v-model="score" />
    <el-button type="primary" @click="increment">自增</el-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import store from "../store"

export default defineComponent({
  name: "Home",
  props: {},
  setup() {
    const score = ref(0);
    //const { proxy } = getCurrentInstance()
    const increment = () => {
      console.log("increment===");
      //使用vuex
      score.value = store.state.count++
    };
    return {
      score,
      increment,
    };
  },
});
</script>
<style></style>
