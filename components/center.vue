<template>
  <div class="wrapper">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  /* CONTAINERS */
  .wrapper {
    min-height: 100vh;
    max-width: 26rem;
    height: 100%;
    padding: 0 1rem;

    /* Cross-browser display: flex; justify-content: center; */
    display: table;
    margin: 0 auto;
  }

  .inner {
    /* Cross-browser display: flex; align-items: center; */
    display: table-cell;
    vertical-align: middle;
  }
</style>
