<template>
  <div id="app">
    <Nav />
    <Cursor />
    <div id="scrollview"></div>
    <router-view />
  </div>
</template>
<script>
import Nav from "../src/components/nav.vue";
import Cursor from "../src/components/Cursor.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    Nav,
    Cursor,
  },
  mounted() {},
  methods: {},
};
</script>
<style>
@font-face {
  font-family: gallery-modern;
  src: url(gallerymodern-webfont.woff);
}
@font-face {
  font-family: sk-modernist;
  src: url(GeneralSans-Regular.woff);
}
@font-face {
  font-family: sk-modernist-bold;
  src: url(GeneralSans-Medium.woff);
}
body {
  margin: 0;
  padding: 0;
  background: #e9e9e9;
  scroll-behavior: smooth;
}
h1,
h2,
h3,
p {
  font-weight: normal;
}

#app {
  font-family: gallery-modern;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d1d1d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  top: 0;
  position: absolute;
}

html {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
</style>
