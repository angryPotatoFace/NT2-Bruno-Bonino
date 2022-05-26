
<template>
  <div class="jumbotron" id="app">
    <h1> Bienvenido</h1>
    <hr>
    <hr>
    <br>
    <Formulario />
    <MockApi />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/Formulario/indexFormulario.vue'
import MockApi from './components/ShowMockApi/indexShowMockApi.vue'

export default {
  name: 'App',
  components: {
    Formulario,
    MockApi
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
