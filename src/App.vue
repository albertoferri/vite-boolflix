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
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=98ec842db674b61824e779cc047239d7&query=ritorno+al+futuro')
      .then(res => {
          console.log('film generati all\'inizio: ', res.data.results);
          this.store.films = res.data.results;
          console.log(this.store.films);
      });
  },

}



</script>

<template>

<div class="container-lg container-sm-fluid py-5">

  <AppSearch></AppSearch>
  <AppFilmList></AppFilmList>

</div>
 
</template>

<style lang="scss">

</style>
