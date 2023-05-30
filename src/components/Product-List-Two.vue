<template>
    <div>
        <h1>List Two</h1>
        <ul>
            <li v-for ="product in products" :key="product.name">
                <span>{{ product.name }}</span><br>
                <span>{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products
        }
    }
}
</script>

<style>
</style>