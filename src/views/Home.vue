<template>
  <div class="cursor-container" ref="cursor">
    <div class="cursor" v-bind:class="{ cursorActive: hover }"></div>
  </div>
  <div class="boarder-container" ref="boarder">
    <div class="cursor-boarder" v-bind:class="{ boarderActive: hover }"></div>
  </div>

  <div class="home">
    <div class="home-section">
      <div class="name-section">
        <h1 class="name">
          <span class="name-one">OLIVER WILCOX</span>
          <span class="name-two"> DEVELOPER</span>
          <span class="name-three"> AND DESIGNER</span>
        </h1>
        <p class="place">
          My goal is to use creativity, abstraction, minimalism and motion
          deisgn with functionality. I want to create a seamless joutnry for the
          websites I make, showing a story and brand image.
        </p>
        <p
          class="in-touch-home"
          v-on:mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <link rel="stylesheet" href="" class="" />Lets get in touch
        </p>
      </div>
    </div>

    <div class="section-part">
      <div class="shape"></div>
      <p class="project-part">projects</p>
      <p class="section-text-part">section 01</p>
    </div>

    <Projects v-on:mouseenter="hover = true" @mouseleave="hover = false" />

    <div class="line-remove"></div>

    <p class="view-designs">View design projects</p>
    <About />
    <div class="designer-line"></div>
    <div class="about-section">
      <p class="about-text">About Me</p>
      <p class="about-section-text">Section 02</p>
    </div>
    <p class="about-me">
      I am a 21 year old developer and designer based in Brighton, England. I am
      a self taught developer and designer and have been developing and desiging
      for 3 years. I am always trying to learn and improve.
    </p>

    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src

import Projects from "../components/Projects.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Home",
  components: {
    Projects,
    About,
    Contact,
  },
  data: () => ({
    hover: false,
    works: [],
  }),
  emits: ["mouseenter"],
  mounted() {
    const cursor = this.$refs.cursor;
    const boarder = this.$refs.boarder;
    let currentX = 0;
    let currentY = 0;
    let currentYBoarder = 0;
    let currentXBoarder = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.15;
    let speedBoader = 0.075;
    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      currentXBoarder += (aimX - currentXBoarder) * speedBoader;
      currentYBoarder += (aimY - currentYBoarder) * speedBoader;
      cursor.style.left = currentX + -15 + "px";
      cursor.style.top = currentY + -15 + "px";
      boarder.style.left = currentXBoarder + -10 + "px";
      boarder.style.top = currentYBoarder + -10 + "px";
      requestAnimationFrame(animate);
    };
    animate();
    document.addEventListener("mousemove", function (event) {
      aimX = event.clientX;
      aimY = event.clientY;
    });

    ScrollTrigger.create({
      trigger: ".project-text",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isProjectTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });

    ScrollTrigger.create({
      trigger: ".project-text-circ",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isProjectCircActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
    gsap.to(".sliding-one", {
      scrollTrigger: {
        start: () => "top " + window.innerHeight * 1,

        trigger: ".sliding-one",
        scrub: 1,
      },

      x: -300,
    });
    gsap.to(".sliding-two", {
      scrollTrigger: {
        start: () => "top " + window.innerHeight * 1,

        trigger: ".sliding-two",
        scrub: 1,
      },

      x: 300,
    });
  },
};
</script>

<style scoped>
.cursor-container {
  position: fixed;
  z-index: +100;
  width: 5vw;
  height: 5vw;
  pointer-events: none;
}

.boarder-container {
  position: fixed;
  z-index: +100;
  width: 5vw;
  height: 5vw;
  pointer-events: none;
}

.cursor-boarder {
  position: absolute;
  width: 0vw;
  height: 0vw;
  border-radius: 50%;
  left: 0.5vw;
  top: 0.5vw;
  opacity: 0;
  transition: 0.5s;
  border: 0.07vw solid;

  border-color: rgb(103, 118, 169);
}

.boarderActive {
  width: 5vw;
  height: 5vw;
  left: -2vw;
  top: -2vw;
  opacity: 1;
}

.cursor {
  position: absolute;
  background: rgb(103, 118, 169);
  height: 1.75vw;
  width: 1.75vw;

  border-radius: 50%;

  pointer-events: none;
  transition: 0.3s;
}
.cursorActive {
  transform: scale(0.25);
}
@media (max-aspect-ratio: 200/200) {
  .boarder-container {
    display: none;
  }
  .cursor-container {
    display: none;
  }
}
.home {
  margin-left: 0;
  width: 100vw;
}
.home-section {
  width: 100vw;
  height: 100vh;
  margin-top: 0vw;
  top: 0;
  padding: 0;
}
.name {
  position: relative;

  margin-top: 0;
  font-size: 8vw;
  text-align: left;

  pointer-events: none;
  text-transform: uppercase;
  font-weight: normal;
  line-height: 8vw;
}
.name-section {
  width: 60vw;
  background: none;
  position: absolute;
  margin-top: 52vh;
  transform: translate(-50%, -50%);
  margin-left: 50vw;
  z-index: +2;
}
.name span {
  display: block;
}
.name-one,
.name-three {
  margin-left: 5vw;
}

