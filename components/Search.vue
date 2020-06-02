<template>
  <div>
    <form ref="searchForm" @submit.prevent="handleSubmit">
      <input v-model="searchTerm" type="text" />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('fetchMovies', this.searchTerm)
      this.searchTerm = ''
    }
  }
}
</script>
