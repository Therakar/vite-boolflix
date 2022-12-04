<script>
    import axios from "axios"; //importo axios
    import { store } from "../store"; //importo store.js

    export default {
        name: "AppCard",
        data () {
            return {
                store,
            }
        }
    }
</script>

<template>
    <div>
        <img :src="poster" :alt="title" />
        <h3>{{title}}</h3>
        <h4>{{info.original_title || info.original_name}}</h4>
    </div>
</template>

<style lang="scss">

</style>