<template>
  <header>
    <div class="container">
      <h1>Movielist</h1>
      <Search />
    </div>
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
}

header h1 {
  margin: 0;
  letter-spacing: 2px;
  font-size: 36px;
}

header .container {
  padding: 0 25px;
  color: white;
  width: 90%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
