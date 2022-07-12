<template >

  <section class="src-components-ejercicio">
    <h1>Final Nuevas Tecnologias 2 by  Bruno Bonino</h1>
    
    <div class="container">
      <span>Color: <input type="text" v-model="color"> </span> 
      <span>Fondo: <input type="text" v-model="fondo"> </span> 
      <span>Size : <input type="text" v-model="size"> </span>
      <hr>
      <p> Texto: <input :style="{color: color,background: fondo, fontSize: size}" type="text" v-model.trim="texto"> </p>
      <p> Cantidad de Palabras: {{ contarPalabras }} </p>
    </div>
  
    <table>
      <thead>
        <tr>  
          <th>Numero de Pregunta </th>
          <th> Respuesta </th>
        </tr>
      </thead>
      <tbody>
        <tr>  
          <td> 1 </td>
          <td> B </td>
        </tr>
         <tr>  
          <td> 2 </td>
          <td> C </td>
        </tr>
        <tr>  
          <td> 3 </td>
          <td> B </td>
        </tr>
        <tr>  
          <td> 4 </td>
          <td> D </td>
        </tr>
        <tr>  
          <td> 5 </td>
          <td> D </td>
        </tr>
      </tbody>

    </table>

  </section>

</template>

<script >

  export default  {
    name: 'src-components-ejercicio',
    props: [],
    mounted () {

    },
    data () {
      return {
        color: "",
        fondo: "",
        size: "",
        texto: ""
      }
    },
    methods: {

    },
    computed: {
      contarPalabras() {
      let cantPalabras = 0
        if( this.texto !== "") {
          const palabras = this.texto.split(" ");
          cantPalabras = palabras.length;
        }
      return cantPalabras;
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-ejercicio {

  }
  .container{
    text-align: left;
    margin-left: 10px;
    margin-top: 30px;
  }
  span {
    margin-right: 20px;
  }
</style>
