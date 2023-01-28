<template>
  <nav>
    <button class="hamburger-icon" v-on:click="openLeftNav"></button>
    <LeftNav ref="leftNav" />
  </nav>
  <router-view />
</template>

<script>
import LeftNav from "./components/LeftNav.vue";

export default {
  name: "App",
  props: {
    msg: String,
  },
  components: {
    LeftNav,
  },
  methods: {
    openLeftNav() {
      this.$refs.leftNav.toggleNav();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
