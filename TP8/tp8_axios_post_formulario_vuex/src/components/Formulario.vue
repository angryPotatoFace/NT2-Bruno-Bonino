<template >
  <section class="src-components-formulario">
    
    <vue-form class="jumbotron" :state="formState" @submit.prevent="onSubmit()">
        <!--CAMPO NOMBRE -->
        <validate tag="div">  
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            v-model.trim="formData.nombre" 
            name="nombre"
            autocomplete="off"
            class="form-control"
            required
            sin-espacios
            :minlength="minLengthNombre"
            :maxlength="maxLengthNombre"
            />

            <field-messages class="my-3" name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div slot="sin-espacios" class="alert alert-danger mt-1">Este campo no debe contener espacios en blanco</div>              <div slot="minlength" class="alert alert-danger mt-1">
               Este campo debe de tener al menos {{minLengthNombre}} caracteres.
              </div>
              <div class="alert alert-danger mt-1" v-if=" formData.nombre.length === maxLengthNombre" >
               Este campo debe tener menos de {{maxLengthNombre}} caracteres.
              </div>
            </field-messages>
        </validate>
        <br>

        <!-- CAMPO EDAD -->
        <validate tag="div">  
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            v-model.trim="formData.edad" 
            name="edad"
            autocomplete="off"
            class="form-control"
            required
            :min="minEdad"
            :max="maxEdad"
            />

            <field-messages class="my-3" name="edad" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div slot="min" class="alert alert-danger mt-1">La ingresada no pude ser menor a {{minEdad}}</div>
              <div slot="max" class="alert alert-danger mt-1">La ingresada no pude ser mayor a {{maxEdad}}</div>
            </field-messages>
        </validate>
        <br>


        <!-- CAMPO EMAIL -->
        <validate tag="div">  
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model.trim="formData.email" 
            name="email"
            autocomplete="off"
            class="form-control"
            required
            />

            <field-messages class="my-3" name="email" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div slot="email" class="alert alert-danger mt-1">Email invalido</div>
            </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-3 " :disabled="formState.$invalid" type="submit">Submit</button>
    </vue-form>

    <!-- TABLA DE DATOS -->
    <!-- <h3 class="h3 my-5 badge-success">Alumnos Ingresados</h3>

    <div v-if="alumnos.length" class="table-responsive jumbotron">
      <table class="table table-info">
         <thead>
            <tr>
              <th scope="col">Alumno</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(alumno,index) in alumnos" :key="index" :style="{ backgroundColor: calcularColor(alumno.nota), }">
              <td>{{alumno.nombre + " " + alumno.apellido}}</td>
              <td>{{alumno.nota}}</td>
            </tr>
          </tbody>
          <tr>
            <td :style="{ backgroundColor: calcularColor(calcularPromedio()), }">Promedio notas de los Alumnos: {{ calcularPromedio() }} </td>
            <td :style="{ backgroundColor: calcularColor(calcularPromedio()), }"></td>
          </tr>
      </table>
      </div> 
      <h4 v-else class="alert alert-danger">Sin notas ingresadas por el momento</h4> -->

  </section>

</template>

<script >
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: {
          id: '',
          nombre: '',
          edad: '',
          email: ''
        },
        alumnos: [],
        id: 1,
        minLengthNombre: 3,
        maxLengthNombre: 15,
        minEdad: 18,
        maxEdad: 120,
        url: 'https://628fcb460e69410599e2e8b1.mockapi.io/users',
      }
    },
    methods: {
      onSubmit() {
        //this.$store.dispatch('adsas');
        this.formData.id = this.id++;
        this.$store.dispatch('cargarDataApi', this.formData);
        this.formData = this.limpiarFormulario();
        this.formState._reset();
      },
      limpiarFormulario(){
        return {
          id: '',
          nombre: '',
          edad: '',
          email: ''
        }
      },
      calcularColor(nota){
        let color = ''
        
        if( nota >= 7) color= 'green'
        else if ( nota<= 3) color = 'red'
        else color = 'yellow'

        return color;
      },
      calcularPromedio(){
        let acumulado = 0;
        let index = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
         acumulado += Number(this.alumnos[i].nota);
         index++;
        }
        return acumulado/index;
      }
    },
    computed: {
    }
}


</script>

<style scoped lang=" css">

</style>