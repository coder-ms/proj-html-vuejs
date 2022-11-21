<template>
    <!--
    <div v-if="store.loading">
        Sto caricando i dati
    </div>
    <div class="struct" v-if="!store.loading">
        <div class="cardSection" v-for="(item, index) in store.movieList" :key="item.id">
            <MovieComponent :movieTag="item" />
        </div>
    </div>
    -->
</template>

<script>

import { store } from '../store';

export default {

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>