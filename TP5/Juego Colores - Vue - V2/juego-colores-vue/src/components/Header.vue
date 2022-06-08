<template >

  <section id="header" class="header my-3" >
    <h1 class="text-center text-uppercase">the great <br>
      <span id="colorDisplay" class="display-4">RGB</span> 
      <br>
      guessing game</h1>
  </section>
</template>

<script >

  export default  {
    name: 'src-components-header',
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
  .src-components-header {
    margin-bottom: 0!important;
  }
  .header {
    background-color: steelblue;
    color: white;
    margin-bottom: 0 !important;
    padding: 1rem;
  }

  h1 {
      margin-bottom: 0 !important;
      font-size: 1.7rem;
  }

</style>
