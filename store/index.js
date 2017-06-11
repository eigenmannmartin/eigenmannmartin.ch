import Vuex from 'vuex'

// Helper methods
const getBySlug = slug => p => p.meta.slug === slug
const getPostBySlug = (state, slug) => state.posts.filter(getBySlug(slug))[0]

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: null
    },

    actions: {
      // Load all posts
      FETCH_POSTS: ({ commit }, { $axios }) => {
        return $axios.get('/posts')
          .then(res => res.data)
          .then(posts => commit('SET_POSTS', posts))
      },
      // Search for requested post and/or request all posts
      FETCH_POST: ({ dispatch, commit, state }, { slug, $axios }) => {
        if (!getPostBySlug(state, slug)) {
          return dispatch('FETCH_POSTS', { $axios })
            .then(() => getPostBySlug(state, slug))
            .then((post) => {
              if (!post) throw new Error('Post not found')

              return post
            })
            .then((post) => commit('SET_POST', post))
        }

        return commit('SET_POST', getPostBySlug(state, slug))
      },
      NEXT_POST: ({ state, commit }) => {
        return commit('SET_POST', state.posts[state.nextIndex])
      },
      PREV_POST: ({ state, commit }) => {
        return commit('SET_POST', state.posts[state.prevIndex])
      }
    },

    mutations: {
      SET_POSTS: (state, posts) => {
        state.posts = posts
      },
      SET_POST: (state, post) => {
        if (post) {
          // Keep pointers in store
          const postIndex = state.posts.indexOf(post)
          const postCount = state.posts.length

          // Never Overstep bounderies
          state.nextIndex = postIndex === 0 ? 0 : postIndex - 1
          state.prevIndex = postIndex === postCount - 1 ? postIndex : postIndex + 1
          state.post = post
        } else {
          state.postIndex = null
          state.post = null
        }
      }
    }
  })
}

export default createStore
