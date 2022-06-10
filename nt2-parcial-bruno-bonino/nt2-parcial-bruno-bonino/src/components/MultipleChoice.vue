<template >

  <section class="multiple-choice">
    <h1 class="badge-success text-uppercase">Multiple Choice</h1>

    <!-- MULTIPLE CHOICE -->
    <div class="table-responsive">
      <table class="table table-light">
         <thead>
            <tr >
              <th scope="col">Numero de pregunta </th>
              <th scope="col">Respuesta </th>
            </tr>
          </thead>
          <tbody >
            <tr class="text-uppercase" v-for="(pregunta,index) in preguntas" :key="index">
              
              <td >{{pregunta.numero}}</td>

              <!-- PREGUNTA 1 -->
              <td v-if ='index === 0'>{{pregunta.respuesta[2] }}</td>

              <!-- PREGUNTA 2 -->
              <td v-else-if ='index === 1'>{{pregunta.respuesta[2]  }}</td>

              <!-- PREGUNTA 3 -->
              <td v-else >{{pregunta.respuesta[1] }}</td>
            </tr>
          </tbody>
      </table>
      </div> 
  </section>

</template>

<script >

  export default  {
    name: 'multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
          preguntas: [
            {numero: 1 , respuesta: ['a',' b',' c',' d',' e']},
            {numero: 2 , respuesta: ['a',' b',' c',' d'] },
            {numero: 3 , respuesta: ['a',' b',' c',' d'] },
          ],
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .multiple-choice {

  }
</style>
