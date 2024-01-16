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
                        <div class="top-card">
                            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="" class="w-100">
                        </div>
                        <div class="bottom-card">

                            <h2>{{movie.title}}</h2>
                            <h6>{{movie.original_title}}</h6>
                            <img :src="setFlag(movie.original_language)" alt="Bandiera" class="flag-icon">
                            <span class="ms-3">{{movie.original_language}}</span>
                            <div class="div">

                                <i v-for="i in getStarRating(movie.vote_average / 2)" class="fas fa-star" ></i>
                                <i v-for="i in 5 - getStarRating(movie.vote_average / 2)" class="far fa-star" ></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
                                    
                
            </div>

            <div class="col-12 mt-5">
                
                <h1 v-if="store.tvSeriesList.length > 0">TV Series</h1>
                <div class="cards-list mb-3">
                    
                    <div class="my-card" v-for="serie in store.tvSeriesList">
                        <div class="top-card">
                            <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" alt="" class="w-100">
                        </div>
                        <div class="bottom-card">

                            <h2>{{serie.name}}</h2>
                            <h6>{{serie.original_name}}</h6>
                            <img :src="setFlag(serie.original_language)" alt="Bandiera" class="flag-icon">
                            <span class="ms-3">{{serie.original_language}}</span>
                            <div class="div">

                                <i v-for="i in getStarRating(serie.vote_average / 2)" class="fas fa-star" ></i>
                                <i v-for="i in 5 - getStarRating(serie.vote_average / 2)" class="far fa-star" ></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
                                    
                
            </div>

            
        </div>
    </div>
</template>

<style lang="scss" scoped>
// .cards-list {
//     display: grid;
//     grid-auto-flow: column;
//     grid-auto-columns: 25%;

//     overflow-x: auto;


//     .my-card {
//         margin: 2px;
//         height: auto;


//         .bottom-card {

//             background-color: white;
//             padding: 30px;

//             .flag-icon {
//                 max-width: 30px;
//             }
//         }





//     }
// }

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