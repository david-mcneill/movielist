<template>
  <div>
    <Header />
    <main role="main">
      <div class="outer-wrapper">
        <MovieGrid />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header'
import MovieGrid from '../components/MovieGrid'

export default {
  components: {
    Header,
    MovieGrid
  }
}
</script>

<style>
body {
  font-family: 'Bebas Neue', Helvetica, sans-serif;
}

main {
  padding: 60px 0;
}

.outer-wrapper {
  width: 90%;
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
