<template>
  <div class="markdown" v-html="html" />
</template>

<script>
  export default { props: ['html'] }
</script>

<style>
  /* Sizing */
  .markdown {
    margin: 1rem 0;
  }

  .markdown > p {
    max-width: 30rem;
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

  .markdown > pre {
    padding: 1rem;
    margin: 3rem 0;
    width: auto;
    width: 100%;
    overflow-x: auto;
  }
</style>
