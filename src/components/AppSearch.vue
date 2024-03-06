<script>

import {store} from '../store.js';

export default{

    data() {
        return  {
            store,
        }
    },

    
}


</script>

<template>

    <div class="container-fluid py-3 d-flex gap-2 ">
        <input type="text" name="SearchBar" v-model="store.inputSearch">
        <button @click="$emit('search')" class="btn btn-outline-danger fw-bold">Cerca</button>
    </div>

</template>

<style lang="scss">




</style>
