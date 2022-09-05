<template>
  <div class="case-container" v-if="post">
    <div class="word-one">
      <div class="case-title">{{ post.caseTitleFull }}</div>
    </div>

    <div class="role">
      <div class="role-inner">
        {{ post.caseBio }}
      </div>
    </div>
    <div class="case-picture-one"></div>
    <p class="launch-project-case">In Progress</p>
    <div class="launch-line"></div>
    <div class="about-container-one">
      <h3 class="category">Category</h3>
      <p class="category-bio">{{ post.caseCategory }}</p>
      <h3 class="client">Client</h3>
      <h3 class="client-bio">{{ post.caseClient }}</h3>
      <h3 class="year">Year</h3>
      <p class="year-bio">{{ post.caseYear }}</p>
    </div>
    <h3 class="project-info-title">The Project</h3>
    <p class="project-info-bio">
      Relationship Ready is a dating and relationship coaching program. For the
      design we wanted to ensure a welcoming, meditative and relaxing experience
      for the user to express their emotion and feel comfortable. For this we
      used a color pallete which reflected the color pallete of a beach. I made
      sure to use very smooth and gentle animations for the text and other
      elements to capture the relaxing feeling.
    </p>
    <div class="case-picture-after-project-info"></div>
    <h3 class="section-two-title"></h3>

    <p class="section-two-bio"></p>

    <div class="none-for-now">
      <div class="section-three-pics">
        <div class="section-three-pic section-three-pic-one"></div>
        <div class="section-three-pic section-three-pic-two"></div>
        <div class="section-three-pic section-three-pic-three"></div>
      </div>
      <div class="case-picture-after-section-three"></div>
    </div>
    <router-link to="/Boardroom" style="color: inherit">
      <h1 class="next-project">NEXT PROJECT</h1>
    </router-link>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sanity from "../client";
