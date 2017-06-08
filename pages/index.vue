<template>
  <div class="blocks">

    <div class="block-left">
      <left/>
    </div>
    <div class="block-right">
      <right />
    </div>
  </div>
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

.block-left {
  /* Background */
  background-color: #3F769E;
  background-image: url('/me.jpg');
  background-size: cover;
  background-position-x: center;
  background-position-y: top;

  height: 100vh;
}

.block-right {
  /* Sizing */
  min-height: 100%;
}

</style>
