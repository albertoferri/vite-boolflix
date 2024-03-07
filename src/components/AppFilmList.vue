<!-- -----  JS  ------ -->
<script>
import {store} from '../store.js';

import AppFilmItem from './AppFilmItem.vue';
import AppSerieItem from './AppSerieItem.vue';

export default{
    name: 'AppFilmList',

    data() {
        return  {
            store,
        }
    },

    components: {
        AppFilmItem,
        AppSerieItem,
    }
}
</script>

<template>

    <div class="container-fluid px-0">

        <div class="films bg-dark text-white mb-3 rounded-bottom-4">
            <h3 class="px-2">FILM</h3>
            <ul id="film-container" class="d-flex flex-wrap justify-content-between gap-3 p-3 mb-0 bg-dark rounded-bottom-4 border-top border-3 border-danger">
                <AppFilmItem
                v-for="currentFilm in store.films"
                :film="currentFilm"
                :key="currentFilm.id"
                ></AppFilmItem>
            </ul>
        </div>

        <div class="series bg-dark text-light rounded-4">
            <h3 class="p-2 border-bottom border-danger border-3">SERIE TV</h3>
            <ul id="series-container" class="d-flex flex-wrap justify-content-between gap-3 p-3 mb-0 bg-dark rounded-4 border-danger">
                <AppSerieItem
                v-for="currentSerie in store.series"
                :serie="currentSerie"
                :key="currentSerie.id"
                ></AppSerieItem>
            </ul>
        </div>

    </div>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    #list-container{
        gap: $filmGap;

        border-top: 2px solid;
    }




</style>