<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="'/images/${destination.image}'" alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script>
import sourceData from '@/data.json'
    export default {
        data(){
            return {
                destination : null
            }
        },
        computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        
        },
       
    },
    }
methods:{
    initData(){
        async ()=>{
                const response = await fetch('https://travel-dummy-api.netlify.app/${this.$route.params.slug}')
        this.destination = await response.json()
            }
    },


    async created(){
        this.initData()
       
    }
}
</sript>