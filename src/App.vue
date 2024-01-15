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
    searchAll() {
      console.log('prima si searchMovie');
      this.searchMovie()
      console.log('dopo searchMovie');
    },

    searchMovie() {
      console.log('sono dentro searchmovie');
      let apiUrl = store.endpointMovies + store.apiKey

      if (store.movieName != '') {
        apiUrl += `&query=${store.movieNameAndTv}`
      }

      axios.get(apiUrl).then((response) => {
        store.movieList = response.data.results

      })

    }

  },

}
</script>

<template lang="">
  <div>
    <AppHeader @search="searchAll"/>
    <AppMain />
  </div>
  
</template>

<style lang="scss">
@use './styles/generals.scss';
@use './styles/partials/variables'
</style>