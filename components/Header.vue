<template>
  <header>
    <h1>Movielist</h1>
    <Search />
  </header>
</template>

<script>
import Search from './Search'
export default {
  components: {
    Search
  }
}
</script>

<style lang="css">
header {
  background-color: #282c34;
  height: 100px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

header h1 {
  margin: 0;
  letter-spacing: 2px;
  font-size: 36px;
}
</style>
