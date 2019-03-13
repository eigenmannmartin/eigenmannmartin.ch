<template>
  <div class="root" :style="{
       alignItems: $props.vertical ? 'center' : false
    }
    ">
    <div class="inner">
      <slot/>
    </div>
  </div>
</template>

<script>
import center from "~/components/center";

export default {
  props: {
    vertical: {
      default: false
    }
  }
};
</script>

<style scoped>
/* CONTAINERS */
.root {
  /* min-height: 100vh;*/
  height: 100%;

  display: flex;
  justify-content: center;
}

.inner {
  max-width: 26rem;
  padding: 0 1rem;
}
</style>
