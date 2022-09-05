<template>
  <router-link to="About-Me">
    <div class="about-me">
      <p class="about-text">ABOUT ME</p>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style>
.about-me {
  margin: auto;
  margin-top: 25vw;
  background: #4f5760;
  width: 45vw;
  height: 45vw;
  border-radius: 50%;
}
.about-me p {
  position: relative;
  text-decoration: underline;
  color: white;
  font-family: sk-modernist;
  font-size: 4vw;
  left: 50%;
  top: calc(50% - 1vw);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
