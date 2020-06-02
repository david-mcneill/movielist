<template>
  <div @searchInit="searchMovies">
    <Header />
    <main role="main">
      <div class="outer-wrapper">
        <MovieGrid :movies="movies" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import MovieGrid from '@/components/MovieGrid'

export default {
  components: {
    Header,
    MovieGrid
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('fetchMovies')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch movies at this time'
      })
    }
  },
  computed: mapState({
    movies: (state) => state.movies
  }),
  methods: {
    searchMovies(term) {
      // FetchService.searchMovies()
      console.log(term)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Bebas Neue', Helvetica, sans-serif;
}

main {
  padding: 60px 0;
}

.outer-wrapper {
  width: 90%;
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
