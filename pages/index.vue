<template>
  <div class="blocks">
    <div class="block-left">
      <div class="background-image" />
      <div class="position-fix">
        <left/>
      </div>
    </div>
    <div class="block-right">
      <right />
    </div>
  </div>
</template>

<script>
  import left from '~/components/left'
  import right from '~/components/right'

  export default {
    components: {
      left,
      right
    }
  }
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
    background-image: url('/static/us.png?size=800');
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }

  @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    .background-image {
      background-image: url('/static/us.png?size=1600');
    }
  }
  @media
    (min-width: 800px) {
    .background-image {
      background-image: url('/static/us.png?size=2400');
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
    background-color: #3F769E;

    height: 100vh;
  }

  .block-right {
    /* Sizing */
    min-height: 100%;
  }
</style>
