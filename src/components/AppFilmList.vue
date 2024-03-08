<!-- -----  JS  ------ -->
<script>
import {store} from '../store.js';

import AppItem from './AppItem.vue';

export default{
    name: 'AppFilmList',

    data() {
        return  {
            store,
        }
    },

    components: {
        AppItem,
    }
}
</script>

<template>

    <div class="container-fluid px-0">

        <div class="films bg-dark text-white mb-3 rounded-bottom-4 px-4">
            <h3 class="px-3">FILM</h3>
            <ul id="film-container" class="d-flex flex-wrap justify-content-between row-gap-3 p-3 mb-0 bg-dark rounded-bottom-4 border-top border-3 border-danger">
                <AppItem
                v-for="currentFilm in store.films"
                :film="currentFilm"
                :key="currentFilm.id"
                ></AppItem>
            </ul>
        </div>

        <div class="series bg-dark text-light rounded-top-4 px-4">
            <h3 class="p-3 border-bottom border-danger border-3">SERIE TV</h3>
            <ul id="series-container" class="d-flex flex-wrap justify-content-between row-gap-3 p-3 mb-0 bg-dark rounded-4 border-danger">
                <AppItem
                v-for="currentSerie in store.series"
                :film="currentSerie"
                :key="currentSerie.id"
                ></AppItem>
            </ul>
        </div>

    </div>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    #list-container{

        border-top: 2px solid;
    }




</style>./AppItem.vue/index.js