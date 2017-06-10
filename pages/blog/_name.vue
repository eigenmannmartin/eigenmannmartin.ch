<template>
  <div class="container">
    <p>{{ post }}</p>
    <p><nuxt-link to="/blog">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
export default {
  asyncData ({ params, app }) {
    return app.$axios.get('/posts')
      .then((res) => ({ post: res.data.filter(post => post.filename === params.name)[0].content }));
  }
}
</script>

<style scoped>
</style>
