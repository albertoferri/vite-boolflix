<!-- -----  JS  ------ -->
<script>
import axios from 'axios';

import {store} from '../store.js';

export default{

    data() {
        return  {
            store,
            inputSearch: '',
            showGenres: false,
        }
    },
    

    methods: {
        // qui ho creato una funzione per formattare la stringa inserita in modo da essere letta correttamente dall'api
        // quindi ho creato una variabile che verrà inserita dinamicamente dato che ho inserito la variabile nei data
        searchFilm() {
            let formattedInput = this.inputSearch.split(' ').join('+');
            // API per i film
            let movieApi = `https://api.themoviedb.org/3/search/movie?api_key=98ec842db674b61824e779cc047239d7&query=${formattedInput}`;
            // API per le serie TV
            let seriesApi = `https://api.themoviedb.org/3/search/tv?api_key=98ec842db674b61824e779cc047239d7&query=${formattedInput}`;

            // Chiamata API per i film
            axios.get(movieApi)
                .then(res => {
                this.store.films = res.data.results;
                console.log('film: ', this.store.films);
            });

            // Chiamata API per le serie TV
            axios.get(seriesApi)
                .then(res => {
                this.store.series = res.data.results; 
                console.log('serie tv: ', this.store.series);
            });
        },
        fetchGenres(apiURL) {
            axios.get(apiURL)
                .then(response => {
                    this.store.genres = response.data.genres;
                    console.log(this.store.genres)
                })
                .catch(error => console.error(error));
        },
    }
}

</script>



<!-- -----  HTML  ------ -->
<template>

    <div id="box" class="container-fluid py-3 px-4 d-flex justify-content-between bg-dark gap-2">
        <nav class="d-flex align-items-center gap-5">
            <img class="d-none d-md-block" src="/img/logo.png" alt="">
            <img class="d-block d-md-none" src="/img/logo-small.png" alt="">
            <span @click="fetchGenres('https://api.themoviedb.org/3/genre/movie/list?api_key=98ec842db674b61824e779cc047239d7')" class="d-none d-md-flex px-2 text-light">SERIE TV</span>
            <span @click="fetchGenres('https://api.themoviedb.org/3/genre/tv/list?api_key=98ec842db674b61824e779cc047239d7')" class="d-none d-md-flex px-2 text-light">FILM</span>
        </nav>

        <div class="search-box d-flex align-items-center gap-2 w-50">
            <input v-model="this.inputSearch" @keyup.enter="searchFilm" type="text" name="SearchBar" placeholder="Cerca" class="p-2 rounded-2 border-0 text-light w-100">
            <button @click="searchFilm" class="btn btn-outline-danger fw-bold d-none d-md-flex">Cerca</button>
        </div>
    </div>

</template>



<!-- -----  CSS  ------ -->
<style scoped lang="scss">

#box{

    span, img{
        cursor: pointer;
    }
    span{
        min-width: 80px;
    }

    span:hover{
        transition: .2s linear;
        text-decoration: underline;
        transform: scale(1.1);
    }
}





</style>
