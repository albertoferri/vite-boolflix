<script>
export default{
    name: 'AppSerieItem',

    props: {
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
  

    <li class="serie bg-light rounded-4">
        <h5>Titolo:  {{ serie.name }} </h5>
        <h5>Titolo originale:  {{ serie.original_name }}</h5>
        <img class="img-fluid" :src="flagImage" :alt="serie.original_language">
        <h5>voto:  {{ serie.vote_average }}</h5>
    </li>



</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;



.serie{
    @include col-center;
    gap: $filmGap;
    text-align: center;
    width: calc(100% / 5  - $filmGap);

    padding: 10px;
    color: #212529;


    list-style-type: none;
    

    
}

</style>