const query = `*[slug.current == $slug] {
   _id,
   caseTitleFull,
   caseBio,
   caseCategory,
   caseYear,
   caseClient,
   caseAbout,
   slug
  }[0]
`;

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      post: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    var x = window.matchMedia("(min-width: 700px)");

    if (x.matches) {
      gsap.to(".img-one", {
        scrollTrigger: {
          trigger: ".case-picture-one",
          scrub: 0.1,

          start: () => "top " + window.innerHeight * 1,
        },
        top: "65%",
      });

      gsap.to(".img-branding", {
        scrollTrigger: {
          trigger: ".animation-pic-one",
          scrub: 0.1,
        },
        top: "70%",
      });

      gsap.to(".brand-one", {
        scrollTrigger: {
          trigger: ".section-two-pic-one",
          scrub: 0.1,
        },
        top: "60%",
      });

      gsap.to(".brand-two", {
        scrollTrigger: {
          trigger: ".section-two-pic-two",
          scrub: 0.1,
        },
        top: "60%",
      });

      gsap.to(".brand-three", {
        scrollTrigger: {
          trigger: ".section-two-pic-three",
          scrub: 0.1,
        },
        top: "60%",
      });
      gsap.to(".img-after-two", {
        scrollTrigger: {
          trigger: ".case-picture-after-section-two",
          scrub: 0.1,
        },
        top: "60%",
      });
    }
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
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
@media screen and (max-width: 700px) {
}
.case-container {
  text-align: left;
  font-family: sk-modernist;
}
.none-for-now {
  display: none;
}
.word-one {
  position: relative;
  font-weight: normal;

  margin-top: 25vh;
  line-height: 12vw;
  font-size: 4vw;

  overflow: hidden;
  height: 9vw;

  transform: translateY(-50%);
}
#scrollview {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
.word-two {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 0;
  line-height: 12vw;
  font-size: 7vw;
  height: 11vw;

  overflow: hidden;
  transform: translateY(-50%);
}
.case-title {
  animation: caseTitle 0.8s forwards;
  margin-top: 15vw;
  margin-left: 8vw;
}
.case-title-two {
  animation: caseTitle 0.8s forwards;
  animation-delay: 0.06s;
  margin-top: 15vw;
  margin-left: 5vw;
}
.role {
  position: relative;
  font-weight: normal;

  margin-top: 60px;
  font-family: sk-modernist;
  font-size: 8vw;
  line-height: 9vw;
  width: 82vw;

  transform: translateY(-50%);
  margin-left: 8vw;
}
.role-inner {
  margin-top: 10vw;
  animation: caseRole 0.8s forwards;
  animation-delay: 0.12s;
}
.case-picture-one {
  position: relative;
  width: 100vw;
  height: 65vw;
  background: rgb(197, 197, 197);
  margin-top: 80px;
  overflow: hidden;
}
.img-one {
  position: relative;
  width: 120%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.launch-project-case {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 50px;
  font-family: sk-modernist;
  font-size: 18px;
  text-decoration: underline;
  transform: translateY(-50%);
  cursor: pointer;
  text-align: center;
}
.launch-line {
  position: relative;
  width: 84vw;
  height: 1px;

  background: rgb(218, 218, 218);
  margin: auto;
  opacity: 1;
  margin-top: 30px;
}
.about-container-one {
  position: relative;
  width: 84vw;
  height: 100px;

  background: none;
  margin: auto;
  opacity: 1;
  margin-top: 35px;
  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
}
.category {
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
}
.category-bio {
  font-weight: normal;
  font-size: 16px;
  margin-top: -5px;
  opacity: 0.5;
}
.client {
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  margin-top: 25px;
}
.client-bio {
  font-weight: normal;
  font-size: 16px;
  margin-top: -5px;
  opacity: 0.5;
}
.year {
  position: absolute;
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  right: 0;
  top: 0;
  margin-top: 0;
}
.year-bio {
  position: absolute;
  font-weight: normal;
  font-size: 16px;
  line-height: 0;
  right: 0;
  top: 0;
  opacity: 0.5;
  margin-top: 25px;
}

.project-info-title {
  font-weight: normal;
  font-size: 18px;
  line-height: 0;
  margin-top: 80px;
  text-align: left;
  font-family: sk-modernist-bold;
  font-weight: normal;
  margin-left: 8vw;
}
.project-info-bio {
  font-weight: normal;
  font-size: 18px;
  margin-top: 40px;

  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
  margin-left: 8vw;
  width: 84vw;
}
.case-picture-after-project-info {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
}
.section-two-title {
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
  display: none;
  text-align: left;
  font-family: sk-modernist;
  font-weight: normal;
  margin-left: 8vw;
  width: 300px;
}
.section-two-bio {
  font-weight: normal;
  font-size: 19px;
  width: 88vw;
  margin-left: 6vw;
  text-align: left;
  margin-top: 0px;
  line-height: 25px;
  display: none;
  font-family: sk-modernist;
}
.animation-pic-one {
  position: relative;
  width: 100vw;
  height: 105vw;
  background: #fff7ee;
  margin-top: 150px;
  overflow: hidden;
}
.img-branding {
  position: relative;
  width: 190%;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.section-two-pic {
  margin-left: 0vw;
  width: 100vw;
  height: 128vw;
  background: none;
  margin-top: 20px;
  margin-left: 0vw;
  overflow: hidden;
}
.img-branding-pics {
  position: relative;
  width: 110%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.section-two-pic-one {
  margin-top: 150px;
}

.case-picture-after-section-two {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
  overflow: hidden;
}

.img-after-two {
  top: 50%;
  left: 50%;
  position: relative;
  width: 115%;
  transform: translate(-50%, -50%);
}

.section-three-pic {
  margin-left: 0vw;
  width: 100vw;
  height: 58vw;
  background: #fff7ee;
  margin-top: 20px;
  margin-left: 0vw;
}

.section-three-pic-one {
  margin-top: 150px;
}

.case-picture-after-section-three {
  width: 100vw;
  height: 60vw;
  background: #fff7ee;
  margin-top: 150px;
}

.next-project {
  position: relative;
  font-weight: normal;
  margin: auto;
  margin-top: 145px;
  line-height: 12vw;
  font-size: 11vw;
  margin-bottom: 120px;
  overflow: hidden;
  height: 11vw;
  transform: translateY(-50%);
  text-decoration: underline;
}

@keyframes caseTitle {
  0% {
    margin-top: 15vw;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes caseRole {
  0% {
    margin-top: 10vw;
  }
  100% {
    margin-top: 0;
  }
}
@media screen and (min-width: 701px) {
  .word-one {
    margin-top: 38vh;
    line-height: 7vw;
    font-size: 7vw;

    height: 7vw;
    transform: translateY(-50%);
  }
  .word-two {
    margin-top: 0;
    line-height: 6vw;
    font-size: 7vw;
    height: 7vw;

    transform: translateY(-50%);
  }
  .role {
    margin-top: 60px;
    font-family: sk-modernist;
    font-size: 1.5vw;
    height: 3vw;

    overflow: hidden;
    transform: translateY(-50%);
  }
  .case-picture-one {
    position: relative;
    width: 100vw;
    height: 55vw;
    background: none;
    margin-top: 130px;
  }
  .img-one {
    position: relative;
    width: 100%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }
  .case-picture-after-project-info {
    width: 87vw;
    margin-left: 6.5vw;
    height: 49vw;
  }
  .client {
    position: absolute;
    margin: 0;
    top: 0;
    left: 45%;
    font-size: 16px;
  }
  .client-bio {
    position: absolute;
    margin-top: 23px;
    top: 0;
    line-height: 0;
    left: 45%;
    font-size: 16px;
  }
  .year {
    font-size: 16px;
  }
  .year-bio {
    font-size: 16px;
  }
  .category {
    font-size: 16px;
    margin-top: -10px;
  }
  .category-bio {
    font-size: 16px;
  }
  .project-info-title {
    position: relative;
    left: calc(45vw - 170px);
    margin-top: 120px;
    transform: translateX(-50%);
    width: 37vw;
  }
  .project-info-bio {
    position: relative;
    left: calc(45vw + 120px);
    margin-top: -35px;
    font-size: 23px;
    top: 0;
    transform: translateX(-50%);
    width: 45vw;
  }

  .section-two-title {
    position: relative;
    font-weight: normal;
    font-size: 5.4vw;
    line-height: 5.4vw;
    display: none;
    text-align: left;
    margin-left: 12vw;
    width: 50vw;
    font-family: sk-modernist;
    font-weight: normal;
  }
  .section-two-bio {
    font-weight: normal;
    font-size: 22px;
    width: 60vw;
    margin-left: 10vw;
    text-align: left;
    line-height: 30px;
    margin-top: calc(50px - 60px);
    font-family: sk-modernist;
  }
  .section-two-pics {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(10vw - 40px);
    margin-top: 280px;
  }
  .section-two-pic {
    width: 38vw;
    height: 38vw;
    margin-left: 40px;
    margin-top: 100px;
    background: none;
  }
  .animation-pic-one {
    margin-top: 280px;
    background: none;
    height: 55vw;
  }
  .img-branding {
    position: relative;
    width: 100%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }

  .section-two-pic-one {
    margin-top: 00px;
    height: 52vw;
  }
  .section-two-pic-two {
    margin-top: 300px;
    height: 52vw;
  }
  .section-two-pic-three {
    margin-top: calc(-45px - 15vw);
    height: 52vw;
  }
  .img-branding-pics {
    position: relative;
    width: 120%;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }
  .case-picture-after-section-two {
    width: 87vw;
    margin-left: 6.5vw;
    margin-top: 300px;
    height: 49vw;
    background: blue;
  }
  .img-after-two {
    top: 20%;
    left: 50%;
    position: relative;
    width: 115%;
    transform: translate(-50%, -50%);
  }

  .next-project {
    margin-top: 280px;

    font-size: 5vw;
    margin-bottom: 160px;

    height: 10vw;
  }
}

.case-picture-after-project-info {
  display: none;
}

a {
  color: black;
}
</style>
