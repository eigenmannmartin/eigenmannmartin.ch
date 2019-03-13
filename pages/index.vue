<template>
  <div>
    <div class="blocks">
      <div class="block-left block-image h100">
        <div class="background-image background-image-lazy"/>
        <div class="background-image background-image-full"/>
        <svg class="wafe" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="white"
            stroke-width="120"
            stroke-linecap="round"
          ></path>
        </svg>
        <left/>
      </div>
      <div class="block-right h100">
        <right/>
      </div>
    </div>

    <div class="blocks">
      <div class="block-left">
        <div class="navigation">Project Hightlights</div>
        <projects/>
      </div>
      <div class="block-right">
        <div class="navigation">Skills</div>
        <skills/>
      </div>
    </div>
  </div>
</template>

<script>
import left from "~/components/left";
import right from "~/components/right";
import projects from "~/components/projects";
import skills from "~/components/skills";

export default {
  components: {
    left,
    right,
    projects,
    skills
  }
};
</script>

<style lang="scss" scoped>
$navigationHeight: 70px;
$wafe-height: 120px;

.navigation {
  margin-top: 1rem;
  height: $navigationHeight;
  line-height: $navigationHeight;
  text-align: center;
  font-size: 2rem;
}

.block-image {
  /* Background */
  background-color: #3f769e;
  position: relative;
  overflow: hidden;
}

.wafe {
  position: absolute;
  bottom: 0;
}

.h100 {
  height: calc(100vh + #{$wafe-height});
}

@media screen and (min-width: 1000px) {
  .blocks {
    display: flex;
  }
  .block-left {
    width: 50vw;
  }

  .block-right {
    width: 50vw;
  }
}

.background-image {
  height: calc(100% - #{$wafe-height} - 1rem);
  width: calc(100% - 1rem);
  position: absolute;
  background-size: contain;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  padding: 0;
  margin: 1rem;
}

.background-image-lazy {
  z-index: 999;
  background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=w-800,q-1");
}

.background-image-full {
  z-index: 1000;
  background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=w-800");
}

@media (min-width: 800px) {
  .background-image-full {
    background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png");
  }
}
</style>
