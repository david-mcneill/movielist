<template>
  <div>
    <Header />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/Header'

export default {
  components: {
    Header
  },
  computed: mapState(['movies'])
}
</script>

<style>
body {
  font-family: 'Bebas Neue', Helvetica, sans-serif;
}
</style>
