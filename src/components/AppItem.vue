<script>
export default{
    name: 'AppItem',

    props: {
        film: Object,
        serie: Object,
        width: String,
    },
    computed: {
        flagImage() {
            if (this.film) {
                return `./img/${this.film.original_language}.png`;
            } else if (this.serie) {
                return `./img/${this.serie.original_language}.png`;
            }
        },
        stelle() {
            // Trasforma il voto da 1-10 a 1-5
            if (this.film) {
                return Math.round(this.film.vote_average / 2);
            } else if (this.serie) {
                return Math.round(this.serie.vote_average / 2);
            }
        }
    },

    methods: {
        stampaStelle() {
            let stellePiene = '';
            let stelleVuote = '';

            // Stampa le stelle piene
            for(let i = 0; i < this.stelle; i++) {
                stellePiene += '<i class="fas fa-star text-warning"></i>'; 
            }

            // Stampa le stelle vuote
            for(let i = this.stelle; i < 5; i++) {
                stelleVuote += '<i class="fas fa-star"></i>'; 
            }

            return "Voto: " + stellePiene + stelleVuote;
        }
    }
}
</script>

<template>
    <!-- componente singolo -->
    <li class="film rounded-4" :style="{ width: width }">
        <img class="w-100" tabindex="0" :src="film && film.poster_path ? 'https://image.tmdb.org/t/p/w342' + film.poster_path : 'https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg'" alt="">
        <div id="info" class="text-white p-2 overflow-y-auto">
            <h5><strong>Titolo:</strong>  {{ film.name || film.title }} </h5>
            <h5><strong>Titolo originale:</strong>  {{ film.original_name || film.original_title }} </h5>
            <h5 id="stars" v-html="stampaStelle()"></h5>
            <img class="img-fluid" :src="flagImage" :alt="film.original_language || serie.original_language">
            <p><strong>Trama:</strong> <small>{{ film.overview }}</small></p>
        </div>
    </li>
</template>



<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;



.film{
    @include col-center;
    text-align: center;
    // width: calc(100% / 4);

    color: #212529;

    position: relative;


    list-style-type: none;


    #info {
        display: none;
        position: absolute;
        bottom: 10px;
        background-color: #212529d5;
        width: 90%;
        max-height: 90%;

        text-align: left;
    }
    
    img:focus + #info {
    display: block;
}
    

    
}

</style>