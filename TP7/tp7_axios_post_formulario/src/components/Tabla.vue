<template >

  <section class="Tabla">
     
    <h3 class="h3 my-5 badge-success">TABLA DE DATOS </h3>

    <div v-if="alumnos.length" class="table-responsive jumbotron">
      <table class="table table-info">
         <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(alumno,index) in alumnos" :key="index" >
              <td>{{alumno.id}}</td>
              <td>{{alumno.nombre}}</td>
              <td>{{alumno.edad}}</td>
              <td>{{alumno.email}}</td>
            </tr>
          </tbody>
      </table>
      </div> 
      <h4 v-else class="alert alert-danger">Sin notas ingresadas por el momento</h4>
  </section>

</template>

<script >
import axios from 'axios';

  export default  {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'tabla',
    props: [],
    mounted () {
      this.getInformation();
    },
    data () {
      return {
        alumnos: [],
        url: 'https://628fcb460e69410599e2e8b1.mockapi.io/users',
      }
    },
    methods: {
      // UTILIZO SINTAXIS ASYNC AND AWAIT
      async getInformation() {
        const { data } = await axios(this.url);
        console.log(data);
        data.forEach(element => this.alumnos.push(element) );
      }

      //  UTILIZO SINTAXIS THEN AND CATCH
      //  getInformation() {
      //   axios(this.url)
      //   .then ( data => {
      //      data.data.forEach(element => this.alumnos.push(element) );
      //    })
      //    .catch ( e => console.error(e));
      //  }
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .tabla {

  }
</style>
