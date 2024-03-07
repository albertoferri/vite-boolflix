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

    <div class="container-fluid px-0 d-flex flex-column gap-5  ">

        <ul id="film-container" class="d-flex flex-wrap justify-content-between gap-3 p-3 mb-0 bg-dark rounded-bottom-4 border-danger">
            <AppFilmItem
            v-for="currentFilm in store.films"
            :film="currentFilm"
            :key="currentFilm.id"
            ></AppFilmItem>
        </ul>

        <ul id="series-container" class="d-flex flex-wrap p-3 mb-0 bg-dark rounded-bottom-4 border-danger">
            <AppSerieItem
            v-for="currentSerie in store.series"
            :serie="currentSerie"
            :key="currentSerie.id"
            ></AppSerieItem>
        </ul>

    </div>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    #list-container{
        gap: $filmGap;

        border-top: 2px solid;
    }




</style>