<!-- -----  JS  ------ -->
<script>
import {store} from '../store.js';

import AppFilmItem from '../components/AppFilmItem.vue';

export default{
    name: 'AppFilmList',

    data() {
        return  {
            store,
        }
    },

    components: {
        AppFilmItem,
    }
}
</script>

<template>


    <ul id="list-container" class="d-flex flex-wrap p-3 mb-0 bg-dark rounded-bottom-4 border-danger">
        <AppFilmItem
        v-for="currentFilm in store.films"
        :film="currentFilm"
        :key="currentFilm.id"
        ></AppFilmItem>

        <AppFilmItem
        v-for="currentSerie in store.series"
        :film="currentSerie"
        :key="currentSerie.id"
        ></AppFilmItem>
    </ul>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    #list-container{
        gap: $filmGap;

        border-top: 2px solid;
    }




</style>