<script>
export default{
    name: 'AppFilmItem',

    props: {
        film: Object,
        serie: Object,
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
        <h5>Titolo:  {{ film.title || serie.name }} </h5>
        <h5>Titolo originale:  {{ film.original_title || serie.original_name }}</h5>
        <img class="img-fluid" :src="flagImage" :alt="film.original_language">
        <h5>voto:  {{ film.vote_average }}</h5>
    </li>



</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;



.film{
    @include col-center;
    gap: $filmGap;
    text-align: center;
    width: calc(100% / 5  - $filmGap);

    padding: 10px;
    color: #212529;


    list-style-type: none;
    

    
}

</style>