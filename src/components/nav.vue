<template>
  <div class="nav" id="nav">
    <div class="burger" v-on:click="isBurgerActive = !isBurgerActive">menu</div>
  </div>
  <div class="burger-menu" v-bind:class="{ menuActive: isBurgerActive }">
    <div
      class="nav-title-container home-title-container"
      v-bind:class="{ contActive: isBurgerActive }"
    >
      <h2
        class="nav-home nav-titles"
        v-on:click="homeNav()"
        v-bind:class="{ navHomeActive: isBurgerActive }"
      >
        Home
      </h2>
    </div>

    <div
      class="nav-title-container work-title-container"
      v-bind:class="{ contActive: isBurgerActive }"
    >
      <h2
        class="nav-work nav-titles"
        v-on:click="projNav()"
        v-bind:class="{ navWorkActive: isBurgerActive }"
      >
        Work
      </h2>
    </div>
    <div
      class="nav-title-container contact-title-container"
      v-bind:class="{ contActive: isBurgerActive }"
    >
      <h2
        class="nav-contact nav-titles"
        v-on:click="contactNav()"
        v-bind:class="{ navContactActive: isBurgerActive }"
      >
        Contact
      </h2>
    </div>

    <div class="nav-bio-container email-bio-container">
      <a
        class="nav-email nav-bios"
        href="https://github.com/OliverWilcox"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navBioActive: isBurgerActive }"
      >
        Email
      </a>
    </div>

    <div class="nav-bio-container dribbble-bio-container">
      <a
        class="nav-dribbble nav-bios"
        href="https://dribbble.com/NotTheRealOne"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navBioActive: isBurgerActive }"
      >
        Dribbble
      </a>
    </div>

    <div class="nav-bio-container github-bio-container">
      <a
        class="nav-github nav-bios"
        href="https://github.com/OliverWilcox"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navBioActive: isBurgerActive }"
      >
        Github
      </a>
    </div>
    <div class="nav-bio-container linkedin-bio-container">
      <a
        class="nav-linkedin nav-bios"
        href="https://dribbble.com/NotTheRealOne"
        v-on:click="isBurgerActive == false"
        v-bind:class="{ navBioActive: isBurgerActive }"
      >
        LinkedIn
      </a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "nav",
  props: {},
  data: () => ({
    isBurgerActive: false,
  }),
  mounted() {
    /*
    gsap.to(".line-1", {
      scrollTrigger: {
        trigger: ".trigger-1",
        toggleActions: "play none none reverse",
        scrub: 0.7,
      },
      background: "white",
    });
    gsap.to(".line-2", {
      scrollTrigger: {
        trigger: ".trigger-1",
        toggleActions: "play none none reverse",
        scrub: 0.7,
      },
      background: "#FAFAFA",
    });
    */
  },
  methods: {
    homeNav() {
      window.scrollTo(0, 0);
      this.isBurgerActive = false;
    },
    aboutNav() {
      const about = document.getElementById("about");
      about.scrollIntoView();
      this.isBurgerActive = false;
    },
    projNav() {
      const proj = document.getElementById("projects");
      proj.scrollIntoView();
      this.isBurgerActive = false;
    },
    contactNav() {
      const contact = document.getElementById("contact");
      contact.scrollIntoView();
      this.isBurgerActive = false;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  width: 100vw;
  z-index: +90;
}

.burger-menu {
  display: block;
}

.burger {
  position: absolute;
  right: 4.5vw;
  top: 5vw;
  font-size: 3.75vw;
  font-family: sk-modernist;
}

.nav {
  background: none;
  height: 80px;
}
.navs {
  display: none;
}
.burger-menu {
  position: fixed;
  background: #e9e9e9;
  width: 100vw;
  height: 100vh;
  top: 100%;

  z-index: +89;
  display: block;
}
.menuActive {
  animation: scale-up-ver-bottom 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
  top: 0;
  display: block;
}

.nav-titles {
  position: relative;
  margin-top: 70px;
  top: 0px;
  text-align: left;
  font-weight: normal;
  font-size: 50px;
  margin-left: 5px;
  font-family: sk-modernist;
}

.nav-title-container {
  position: relative;
  height: 70px;

  margin-top: 18px;
  margin-left: 25px;
  background: none;
  overflow: hidden;
}
.home-title-container {
  width: 160px;
  margin-top: 12vh;
}
.about-title-container {
  width: 190px;
}
.work-title-container {
  width: 220px;
}
.contact-title-container {
  width: 250px;
}

.nav-bio-container {
  position: relative;
  height: 25px;
  width: 200px;
  margin-top: 15px;
  margin-left: 25px;
  background: none;
  overflow: hidden;
}

.email-bio-container {
  margin-top: 30px;
}

.nav-bios {
  position: relative;
  margin-top: 0px;
  top: 50px;
  margin-left: 5px;
  text-align: left;
  font-weight: normal;
  font-size: 20px;
  display: block;
  text-decoration: none;
  font-family: sk-modernist;
}
.navHomeActive {
  margin-top: -10px;
  top: 0;
  transition: 0.8s;
  transition-delay: 0.5s;
}
.navAboutActive {
  top: 0;
  margin-top: -10px;
  transition: 0.8s;
  transition-delay: 0.55s;
}
.navWorkActive {
  top: 0;
  margin-top: -10px;
  transition: 0.8s;
  transition-delay: 0.6s;
}
.navContactActive {
  top: 0px;
  margin-top: -10px;
  transition: 0.8s;
  transition-delay: 0.65s;
}
.contActive {
  transition-delay: 0.65s;
  transition: 0.8s;
  border-bottom: 1px solid rgb(176, 176, 176);
}
.navBioActive {
  top: 0px;
  transition: 0.8s;
  transition-delay: 0.65s;
}
@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
}

@media screen and (min-width: 700px) {
  .burger-menu {
    display: block;
  }

  .burger {
    position: absolute;
    right: 3vw;
    top: 4vh;
    font-size: 1.1vw;

    font-family: sk-modernist-bold;
  }

  .nav-titles {
    font-size: 5vw;
    margin-left: 0.5vw;
  }

  .nav-title-container {
    height: 6.6vw;

    margin-top: 2.5vw;
    margin-left: 4vw;
  }

  .home-title-container {
    width: 16vw;
    margin-top: 8vh;
  }

  .about-title-container {
    width: 19vw;
  }
  .work-title-container {
    width: 22vw;
  }
  .contact-title-container {
    width: 25vw;
  }

  .navHomeActive {
    margin-top: -1.2vw;
  }
  .navAboutActive {
    margin-top: -1.2vw;
  }
  .navWorkActive {
    margin-top: -1.2vw;
  }
  .navContactActive {
    margin-top: -1.2vw;
  }
  .contActive {
    transition-delay: 0.65s;
    transition: 0.8s;
    border-bottom: 1px solid rgb(176, 176, 176);
  }

  .nav-bio-container {
    position: absolute;
    height: 2vw;
    width: 10vw;
    bottom: 4vh;
    text-align: right;
    right: 5vw;
    left: auto;
    margin-left: auto;
  }

  .linkedin-bio-container {
    margin-bottom: 6vh;
    right: -1vw;
  }

  .dribbble-bio-container {
    bottom: 4vh;
    right: -1vw;
  }

  .email-bio-container {
    bottom: 10vh;
    right: 5vw;
  }

  .nav-bios {
    top: 5vw;

    font-size: 1.2vw;
    display: block;
  }

  .navBioActive {
    top: 0px;
    transition: 0.8s;
    transition-delay: 0.65s;
  }
}
</style>
