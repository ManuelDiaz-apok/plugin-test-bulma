<template>
    <div class="columns">


    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Testing",

        data() {
            return {
                instruments: [],
            }
        },

        created() {
            axios.get("/api/instruments")
                .then(response => {
                    this.instruments = response.data.instruments
                })

        },
    }
</script>