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

    <ul id="list-container" class="d-flex flex-wrap justify-content-around p-3 mb-0">
        <AppFilmItem
        v-for="currentFilm in store.films"
        :film="currentFilm"
        :key="currentFilm"
        ></AppFilmItem>
    </ul>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    #list-container{
        gap: $filmGap;
    }




</style>