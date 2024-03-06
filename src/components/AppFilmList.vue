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

    <ul>
        <AppFilmItem
        v-for="currentFilm in store.films"
        :film="currentFilm"
        ></AppFilmItem>
    </ul>
  
</template>

<style lang="scss">


</style>