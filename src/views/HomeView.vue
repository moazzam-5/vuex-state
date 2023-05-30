<template>
  <div >
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '../components/Product-List-One.vue';

import ProductListTwo from '../components/Product-List-Two.vue';


export default {
  name: 'HomeView',
  components: { ProductListOne, ProductListTwo },
  
  data(){
    return{
      
    }
  }
}
</script>
