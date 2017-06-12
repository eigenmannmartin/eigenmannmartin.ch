<template>
  <nuxt-link class="link" :to="to">
    <span>{{ label }}</span>
    <span class="time">{{ time }}</span>
    <slot />
  </nuxt-link>
</template>

<script>
  export default {
    props: ['label', 'to', 'time']
  }
</script>

<style scoped>
  .link {
    /* Normal text */
    text-decoration: none;
    color: inherit;

    /* Spacing */
    display: block;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .link span {
    /* Force linebreaks */
    display: block;
  }

  .link:hover {
    background: lightgrey;
  }

  .time {
    /* Time is meta information */
    color: grey;
    font-size: 75%;
    line-height: 1;
  }
</style>
