<template>
    <div>
        <h1>List One</h1>
        <ul>
            <li v-for ="product in products" :key="product.name">
                <span>{{ product.name }}</span><br>
                <span>{{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePrice(5)">Reduce</button>
    </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    methods:{
        reducePrice:function(amount){
            this.$store.dispatch('reducePrice',amount);
        }
    }
}
</script>

<style>
</style>