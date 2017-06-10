<template>
  <div class="container">
     <h1>Posts</h1>
     <ul>
       <li v-for="post in $store.state.posts">
         <nuxt-link :to="{ name: 'blog-name', params: { name: post.filename } }">{{ post.filename }}</nuxt-link>
       </li>
     </ul>
     <p><nuxt-link to="/blog">Back to home page</nuxt-link></p>
   </div>
</template>

<script>
export default {
  asyncData ({ app, store }) {
    store.dispatch('FETCH_POSTS')
  }
  // asyncData ({ params, error, app }) {
  //   return this.store
  //   //return app.$axios.get('/posts').then((res) => ({ posts: res.data }));
  // }
}
</script>

<style scoped>
</style>
