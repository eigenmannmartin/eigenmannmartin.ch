import Vuex from 'vuex'

// Helper methods
const getBySlug = slug => p => p.meta.slug === slug
const getPostBySlug = (state, slug) => {
  const post = state.posts.filter(getBySlug(slug))[0]
  if (post) return post

  throw new Error('Post not found')
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: null
    },

    actions: {
      // Load all posts
      FETCH_POSTS: ({ commit, state }, { $axios }) => {
        // Never refech posts
        if (state.posts.length) return Promise.resolve()

        return $axios.get('/posts')
          .then(res => res.data)
          .then(posts => commit('SET_POSTS', posts))
      },
      // Search for requested post and/or request all posts
      FETCH_POST: ({ dispatch, commit, state }, { slug, $axios }) => {
        return dispatch('FETCH_POSTS', { $axios })
          .then(() => getPostBySlug(state, slug))
          .then((post) => commit('SET_POST', post))
      }
    },

    mutations: {
      SET_POSTS: (state, posts) => { state.posts = posts },
      SET_POST: (state, post) => { state.post = post }
    }
  })
}

export default createStore
