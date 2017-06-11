<template>
  <div>
    <div class="meta">
      <span>{{ post.meta.title }}</span>
      <span class="time">{{ post.meta.publishedAt | moment('MMMM Do YYYY') }}</span>
      <div class="divider" />
    </div>
    <vue-markdown class="markdown" :source="post.content" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    components: {
      VueMarkdown
    },
    props: [
      'post'
    ]
  }
</script>

<style scoped>
  .meta {
    font-family: "SFMono-Regular,Inconsolata,sans-serif";
    font-size: 0.6rem;
    line-height: 0.75rem;
  }

  .meta span {
    text-decoration: none;
    display: block;
  }

  .time {
    color: grey;
    font-size: 75%;
  }

  .divider {
    padding: 0.25rem 0 0;
    width: 8rem;
    border-bottom: 1px solid black;
  }

  .markdown {
    text-align: left;
    font-size: 0.6rem;
    max-width: 26rem;
  }

</style>
