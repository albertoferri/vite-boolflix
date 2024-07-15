<!-- -----  JS  ------ -->
<script>
import {store} from '../store.js';

import AppItem from './AppItem.vue';

export default{
    name: 'AppFilmList',

    data() {
        return {
            store,
            //   dati della select
            options: [
                { value: 3, label: '3 Colonne' },
                { value: 4, label: '4 Colonne' },
                { value: 5, label: '5 Colonne', selected: true },
                { value: 6, label: '6 Colonne' },
            ],
            columns: 5,
        };
    },

    components: {
        AppItem,
    },

    computed: {
        // calcola la larghezza delle card
        containerWidth() {
            return `calc(100% / ${this.columns})`;
        },
    },
}
</script>

<template>

    <div class="container-fluid px-0">
        
        <div class="films bg-dark text-white mb-3 rounded-bottom-4 px-4">
            <!-- select delle colonne -->
            <div class="select d-flex justify-content-end">
                <select class="border-danger border-2 rounded-2 text-center mb-2" v-model="columns">
                    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
                </select>
            </div>
            <h3 class="px-3">FILM</h3>
            <!-- lista dei film -->
            <ul id="film-container" class="d-flex flex-wrap  row-gap-3 p-3 mb-0 bg-dark rounded-bottom-4 border-top border-3 border-danger">
                <AppItem
                v-for="currentFilm in store.films"
                :film="currentFilm"
                :key="currentFilm.id"
                :width="containerWidth"
                class="item"
                ></AppItem>
            </ul>
        </div>

        <!-- lista delle serie tv -->
        <div class="series bg-dark text-light rounded-top-4 px-4">
            <h3 class="p-3 border-bottom border-danger border-3">SERIE TV</h3>
            <ul id="series-container" class="d-flex flex-wrap row-gap-3 p-3 mb-0 bg-dark rounded-4 border-danger">
                <AppItem
                v-for="currentSerie in store.series"
                :film="currentSerie"
                :key="currentSerie.id"
                :width="containerWidth"
                class="item"
                ></AppItem>
            </ul>
        </div>

    </div>
  
</template>

<style lang="scss">
@use '../styles/variables' as *;


    .films{

        select{
            width: 150px;
            padding: 6px 8px;
            margin-bottom: 1em;
        }

    }

    .item{
        cursor: pointer;
        padding: 0 5px;
    }

</style>