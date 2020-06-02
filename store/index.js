import FetchService from '@/services/FetchService'

export const state = () => ({
  movies: [],
  totalResults: 0
})

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },

  SET_TOTAL_RESULTS(state, totalResults) {
    state.totalResults = totalResults
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
      commit('SET_TOTAL_RESULTS', response.data.totalResults)
      console.log(response.data)
    })
  }
}
