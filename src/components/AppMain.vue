<script>
import SingleCard from './SingleCard.vue';
import SingleCardTv from './SingleCardTv.vue';
import { store } from '../store'

export default {
    components: {
        SingleCard,
        SingleCardTv

    },
    data() {
        name: 'AppMain';
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
                "ms": "my",
                "ko": "kr",
                "vi": "vn",
                "ta": "in",
                "en": "gb",
                "xh": "za"
            };
            let language = movie;
            let country = languageConversion[language] || language;


            return `https://flagcdn.com/w580/${country}.webp`;
        },

        getStarRating(vote) {

            return Math.ceil(vote)
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
                        
                        <SingleCard :movie="movie"/>
                        
                    </div>
                </div>
                                    
                
            </div>

            <div class="col-12 mt-5">
                
                <h1 v-if="store.tvSeriesList.length > 0">TV Series</h1>
                <div class="cards-list mb-3">
                    
                    <div class="my-card" v-for="serie in store.tvSeriesList">

                        <SingleCardTv :serie="serie" />
                        
                        
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
    height: 470px;


    .my-card {
        margin: 10px;
        position: relative;
        width: 100%;
        height: 100%;

        .top-card,
        .bottom-card {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: transform 0.5s;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            cursor: pointer;
        }

        .top-card {
            transform: rotateY(0deg);
            z-index: 2;
        }

        .bottom-card {
            transform: rotateY(180deg);
            background-color: white;
            padding: 30px;


            .flag-icon {
                max-width: 30px;
            }

            .div {
                margin-top: 5px;


                .fas,
                .far {
                    margin-right: 3px;
                }
            }
        }

        &:hover {
            .top-card {
                transform: rotateY(-180deg);
            }

            .bottom-card {
                transform: rotateY(0deg);
            }
        }
    }
}
</style>