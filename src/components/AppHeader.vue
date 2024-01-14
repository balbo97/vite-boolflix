<script>
import { store } from '../store'
export default {
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
    <header>
        <div class="container">

            <h1>Boolfix</h1>
            <div class="input-group input-group-sm mb-3 w-25">
              
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="store.movieName">
              <button class="btn btn-primary" @click="$emit(`search `)">Search</button>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    color: red;
    padding: 30px;

    .container {

        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {

            font-weight: 900;
        }
    }

}
</style>