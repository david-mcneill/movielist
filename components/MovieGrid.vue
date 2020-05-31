<template>
  <div class="movie-grid">
    <div v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieCard from './MovieCard'
export default {
  components: {
    MovieCard
  },
  computed: {
    ...mapState(['movies'])
  }
}
</script>

<style lang="css" scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 28px;
}
</style>
