import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {name:'banana',price:'100'},
      {name:'Apple',price:'200'},
      {name:'Mango',price:'300'}
    ],
  },
  getters: {
  },
  mutations: {
    reducePrice:(state,payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  actions: {
    reducePrice:(context,payload) =>{
      context.commit('reducePrice',payload)
    }
  },
  modules: {
  }
})
