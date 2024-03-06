<script>
export default{
    name: 'AppFilmItem',

    props: {
        film: Object,
    }
}
</script>

<template>
  

    <li class="film ">
        <h5>Titolo:  {{ film.title }} </h5>
        <h5>Titolo originale:  {{ film.original_title }}</h5>
        <h5>lingua:  {{ film.original_language }}</h5>
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
    width: calc(100% / 3  - $filmGap);


    list-style-type: none;
}

</style>