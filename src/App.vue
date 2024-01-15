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

      this.searchMovie()
      this.searchTvSeries()
    },

    searchMovie() {

      let apiUrl = store.endpointMovies + store.apiKey

      if (store.nameMovieAndTv !== '') {
        apiUrl += `&query=${store.nameMovieAndTv}`
      }

      axios.get(apiUrl).then((response) => {
        store.movieList = response.data.results

      })

    },
    searchTvSeries() {

      let apiUrl = store.endpointTvSeries + store.apiKey
      console.log(apiUrl)

      if (store.nameMovieAndTv !== '') {
        apiUrl += `&query=${store.nameMovieAndTv}`
      }

      axios.get(apiUrl).then((response) => {
        store.tvSeriesList = response.data.results
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