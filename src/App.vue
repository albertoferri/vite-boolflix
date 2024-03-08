<script>
import axios from 'axios'


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
  created() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=98ec842db674b61824e779cc047239d7')
      .then(res => {
          console.log('film generati all\'inizio: ', res.data.results);
          this.store.films = res.data.results;
      });

      axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=98ec842db674b61824e779cc047239d7')
      .then(res => {
          console.log('serie tv generate all\'inizio: ', res.data.results);
          this.store.series = res.data.results;
      });
  },

}



</script>

<template>

<div class="container-fluid mb-5 px-0">

  <AppSearch></AppSearch>
  <AppFilmList></AppFilmList>

</div>
 
</template>

<style lang="scss">

</style>
