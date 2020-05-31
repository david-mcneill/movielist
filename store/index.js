export const state = () => ({
  movies: [
    {
      id: 1,
      title: 'The Matrix',
      year: 1999
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010
    },
    {
      id: 3,
      title: 'Apollo 13',
      year: 1997
    }
  ]
})

export const mutations = {}

export const actions = {}

export const getters = {
  showMovies(state) {
    return state.movies
  }
}
