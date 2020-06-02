<template>
  <div class="movie">
    <h4 class="movie-name">{{ movie.Title }}</h4>
    <div>
      <img
        class="movie-poster"
        :src="moviePoster"
        :alt="`The movie titled: ${movie.Title}`"
      />
    </div>
    <p>({{ movie.Year }})</p>
    <a :href="`https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`">
      View on IMDB
    </a>
  </div>
</template>

<script>
const DEFAULT_PLACEHOLDER_IMAGE = 'https://place-hold.it/200x300'
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    moviePoster() {
      return this.movie.Poster === 'N/A'
        ? DEFAULT_PLACEHOLDER_IMAGE
        : this.movie.Poster
    }
  }
}
</script>

<style>
.movie-name {
  font-size: 1.5em;
  letter-spacing: 1px;
}

.movie-poster {
  max-width: 200px;
}
</style>
