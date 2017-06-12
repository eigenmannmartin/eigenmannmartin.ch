<template>
  <div class="markdown" v-html="html" />
</template>

<script>
  export default { props: ['html'] }
</script>

<style>
  /* Sizing */
  .markdown {
    margin: 1rem 0 0;
    max-width: 26rem;
  }

  /* Text styling */
  .markdown > blockquote {
    border-left: 1px solid lightgrey;
    padding-left: 1rem;
  }

  .markdown > p {
    margin: 1rem 0 0;
    line-height: 1.5;
  }
</style>
