<template>
  <div>
    <div v-for="post in posts">
      <navigation
        :label="post.meta.title"
        :to="`/blog/${post.meta.slug}`"
        :time="post.meta.publishedAt" />
    </div>
  </div>
</template>

<script>
  import navigation from '~/components/navigation'

  export default {
    components: { navigation },
    props: ['posts'],
    asyncData ({ app, store }) {
      return store.dispatch('FETCH_POSTS', { $axios: app.$axios })
    }
  }
</script>
