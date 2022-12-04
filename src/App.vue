
<script>
    import axios from "axios"; //importo axios
    import { store } from "./store"; //importo store.js

    import AppHeader from "./components/AppHeader.vue"; //importo il componente header
    import AppMain from "./components/AppMain.vue"; //importo il componente main

    import AppError from "./components/AppError.vue";//importo il componente AppError
    export default {
        name: "App",
        components: {
            AppHeader, //registro il componente header
            AppMain, //registro il componente main
            AppError, //registro il componente AppError
        },  
        data () {
            return {
                store,
                error: false,
            }
        },
        methods: {
            getData() {
                axios.get("https://api.themoviedb.org/3/search/movie",{
                    params: {
                        api_key: "c262cf69bfb7c0035c78b3e71fa62b93",
                        query: this.store.textToSearch,
                        language: "it-IT"
                    }
                }).then((response) => {
                    this.store.movies = response.data.results;
                })
            } 
        }
    }
</script>

<template>

    <AppHeader @performSearch="getData"/> 
    <AppError />
    <AppMain />
  
</template>

<style lang="scss" scoped></style>
