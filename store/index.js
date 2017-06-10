import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    posts: [],
    currentPost: null,

    actions: {
      FETCH_POSTS: ({ commit }) => {
        commit('SET_POSTS', [{ filename: 'sampePost' }])
      }
    },

    mutations: {
      SET_POSTS: (state, posts) => {
        state.posts = posts
      }
    }
  })
}

export default createStore
