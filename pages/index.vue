<template>
  <section class="blocks">
    <div class="block-left">
      <left/>
    </div>
    <div class="block-right">
      <right />
    </div>
  </section>
</template>

<script>
import Left from '~components/Left'
import Right from '~components/Right'

export default {
  components: {
    Left,
    Right
  }
}
</script>

<style>
@media screen and (min-width: 600px) {
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
    position: absolute;
    right: 0;

    /* Sizing */
    width: 50%;
  }
}

.container {
  /* Fill entire screen */
  min-height: 100vh;
}

.block-left {
  /* Background */
  background-color: #3F769E;
}

.block-right {
  /* Sizing */
  min-height: 100%;
  height: auto;
}
</style>
