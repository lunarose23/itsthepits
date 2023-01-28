<template>
  <div class="left-nav" v-bind:class="navClass">
    <!-- Left nav content here -->
  </div>
  <button class="hamburger-icon" v-on:click="toggleNav"></button>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    navClass() {
      return this.isOpen ? "open" : "";
    },
  },
};
</script>

<style>
.left-nav {
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  background-color: white;
  transition: left 0.3s ease-in-out;
}
.left-nav.open {
  left: 0;
}
</style>
