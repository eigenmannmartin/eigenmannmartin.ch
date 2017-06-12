<template>
  <div>
    <navigation
      :label="post.meta.title"
      :to="`/blog/${post.meta.slug}`"
      :time="post.meta.publishedAt" />
    <markdown class="markdown" :html="post.content" />
  </div>
</template>

<script>
  import markdown from '~/components/markdown'
  import navigation from '~/components/navigation'

  export default {
    components: { markdown, navigation },
    props: ['post']
  }
</script>

<style scoped>
  .markdown {
    padding: 0.5rem;
  }
</style>
