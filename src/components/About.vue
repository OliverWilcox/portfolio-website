<template>
  <div class="about" id="about">
    <h1
      class="designer-title"
      v-bind:class="{ designerTitleActive: isDesignerTitleActive }"
    >
      DESIGNER DEVELOPER DESIGNER
    </h1>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "About",
  components: {},
  data: () => ({
    isAboutTitleActive: false,
    isAboutBioActive: false,
    isAboutCircActive: false,
    isDesignerTitleActive: false,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".about-text",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".about-bio",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutBioActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    ScrollTrigger.create({
      trigger: ".about-text-circ",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isAboutCircActive = true),
      start: () => "top " + window.innerHeight * 1,
    });

    gsap.to(".designer-title", {
      scrollTrigger: {
        start: () => "top " + window.innerHeight * 1,

        trigger: ".designer-title",
        scrub: 1,
      },

      x: -600,
    });
    gsap.to(".developer-title", {
      scrollTrigger: {
        start: () => "top " + window.innerHeight * 1,

        trigger: ".developer-title",
        scrub: 1,
      },

      x: 600,
    });
    /*
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about-text",
        scrub: 0.5,
      },
      marginTop: "-200px",
    });
      */
  },
};
</script>

<style scoped>
.about {
  position: relative;

  width: 100vw;
  padding-top: 0vw;
  background: none;
  padding-bottom: 00px;
  z-index: +20;
  margin-top: -10vw;
  overflow: hidden;
}

.designer-title {
  position: relative;
  font-size: 28vw;
  font-weight: normal;
  left: 25vw;
  white-space: nowrap;
}

.designerTitleActive {
  left: 10vw;
}
.developer-title {
  margin-top: -25vw;
  position: relative;
  font-size: 26vw;
  font-weight: normal;
  left: -180vw;
  white-space: nowrap;
}

@media screen and (min-width: 701px) {
  .about {
    margin-top: 3vw;
    background: none;
    height: 22vw;
  }
  .designer-title {
    left: 0vw;
    margin-top: 1vw;
    font-size: 16vw;
  }
}
</style>
