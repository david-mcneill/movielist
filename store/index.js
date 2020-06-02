import FetchService from '@/services/FetchService'

export const state = () => ({
  movies: []
})

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  }
}

export const actions = {
  fetchMovies({ commit }) {
    return FetchService.getMovies().then((response) => {
      commit('SET_MOVIES', response.data.Search)
    })
  }
}

export const getters = {
  showMovies(state) {
    return state.movies
  }
}
