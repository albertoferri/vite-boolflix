<script>

import {store} from './store';

import AppSearch from './components/AppSearch.vue';
import AppFilmList from './components/AppFilmList.vue';

export default{
  data() {
    return {

      store,
    }
  },

  components: {
    AppSearch,
    AppFilmList,
  }, 
  
  

  methods: {

    // searchFilm() {

    //   axios.get('https://api.themoviedb.org/3/search/movie?api_key=98ec842db674b61824e779cc047239d7&query=ritorno+al+futuro')
    //     .then(res => {
    //       console.log(res.data.results[0])

    //       this.store.films = res.data.results;
    //     });

    //   console.log("Ricerca percepita")
    // },
  },


}



</script>

<template>

<div class="container">
  <AppSearch></AppSearch>
  <AppFilmList></AppFilmList>

</div>
 
</template>

<style lang="scss">

</style>
