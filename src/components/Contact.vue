<template>
  <div class="contact-container" id="contact">
    <h1 class="contact-text">lets get in touch</h1>
    <div class="contact-socials-container">
      <p class="email-contact">email</p>
      <p class="dribbble-contact">dribbble</p>
      <p class="github-contact">github</p>
      <p class="linkedin-contact">linkedin</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Contact",
  components: {},
  data: () => ({
    social: [],
  }),
  mounted() {
    /*
    ScrollTrigger.create({
      trigger: ".contact-title",
      toggleActions: "play none none reverse",
      onEnter: () => (this.isContactTitleActive = true),
      start: () => "top " + window.innerHeight * 1,
    });
   */
  },
};
</script>

<style scoped>
.contact-text {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 8vw;
  margin-top: 8vw;
}
.contact-socials-container {
  width: 67vw;
  height: 4vw;

  margin: auto;
  margin-top: -3vw;
  margin-bottom: 5vw;
}

.contact-socials-container p {
  font-family: sk-modernist;
  text-transform: capitalize;
  display: flex;
  position: absolute;
  text-decoration: underline;
  font-size: 1.3vw;
}

.dribbble-contact {
  left: 36%;
}

.github-contact {
  right: 36%;
  text-align: right;
}

.linkedin-contact {
  text-align: right;
  right: 16.5%;
}

@media screen and (max-width: 700px) {
  .contact-text {
    margin-top: 55vw;
    font-size: 11.5vw;
    text-align: left;
    margin-left: 4vw;
  }
  .contact-socials-container {
    width: 90vw;
    height: 10vw;
    margin-bottom: 15vw;
    margin-top: -5vw;
  }
  .contact-socials-container p {
    font-size: 4vw;
  }

  .dribbble-contact {
    left: 28%;
  }

  .github-contact {
    right: 30%;
    text-align: right;
  }

  .linkedin-contact {
    text-align: right;
    right: 5%;
  }
}
</style>
