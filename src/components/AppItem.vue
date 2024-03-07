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
            return `./img/${this.serie.original_language}.png`;
        },
        stelle() {
            // Trasforma il voto da 1-10 a 1-5
            return Math.round(this.film.vote_average / 2);
            return Math.round(this.serie.vote_average / 2);
        }
    },

    methods: {
        stampaStelle() {
            let stellePiene = '';
            let stelleVuote = '';

            // Stampa le stelle piene
            for(let i = 0; i < this.stelle; i++) {
                stellePiene += '<i class="fas fa-star"></i>'; 
            }

            // Stampa le stelle vuote
            for(let i = this.stelle; i < 5; i++) {
                stelleVuote += '<i class="far fa-star"></i>'; 
            }

            return stellePiene + stelleVuote;
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
            <h5 id="stars" v-html="stampaStelle()"></h5>
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
    width: calc(100% / 5  - $filmGap);

    padding: 10px;
    color: #212529;


    list-style-type: none;
    

    
}

</style>