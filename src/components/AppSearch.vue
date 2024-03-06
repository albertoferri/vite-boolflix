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
            let api = `https://api.themoviedb.org/3/search/movie?api_key=98ec842db674b61824e779cc047239d7&query=${formattedInput}`;

            axios.get(api)
            .then(res => {
                this.store.films = res.data.results;
                console.log('film: ', this.store.films);
            });
        }
    }
}

</script>



<!-- -----  HTML  ------ -->
<template>

    <div class="container-fluid p-3 d-flex justify-content-between bg-dark gap-2 rounded-top-4">
        <h1 class="text-danger ">BOOLFLIX</h1>
        <div class="search-box d-flex align-items-center gap-2">
            <input v-model="this.inputSearch" @keyup.enter="searchFilm" type="text" name="SearchBar" placeholder="Cerca" class="p-1 rounded-2 border-0">
            <button @click="searchFilm" class="btn btn-outline-danger fw-bold">Cerca</button>
        </div>
    </div>

</template>



<!-- -----  CSS  ------ -->
<style lang="scss">




</style>
