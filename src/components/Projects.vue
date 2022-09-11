<template>
  <div class="cursor-img-container" ref="cursorOne">
    <img class="cursor-img" />
  </div>

  <div class="container" v-for="post in postItems" :key="post._id">
    <router-link
      :to="`/project-info/${post.slug.current}`"
      style="text-decoration: none; color: inherit"
    >
      <div
        class="projects-container"
        id="projects"
        v-on:mouseover="cursorOneFunc(), $emit('mouseenter', $event)"
        v-on:mouseleave="cursorOneFuncLeave(), $emit('mouseleave', $event)"
      >
        <h3 class="proj-num">{{ post.caseNum }}</h3>
        <h1 class="proj-name" ref="work">
          {{ post.caseTitleFull }}: {{ post.caseBio }}
        </h1>

        <h3 class="description" ref="description">
          {{}} MY GOAL IS TO USE CREATIVITY, ABSTRACTION, MINIMALISM AND MOTION
          DESIGN WITH FUNCTIONALITY. I WANT TO CREATE A SEAMLESS JOURNEY FOR THE
          WEBSITES I MAKE, SHOWING A STORY AND BRAND IMAGE.
        </h3>
      </div>
    </router-link>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sanity from "../client.js";
const queryPost = `* [_type == "post"] | order(caseNum asc){
  _id,
  caseTitleOne,
  caseTitleTwo,
  caseTitleFull,
  caseBio,
  caseDescription,
  slug,
  caseNum,
 
}[0...50]`;
gsap.registerPlugin(ScrollTrigger);
export default {
  emits: ["mouseenter", "mouseleave"],
  data: () => ({
    isWordOneInnerActive: false,
    isWordTwoInnerActive: false,
    cursorOne: false,
    postItems: [],
  }),

  created() {
    this.fetchDataPost();
  },
  updated() {
    const cursorHover = this.$refs.cursorOne;
    this.timeline();
    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.2;
    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      cursorHover.style.left = currentX + -7 + "px";
      cursorHover.style.top = currentY + -7 + "px";

      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", function (event) {
      aimX = event.clientX;
      aimY = event.clientY;
    });
    /*
    let projectWords = this.work.projname.split(" ");
   
    this.wordOne = projectWords[0];
    this.wordTwo = projectWords[1];
 */
  },
  methods: {
    timeline() {
      gsap.to(this.$refs.wordOneInner, {
        scrollTrigger: {
          trigger: this.$refs.wordOne,
          toggleActions: "play none none none",
        },
        top: 0,
        duration: 0.6,
      });

      gsap.to(this.$refs.wordTwoInner, {
        scrollTrigger: {
          trigger: this.$refs.wordOne,
          toggleActions: "play none none none",
        },
        top: 0,
        duration: 0.6,
        delay: 0.1,
      });
      gsap.to(this.$refs.number, {
        scrollTrigger: {
          trigger: this.$refs.wordOne,
          toggleActions: "play none none none",
        },
        top: 0,
        duration: 0.6,
      });
      gsap.to(this.$refs.description, {
        scrollTrigger: {
          trigger: this.$refs.wordOne,
          toggleActions: "play none none none",
        },
        top: 0,
        duration: 0.6,
      });
    },
    cursorOneFunc() {
      this.$refs.cursorOne.style.transform = "scale(12)";
      this.$refs.cursorOne.style.transition = "0.2s";
      this.$refs.cursorOne.style.opacity = "1";
    },
    cursorOneFuncLeave() {
      this.$refs.cursorOne.style.transform = "scale(1)";
      this.$refs.cursorOne.style.opacity = "0";
      this.$refs.cursorOne.style.transition = "0s";
    },
    fetchDataPost() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(queryPost).then(
        (postItems) => {
          this.loading = false;
          this.postItems = postItems;
          this.blocks = postItems.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style>
li a {
  text-decoration: none;
}

.projects-container {
  position: relative;

  width: 76vw;
  margin: auto;
  padding-bottom: 4vw;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  text-align: left;
  cursor: pointer;
  top: 3vw;
  margin-top: 2vw;
  font-weight: normal;
  border-bottom: 1px solid rgb(176, 176, 176);
}

.cursor-img-container {
  height: 1.5vw;
  width: 2.4vw;

  background: none;
  position: fixed;
  z-index: +100;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  background: none;
}

.cursor-img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 115%;
  transform: translate(-50%, -50%);
}

.proj-num {
  position: relative;
  font-family: sk-modernist;
  font-size: 1vw;
  margin: 0;
  font-weight: normal;
}

.proj-name {
  position: relative;

  width: 25vw;
  font-size: 1.8vw;
  left: 0vw;
  margin: 0;
  margin-left: -8vw;
  transition: 0.5s;
  z-index: +10;
  font-family: sk-modernist-bold;
}
.description {
  position: relative;

  width: 18vw;
  text-align: right;
  font-weight: normal;
  font-size: 1vw;
  margin: 0;
  margin-left: 7.5vw;
  font-family: sk-modernist;
  text-transform: lowercase;
  color: #6f7780;
  z-index: +10;
}

.cursor-img-container {
  display: none;
}
@media screen and (max-width: 700px) and (max-aspect-ratio: 5/6) {
  .projects-container {
    position: relative;
    width: 90vw;
    padding-bottom: 10vw;
    display: block;
    text-align: left;
    top: 3vw;
    margin-top: 6vw;
  }
  .proj-num {
    font-size: 4vw;
    margin-left: 0vw;
  }

  .proj-name {
    width: 92vw;
    font-size: 5vw;

    margin-left: 0vw;
    margin-top: 3vw;
  }
  .description {
    text-align: left;
    width: 92vw;
    font-size: 4vw;
    margin-top: 2vw;
    margin-left: 0vw;
    color: rgb(95, 95, 95);
    font-family: sk-modernist;
  }
}
</style>
