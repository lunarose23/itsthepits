<template>
  <div id="splash" class="splash"></div>
  <nav>
    <a class="top-nav-item" href="/" v-on:click="scrollPageTo('splash')"
      >Home
    </a>
    <a
      class="top-nav-item"
      href="/#catering"
      v-on:click="scrollPageTo('catering')"
      >Catering
    </a>
    <a class="top-nav-item" href="/#pickup" v-on:click="scrollPageTo('pickup')"
      >Pickup
    </a>
    <a
      class="top-nav-item"
      href="/#contact"
      v-on:click="scrollPageTo('contact')"
      >Contact
    </a>
  </nav>
  <div class="title set" data-anchor="home">
    <SplashScreen></SplashScreen>
  </div>
  <div id="catering" class="catering" data-anchor="catering">
    <LargeCatering></LargeCatering>
  </div>
  <div id="pickup" class="subscribe" data-anchor="subscribe">
    <SubscribeNow></SubscribeNow>
  </div>
  <div id="contact" class="contact" data-anchor="contact">
    <ContactMe></ContactMe>
  </div>
</template>

<script>
// @ is an alias to /src
import SplashScreen from "@/components/SplashScreen.vue";
import LargeCatering from "@/components/LargeCatering.vue";
import SubscribeNow from "@/components/SubscribeNow.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  name: "HomeView",
  components: {
    SplashScreen,
    LargeCatering,
    SubscribeNow,
    ContactMe,
  },
};
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

nav {
  position: fixed;
  top: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 100%;
  z-index: 20;
  background-color: rgb(30, 27, 27);
}

.top-nav-item {
  color: rgb(239, 157, 81);
  padding: 0.5em 1em;
  text-align: center;
  font-size: 1.3em;
  text-decoration: none;
}

.catering,
.subscribe,
.contact {
  background-color: #1e1b1b;
  color: antiquewhite;
}

h1 {
  margin: 0px;
  font-family: "Days One", sans-serif !important;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.8;
}

h2 {
  font-family: "Days One", sans-serif;
  font-size: 6vw;
  color: antiquewhite;
  margin-top: 1em;
}

h3 {
  margin: 40px 0 0;
  font-size: 4vw;
  color: rgb(239, 157, 81);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

p {
  color: antiquewhite;
}

.splash,
.title,
.subscribe,
.contact,
.catering {
  min-height: 100vh;
  min-width: 100vw;
  max-height: 200vh;
}

.title,
.catering,
.subscribe,
.contact {
  overflow-y: scroll;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.surround {
  padding: 1em;
}

.title {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(120%);
  display: flex !important;
  flex-direction: column;
  background-size: cover !important;
  display: block;
}

.items {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
}

.internal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: black;
}

.internal p {
  padding-right: 1em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: left;
}
</style>