.name-two {
  margin-left: 0vw;
}
.place {
  margin-top: -5vw;
  font-size: 1vw;

  text-align: left;
  pointer-events: none;
  text-transform: none;
  font-family: sk-modernist-bold;
  line-height: 1.5vw;
  width: 35vw;
  margin-left: 5vw;
}
.in-touch-home {
  text-align: left;
  margin-left: 5vw;
  font-size: 1vw;
  width: 8vw;
  margin-top: 2vw;
  text-decoration: underline;

  font-family: sk-modernist-bold;
  cursor: pointer;
}

.section-part {
  margin-top: -4.5vw;
  width: 100vw;
  height: 1.5vw;
}
.section-part p {
  position: absolute;
  font-family: sk-modernist-bold;

  text-transform: capitalize;
  font-size: 1vw;
}

.about-section p {
  position: absolute;
  font-family: sk-modernist-bold;

  text-transform: capitalize;
  font-size: 1vw;
}

.about-me {
  position: absolute;
  font-family: sk-modernist;
  font-weight: normal;
  text-transform: capitalize;
  font-size: 1vw;
  text-align: left;
}

.project-part {
  left: 11.8vw;
}
.section-text-part {
  right: 3vw;
}
.line-remove {
  position: relative;
  background: #e9e9e9;
  width: 76vw;
  height: 3px;
  z-index: +10;
  margin: auto;
  margin-top: 2.8vw;
}

.view-designs {
  position: relative;
  font-family: sk-modernist;
  text-align: right;
  font-size: 1vw;
  color: #000000;
  margin-top: -2vw;
  text-decoration: underline;
  margin-right: 12vw;
}

.designer-line {
  position: relative;
  margin: auto;
  margin-top: -1vw;
  width: 76vw;
  height: 1px;
  background: black;
}

.about-section {
  position: relative;
  width: 76vw;
  height: 6vw;
  background: none;
  margin: auto;
  margin-top: 1vw;
}
.about-section p {
  font-size: 1vw;
  margin-top: 1vw;
}
.about-section-text {
  right: 0;
  text-align: right;
}
.about-me {
  font-size: 1.5vw;
  margin-top: -5.2vw;
  width: 55vw;
  left: 22.5vw;
}

@media screen and (max-width: 700px) {
  .home {
  }
  .home-section {
    position: relative;
    margin-left: 0;
    margin-top: 0;
    width: 0;
    height: 0;
    left: 0;
  }
  .name-section {
    position: relative;
    margin-left: 0;
    margin-top: 0;
    width: 0;
    left: 0;

    transform: none;
  }

  .name {
    position: relative;
    font-size: 11.5vw;
    line-height: 11.5vw;
    width: 92vw;
    margin-left: 4vw;

    margin-top: 30vw;
    transform: none;
  }
  .name-one {
    margin-left: 0;
  }
  .name-two {
    margin-left: 18vw;
  }
  .name-three {
    margin-left: 18vw;
  }

  .place {
    margin-top: -5vw;
    font-size: 4vw;
    line-height: 5vw;
    width: 80vw;
    font-family: sk-modernist;
    font-weight: normal;
  }

  .in-touch-home {
    font-size: 3.8vw;
    width: 50vw;

    margin-top: 8vw;
  }

  .section-part {
    position: relative;
    margin-top: 100vw;
  }
  .section-part p {
    font-size: 3.5vw;
    margin-top: -6vw;
  }
  .about-section {
    position: relative;
    width: 92vw;
    height: 6vw;
    background: none;
    margin: auto;
    margin-top: 3vw;
  }
  .about-section p {
    font-size: 3.5vw;
    margin-top: 1vw;
  }
  .about-section-text {
    right: 0;
    text-align: right;
  }
  .about-me {
    font-size: 4.5vw;
    margin-top: 6vw;
    width: 92vw;
    left: 4vw;
  }
  .project-part {
    left: 15vw;
  }
  .section-text-part {
    right: 5vw;
  }
  .line-remove {
    width: 92vw;
    height: 5px;
    margin-top: 2.5vw;
  }
  .view-designs {
    position: relative;
    font-family: sk-modernist;
    text-align: right;
    font-size: 3vw;
    color: #000000;
    margin-top: 1vw;
    text-decoration: underline;
    margin-right: 5vw;
  }
  .designer-line {
    position: relative;
    margin: auto;
    margin-top: -14vw;
    width: 92vw;
    height: 1px;
    background: black;
  }
}

@keyframes inner {
  0% {
    margin-top: 18vw;
  }
  100% {
    margin-top: 0;
  }
}

@keyframes bio {
  0% {
    top: 4vw;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

@keyframes bio-top {
  0% {
    margin-top: 4vw;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}
</style>
