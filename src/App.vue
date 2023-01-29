<template>
  <router-view />
</template>

<script>
//export default {
//  name: "App",
//};
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const scrollPageTo = (navEl) => {
      console.log(`#${navEl}`);
      let element = document.querySelector(`#${navEl}`);
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
    };

    return {
      scrollPageTo,
    };
  },
});
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
