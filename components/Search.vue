<template>
  <div>
    <input
      ref="searchInput"
      type="text"
      value=""
      @change="handleSearch($event.target.value)"
    />
    <!-- <input type="submit" value="Search for a movie" /> -->
  </div>
</template>

<script>
import FetchService from '@/services/FetchService'

export default {
  data() {
    return {
      movies: []
    }
  },
  methods: {
    handleSearch(value) {
      FetchService.searchMovies(value)
        .then((response) => {
          this.movies = response.data.Search
        })
        .catch((error) => {
          console.log('There was an error: ' + error.message)
        })
      this.$refs.searchInput.value = ''
    }
  }
  // methods: {
  //   handleSubmit() {
  //     const term = this.$refs.searchInput.value
  //     this.$emit('searchInit', { term })
  //   }
  // }
}
</script>
