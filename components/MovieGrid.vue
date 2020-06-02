<template>
  <div class="container">
    <p class="showing">
      Showing {{ movies.length }} of {{ totalResults }} results
    </p>

    <div class="movie-grid">
      <div v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
export default {
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
    totalResults: {
      type: String,
      required: false,
      default: '0'
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 40px 0;
}

.showing {
  font-size: 2rem;
  margin: 0;
  text-align: center;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 28px;
  padding: 20px 0;
}
</style>
