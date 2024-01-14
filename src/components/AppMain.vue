<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 my-2"  v-for="movie in store.movieList">
                
                <div class="cards">
                    <h2>{{movie.title}}</h2>
                    <h6>{{movie.original_title}}</h6>
                    <p>{{movie.original_language}}</p>
                    <p>{{movie.vote_average}}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards {
    background-color: white;
    padding: 30px;
}
</style>