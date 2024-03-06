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
        searchFilm() {
            let formattedInput = this.inputSearch.split(' ').join('+');
            let api = `https://api.themoviedb.org/3/search/movie?api_key=98ec842db674b61824e779cc047239d7&query=${formattedInput}`;

            axios.get(api)
            .then(res => {
                console.log('film: ', res.data.results);
                this.store.films = res.data.results;
                console.log(this.store.films);
            });
        }
    }


    
}


</script>

<template>

    <div class="container-fluid p-3 d-flex gap-2 ">
        <input type="text" name="SearchBar" v-model="this.inputSearch" placeholder="Cerca">
        <button @click="searchFilm" class="btn btn-outline-danger fw-bold">Cerca</button>
    </div>

</template>

<style lang="scss">




</style>
