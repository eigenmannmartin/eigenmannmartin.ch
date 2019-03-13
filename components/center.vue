<template>
  <div class="root">
    <div class="inner">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
/* CONTAINERS */
.root {
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  max-width: 26rem;
  padding: 0 1rem;
}
</style>
