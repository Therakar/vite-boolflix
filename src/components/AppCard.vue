<script>
    import axios from "axios"; //importo axios
    import { store } from "../store"; //importo store.js

    export default {
        name: "AppCard",
        props: {
            info: Object,
        },
        computed: {
            title() {
                return this.info.title ? this.info.title : this.info.name;
            },
            poster() {
                return this.info.poster_path
                    ? `https://image.tmdb.org/t/p/w342${this.info.poster_path}`
                    : "https://via.placeholder.com/342x485?text=Locandina+Non+Disponibile";
            }, 

        }
    }
</script>

<template>
    <div>
        <img :src="poster" :alt="title" /> <!--locandina-->
        <h3>{{title}}</h3> <!--titolo-->
        <h4>{{info.original_title || info.original_name}}</h4> <!--titolo originale-->
        <h3>{{info.vote_average}}</h3>
    </div>
</template>

<style lang="scss">

</style>