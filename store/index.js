import FetchService from '@/services/FetchService'

export const state = () => ({
  loading: 0,
  movies: []
})

export const mutations = {
  INCREMENT_LOADING(state) {
    state.loading++
  },

  DECREMENT_LOADING(state) {
    state.loading--
  },

  SET_MOVIES(state, movies) {
    state.movies = movies
  }
}

export const actions = {
  incrementLoading({ commit }) {
    commit('INCREMENT_LOADING', true)
  },

  decrementLoading({ commit }) {
    commit('DECREMENT_LOADING', true)
  },

  fetchMovies({ commit }, term) {
    FetchService.searchMovies(term).then((response) => {
      commit('SET_MOVIES', response.data.Search)
    })
  }
}
