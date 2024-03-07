<script>
export default{
    name: 'AppFilmItem',

    props: {
        film: Object,
    },
    computed: {
        flagImage() {
            return `./img/${this.film.original_language}.png`;
        }
    }
}
</script>

<template>
  

    <li class="film bg-light rounded-4">
        <img class="img-fluid" :src="film.poster_path ? 'https://image.tmdb.org/t/p/w342' + film.poster_path : 'https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg'" alt="">
        <div id="info">
            <h5>Titolo:  {{ film.title }} </h5>
            <h5>Titolo originale:  {{ film.original_title }}</h5>
            <img class="img-fluid" :src="flagImage" :alt="film.original_language">
            <h5>voto:  {{ film.vote_average }}</h5>
        </div>
    </li>



</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;



.film{
    @include col-center;
    gap: $filmGap;
    text-align: center;
    width: calc(100% / 3  - $filmGap);

    padding: 10px;
    color: #212529;


    list-style-type: none;
    

    
}

</style>