<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <!-- RUTA FORMULARIO -->
          <router-link to="/Formulario">
            <a class="nav-link" href="/Formulario">Formulario</a>
          </router-link>
        </li>

        <li class="nav-item">
          <!-- RUTA TABLA -->
          <router-link to="/Tabla">
            <a class="nav-link" href="/Tabla">Tabla</a>
          </router-link>
        </li>

      </ul>
    </div>
  </nav>

</template>

<script >

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>

