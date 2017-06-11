<template>
  <div class="container">
      <nuxt-link class="control" to="/blog"><span>Back</span></nuxt-link>
      <post class="post" :post="$store.state.post"/>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import post from '~/components/post'
  import center from '~/components/center'
  export default {
    components: {
      post,
      VueMarkdown
    },
    asyncData ({ app, store, params, error }) {
      return store.dispatch('FETCH_POST', { slug: params.slug, $axios: app.$axios })
        .catch((e) => error({ statusCode: 404, message: e.message }))
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 10vw;
  }

  .control,
  .post {
    padding: 0 0 0 0.5rem;
  }

  .control {
    text-decoration: none;
    color: inherit;
    font-family: "SFMono-Regular,Inconsolata,sans-serif";
    font-size: 0.6rem;
    line-height: 0.6rem;
    display: block;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .control span {
    display: block;
  }

  .control:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
</style>
