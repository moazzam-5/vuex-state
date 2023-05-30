<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue"
export default {
  components:{
    AppHeader,
    AppFooter
  }
}

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: aliceblue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
