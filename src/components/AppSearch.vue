<!-- -----  JS  ------ -->
<script>
import axios from 'axios';

import {store} from '../store.js';

export default{

    data() {
        return  {
            store,
            inputSearch: '',
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
        }
    }
}

</script>



<!-- -----  HTML  ------ -->
<template>

    <div class="container-fluid p-3 d-flex justify-content-between bg-dark gap-2">
        <img src="/img/logo.png" alt="">
        <div class="search-box d-flex align-items-center gap-2">
            <input v-model="this.inputSearch" @keyup.enter="searchFilm" type="text" name="SearchBar" placeholder="Cerca" class="p-1 rounded-2 border-0 text-light ">
            <button @click="searchFilm" class="btn btn-outline-danger fw-bold">Cerca</button>
        </div>
    </div>

</template>



<!-- -----  CSS  ------ -->
<style scoped lang="scss">



</style>
