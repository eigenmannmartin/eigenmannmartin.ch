<template>
  <div class="blocks">
    <div class="block-left">
      <div class="background-image background-image-lazy"/>
      <div class="background-image background-image-full"/>
      <div class="position-fix">
        <left/>
      </div>
    </div>
    <div class="block-right">
      <right/>
    </div>
    <div>
      <nuxt-link class="projects-button" to="/projects">Project Highlights</nuxt-link>
    </div>
  </div>
</template>

<script>
import left from "~/components/left";
import right from "~/components/right";
import center from "~/components/center";

export default {
  components: {
    left,
    right,
    center
  },
  transition: {
    name: "page"
  }
};
</script>

<style lang="scss">
body {
  overflow-y: scroll;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
</style>

<style lang="scss" scoped>
.projects-button {
  width: 130px;
  text-align: center;
  position: fixed;
  background-color: #9e3f5add;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  border: 1px solid #9e3f5add;
  color: rgba(255, 255, 255, 0.9);
  display: block;
  border-radius: 5px;
  margin-top: 2rem;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 0.2s;
  z-index: 1010;

  &:hover {
    background-color: #9e3f5add;
    color: rgba(255, 255, 255, 0.9);
  }
}

@media screen and (min-width: 800px) {
  .projects-button {
    border-style: dashed;
    background-color: initial;
    color: #9e3f5a;
    right: 2rem;
    top: 1.4rem;
    bottom: unset;
    left: unset;
  }

  .block-left {
    /* Positioning */
    float: left;
    position: relative;
    left: 0;

    /* Sizing (fixed height) */
    height: 100%;
    width: 50%;
  }

  .block-right {
    /* Positioning */
    margin-left: 50%;

    /* Sizing */
    min-height: 100%;
    width: 50%;
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: contain;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  margin: 1rem;
}

.background-image-lazy {
  z-index: 999;
  background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=w-800,bl-10,q-50");
}

.background-image-full {
  z-index: 1000;
  background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=w-800,bg-3F769E");
}

@media (min-width: 800px) {
  .background-image-full {
    background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=bg-3F769E");
  }
}

.position-fix {
  position: absolute;
  z-index: 1010;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.block-left {
  /* Background */
  background-color: #3f769e;

  height: 100vh;
}

.block-right {
  /* Sizing */
  min-height: 100%;
}
</style>
