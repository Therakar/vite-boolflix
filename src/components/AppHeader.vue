<script>
    import axios from "axios"; //importo axios
    import { store } from "../store"; //importo store.js

    export default {
        name: "AppHeader",
        data () {
            return {
                store,
            }
        }
    };
    
</script>

<template> 

    <form @submit.prevent="$emit('performSearch')">
        <input type="text" placeholder="Inizia la ricerca..." v-model="store.textToSearch" required /> <!-- input dell'utente per la ricerca di film/serie -->
        <button type="submit">Cerca</button>
    </form>
    
</template>

<style lang="scss"> </style>