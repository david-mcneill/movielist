<template>
  <div class="movie">
    <h4 class="movie-name">{{ movie.title }}</h4>
    <div>
      <img
        width="100"
        src="https://place-hold.it/100x200"
        :alt="`The movie titled: ${movie.title}`"
      />
    </div>
    <p>({{ movie.year }})</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultPlaceholder: `'https://place-hold.it/200x400'`
    }
  }
}
</script>

<style>
.movie-name {
  font-size: 1.5em;
  letter-spacing: 1px;
}
</style>
