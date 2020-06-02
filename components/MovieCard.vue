<template>
  <div class="movie">
    <h4 class="movie-name">{{ movie.Title }}</h4>
    <div>
      <img
        class="movie-poster"
        :src="movie.Poster"
        :alt="`The movie titled: ${movie.title}`"
      />
    </div>
    <p>({{ movie.Year }})</p>
    <a :href="`https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`">
      View on IMDB
    </a>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
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
