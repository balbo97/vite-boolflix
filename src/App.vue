<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store'

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