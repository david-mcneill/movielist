export const state = () => ({
  movies: ['The Matrix', 'Inception', 'Apollo 13']
})

export const mutations = {}

export const actions = {}

export const getters = {
  showMovies(state) {
    return state.movies
  }
}
