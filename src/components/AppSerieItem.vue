<script>
export default{
    name: 'AppSerieItem',

    props: {
        serie: Object,
    },
    computed: {
        flagImage() {
            return `./img/${this.serie.original_language}.png`;
        },
        stelle() {
            // Trasforma il voto da 1-10 a 1-5
            return Math.round(this.serie.vote_average / 2);
        }
    },
    methods: {
        stampaStelle() {
            let stellePiene = '';
            let stelleVuote = '';

            // Stampa le stelle piene
            for(let i = 0; i < this.stelle; i++) {
                stellePiene += '<i class="fas fa-star"></i>'; // Stampa una stella piena
            }

            // Stampa le stelle vuote
            for(let i = this.stelle; i < 5; i++) {
                stelleVuote += '<i class="far fa-star"></i>'; // Stampa una stella vuota
            }

            return stellePiene + stelleVuote;
        }
    }
}
</script>


<template>
    <li class="serie bg-light rounded-4">
        <h5>Titolo:  {{ serie.name }} </h5>
        <h5>Titolo originale:  {{ serie.original_name }}</h5>
        <img class="img-fluid" :src="flagImage" :alt="serie.original_language">
        <div> <i class="fa-solid fa-truck-fast"></i> </div>
    </li>
</template>


<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;



.serie{
    @include col-center;
    gap: $filmGap;
    text-align: center;
    width: calc(100% / 3  - $filmGap);

    padding: 10px;
    color: #212529;


    list-style-type: none;
    

    
}

</style>