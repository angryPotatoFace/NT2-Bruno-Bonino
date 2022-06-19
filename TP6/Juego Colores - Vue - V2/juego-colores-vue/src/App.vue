<template>
  <div id="app jumbotron">
    <Header />
    <Navigator />
    <Square />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Square from './components/Square.vue'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Navigator,
    Square,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body {
  background-color: #232323 !important;
  font-family: "Montserrat", "Avenir" !important;
  font-size: 2em !important;
}
</style>
