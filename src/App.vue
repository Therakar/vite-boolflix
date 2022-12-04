
<script>
    import axios from "axios"; //importo axios
    import { store } from "./store"; //importo store.js

    import AppHeader from "./components/AppHeader.vue"; //importo il componente header
    import AppMain from "./components/AppMain.vue"; //importo il componente main

    export default {
        name: "App",
        components: {
            AppHeader, //registro il componente header
            AppMain, //registro il componente main
        },
        data () {
            return {
                store,
            }
        }
    }
</script>

<template>

    <AppHeader /> 
    <AppMain />
  
</template>

<style lang="scss" scoped></style>
