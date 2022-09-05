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

<style></style>
