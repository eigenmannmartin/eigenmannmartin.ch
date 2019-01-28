<template>
  <div class="blocks">
    <div class="block-left">
      <div class="background-image"/>
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
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: image-set(
    url("https://image.eigenmannmartin.ch?domain=https://eigenmannmartin.ch&image=/us.png&width=400")
      1x,
    url("https://image.eigenmannmartin.ch?domain=https://eigenmannmartin.ch&image=/us.png&width=800")
      2x,
    url("https://image.eigenmannmartin.ch?domain=https://eigenmannmartin.ch&image=/us.png&width=1600")
      4x
  );
  background-size: contain;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  margin: 1rem;
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
