import { reactive } from 'vue';

export const store = reactive({
    endpointMovies: 'https://api.themoviedb.org/3/search/movie?api_key=',
    endpointTvseries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    apiKey: 'a4621505ed8c00f472a6b2c7247e5d63',
    movieList: [],
    tvseriesList: [],
    nameMovieAndTv: '',

})