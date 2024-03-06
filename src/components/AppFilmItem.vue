<script>
export default{
    name: 'AppFilmItem',

    props: {
        film: Object,
    }
}
</script>

<template>
  

    <li class="film">
        <h5> {{ film.title }} </h5>
        <h5>{{ film.original_title }}</h5>
        <h5>{{ film.original_language }}</h5>
        <h5>{{ film.vote_average }}</h5>
    </li>



</template>

<style lang="scss">
@use '../styles/variables' as *;


.film{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: calc(100% / 5  - $filmGap);


    list-style-type: none;
}

</style>