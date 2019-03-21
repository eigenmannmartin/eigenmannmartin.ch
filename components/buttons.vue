<template>
  <div :class="$props.index ? 'buttons-index' : 'buttons-fade'">
    <div class="fade"/>
    <div class="buttons">
      <nuxt-link
        v-if="$props.to === 'projects'"
        class="projects-button"
        to="/projects"
      >Project Highlights</nuxt-link>
      <nuxt-link v-else class="projects-button" to="/">About Me</nuxt-link>
      <a class="cv-button" href="https://cv.eigenmannmartin.ch">CV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttons",
  props: ["to", "index"]
};
</script>

<style lang="scss" scoped>
.buttons {
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;

  display: block;
  margin-top: 2rem;

  transition: all 0.2s;
  z-index: 1010;

  & a {
    padding: 0.5em 1em;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    background-color: #9e3f5add;
    white-space: nowrap;
  }

  & a:first-child {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  & a:last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding-left: 1rem;
    border-left: none;
  }

  & a:hover {
    background-color: #9e3f5add;
    color: rgba(255, 255, 255, 0.9);
  }
}

.buttons-fade > .fade {
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 35%
  );
}

@media screen and (min-width: 800px) {
  .buttons-index > .buttons {
    left: 25%;
  }
}
</style>
