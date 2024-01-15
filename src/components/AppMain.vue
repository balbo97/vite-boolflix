<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        setFlag(movie) {

            const languageConversion = {

                "zh": "cn",
                "hi": "in",
                "ar": "sa",
                "pt": "br",
                "bn": "bd",
                "ru": "ru",
                "ja": "jp",
                "pa": "pk",
                "mr": "in",
                "de": "de",
                "te": "in",
                "fr": "fr",
                "ms": "my",
                "ko": "kr",
                "vi": "vn",
                "ta": "in",
                "en": "gb",
                "xh": "za"


            };
            let language = movie;

            let country = languageConversion[language] || language;
            console.log(language)
            return `https://flagcdn.com/w580/${country}.webp`;
        },
        convertLanguageInFlag(language) {

        }
    },




}
</script>

<template lang="">
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                
                <h1 v-if="store.movieList.length > 0">Films</h1>
                <div class="cards-list mb-3">
                    
                    <div class="my-card" v-for="movie in store.movieList">
                        <h2>{{movie.title}}</h2>
                        <h6>{{movie.original_title}}</h6>
                        <img :src="setFlag(movie.original_language)" alt="Bandiera" class="flag-icon">
                        <span class="ms-3">{{movie.original_language}}</span>
                        <p>{{movie.vote_average}}</p>
                        
                    </div>
                </div>
                                    
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards-list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 25%;

    overflow-x: auto;

    .my-card {
        background-color: white;
        padding: 30px;
        margin: 10px;

        .flag-icon {
            max-width: 30px;
        }


    }
}
</style>