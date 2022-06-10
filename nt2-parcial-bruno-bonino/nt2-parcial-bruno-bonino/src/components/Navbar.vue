<template >

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <!-- RUTA FORMULARIO -->
            <router-link to="/formulario">
              <a class="nav-link" href="/formulario">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <!-- RUTA MULTIPLE-CHOICE -->
            <router-link to="/multiple-choice">
              <a class="nav-link" href="/multiple-choice">Multiple-Choice</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>

</template>

<script >

  export default  {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'navbar',
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
  .navbar {

  }
</style>
