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
  </div>
</template>

<script>
import left from "~/components/left";
import right from "~/components/right";

export default {
  components: {
    left,
    right
  }
};
</script>

<style>
@media screen and (min-width: 800px) {
  .block-left {
    /* Positioning */
    position: fixed;
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
  background-image: url("https://ik.imagekit.io/eigenmannmartin/eigenmannmartinch/us.png?tr=w-800,bl-30,q-50");
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
