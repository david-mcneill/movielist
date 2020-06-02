<template>
  <div class="site-body">
    <Header @searchInit="searchMovies" />
    <main role="main">
      <div class="outer-wrapper">
        <template v-if="movies.length > 0">
          <MovieGrid :movies="movies" />
        </template>
        <template v-else>
          <div class="get-started">
            <p class="get-started__text">Search for a movie to get started</p>
          </div>
        </template>
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
  computed: mapState({
    movies: (state) => state.movies
  }),
  methods: {
    searchMovies() {
      console.log('searching')
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Bebas Neue', Helvetica, sans-serif;
}

.site-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex: 1;
}

.outer-wrapper {
  width: 90%;
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
  height: 100%;
}

.get-started {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 3rem;
}
</style>
