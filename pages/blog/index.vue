<template>
  <div class="container">
     <nuxt-link class="home" to="/"><span>home</span></nuxt-link>
     <ul class="list">
       <li v-for="post in $store.state.posts">
         <nuxt-link class="link" :to="{ name: 'blog-slug', params: { slug: post.meta.slug } }">
           <span>{{ post.meta.title }}</span>
           <span class="time">{{ post.meta.publishedAt | moment('MMMM Do YYYY') }}</span>
         </nuxt-link>
       </li>
     </ul>
   </div>
</template>

<script>
  export default {
    asyncData ({ app, store }) {
      return store.dispatch('FETCH_POSTS', { $axios: app.$axios })
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 10vw;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .link,
  .home {
    text-decoration: none;
    color: inherit;
    font-family: "SFMono-Regular,Inconsolata,sans-serif";
    font-size: 0.6rem;
    line-height: 0.6rem;
    display: block;
    padding: 0.5rem;
  }

  .home {
    margin-bottom: 1rem;
  }

  .link span,
  .home span {
    display: block;
  }

  .link:hover,
  .home:hover {
    background: lightgrey;
  }

  .time {
    margin: 0;
    color: grey;
    font-size: 75%;
  }
</style>
