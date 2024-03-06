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

    <ul class="d-flex flex-wrap justify-content-between p-3 mb-0">
        <AppFilmItem
        v-for="currentFilm in store.films"
        :film="currentFilm"
        :key="currentFilm"
        ></AppFilmItem>
    </ul>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;

ul{
    gap: $filmGap;
}







</style>