<template>
  <div>
    <navigation to="/blog" label="back"/>
    <post :post="$store.state.post"/>
  </div>
</template>

<script>
  import post from '~/components/post'
  import navigation from '~/components/navigation'

  export default {
    layout: 'blog',
    components: { post, navigation },
    asyncData ({ app, store, params, error }) {
      return store.dispatch('FETCH_POST', { slug: params.slug, $axios: app.$axios })
        .catch((e) => error({ statusCode: 404, message: e.message }))
    }
  }
</script>
