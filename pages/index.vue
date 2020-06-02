<template>
  <div>
    <Header />
    <main role="main">
      <div class="outer-wrapper">
        <MovieGrid :movies="movies" />
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header'
import MovieGrid from '../components/MovieGrid'

export default {
  components: {
    Header,
    MovieGrid
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    axios
      .get('https://www.omdbapi.com/?s=space&apikey=4e466448')
      .then((response) => {
        console.log(response.data)
        response.data.Search.map((movie) => this.movies.push(movie))
      })
      .catch((error) => {
        console.log('There was an error: ' + error.message)
      })
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
