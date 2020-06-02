<template>
  <form class="search">
    <input type="text" value="searchValue" @change="handleSearchInputChanges" />
    <input type="submit" value="SEARCH" @click="callSearchFunction" />
  </form>
</template>

<script>
export default {
  methods: {
    handleSearchInputChanges() {},
    callSearchFunction() {}
  }
}
</script>
