<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain

  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie() {
      let apiUrl = store.endpointMovies + store.apiKey

      if (store.movieName != '') {
        apiUrl += `&query=${store.movieName}`
      }

      axios.get(apiUrl).then((response) => {
        store.movieList = response.data.results
        console.log(store.movieList)
      })

    }

  },

}
</script>

<template lang="">
  <div>
    <AppHeader @search="searchMovie"/>
    <AppMain />
  </div>
  
</template>

<style lang="scss">
@use './styles/generals.scss';
@use './styles/partials/variables'
</style>