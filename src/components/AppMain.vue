<script>

    import axios from "axios"; //importo axios
    import { store } from "../store"; //importo store.js
    import AppCard from "./AppCard.vue"; //importo le card

    export default {
        name: "AppMain",
        components: {
            AppCard,
        },
        data () {
            return {
                store,
            }
        }
    }
</script>

<template>
    <section>
        <h2>Movies</h2>
        <AppCard v-for="movie in store.movies" :info="movie"/> <!--cicla sull'array dei film-->
    </section>
    <section>
        <h2>Series</h2>
        <AppCard v-for="serie in store.series" :info="serie"/> <!--cicla sull'array delle serie-->
    </section>
    
</template>

<style lang="scss">

</style>