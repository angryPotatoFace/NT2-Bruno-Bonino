<template >

  <section class="formulario">

    <h1 class="badge-success text-uppercase">Formulario</h1>
    <vue-form class="my-3" :state="formState" @submit.prevent="onSubmit()">
      
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
            caracteres-min
            caracteres-max
            :maxlength="maxLength"
            />

          <field-messages class="my-3" name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">Este campo no debe contener espacios en blanco</div>
            <div slot="caracteres-min" class="alert alert-danger mt-1">
              Este campo debe de tener al menos 3 caracteres.
            </div>
            <div slot="caracteres-max" class="alert alert-danger mt-1" >
              Este campo debe tener como máximo 15 caracteres
            </div>
          </field-messages>
      </validate>
      <br>

      <!-- CAMPO APELLIDO -->
      <validate tag="div">  
        <label for="apellido">Apellido</label>
        <input 
          type="text" 
          id="apellido" 
          v-model.trim="formData.apellido" 
          name="apellido"
          autocomplete="off"
          class="form-control"
          required
          sin-espacios
          caracteres-min
          caracteres-max
          :maxlength="maxLength"
          />

          <field-messages class="my-3" name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">Este campo no debe contener espacios en blanco</div>
            <div slot="caracteres-min" class="alert alert-danger mt-1">
              Este campo debe de tener al menos 3 caracteres.
            </div>
            <div slot="caracteres-max" class="alert alert-danger mt-1">
              Este campo debe tener como máximo 15 caracteres.
            </div>
          </field-messages>
      </validate>
      <br>


      <!-- CAMPO NOTA -->
      <validate tag="div">  
        <label for="nota">Nota</label>
        <input 
          type="number" 
          id="nota" 
          v-model.trim="formData.nota" 
          name="nota"
          autocomplete="off"
          class="form-control"
          required
          numero-mayor
          numero-menor
          />

          <field-messages class="my-3" name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="numero-menor" class="alert alert-danger mt-1">La nota debe ser mayor y/o igual a 0 </div>
            <div slot="numero-mayor" class="alert alert-danger mt-1">La nota debe ser menor y/o igual a 10 </div>
          </field-messages>
      </validate>
      <br>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Submit</button>
    </vue-form>

    <!-- TABLA DE DATOS -->
    <h3 class="h3 my-5 badge-success text-uppercase">Alumnos Ingresados</h3>

    <div v-if="alumnos.length" class="table-responsive">
      <table class="table table-light">
         <thead>
            <tr >
              <th scope="col">Alumno</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(alumno,index) in alumnos" :key="index">
              <td>{{alumno.nombre + " " + alumno.apellido}}</td>
              <td :style="{ color: calcularColor(alumno.nota), }">{{alumno.nota}}</td>
            </tr>
          </tbody>
          <tr >
            <td :style="{ color: calcularColor(calcularPromedio()), }">Promedio Notas Alumnos </td>
            <td :style="{ color: calcularColor(calcularPromedio()), }"> {{ calcularPromedio() }} </td>
          </tr>
      </table>
      </div> 
      <h4 v-else class="alert alert-danger">Sin notas ingresadas por el momento</h4>

  </section>

</template>

<script >

  export default  {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
          formState: {},
          formData: {
            nombre: "",
            apellido: "",
            nota: "",
          },
          alumnos: [],
          maxLength: 16,
      }
    },
    methods: {
      onSubmit(){
        this.alumnos.push( {...this.formData} );
        this.formData = this.limpiarFormulario();
        this.formState._reset();
        console.log(this.alumnos);
      },
      limpiarFormulario(){
        return {
          nombre: "",
          apellido: "",
          nota: "",
        }
      },
      calcularColor(nota){
        var color = ""
        if (nota>=7) color = 'green'
        else if (nota <4) color = 'red'
        else color = 'gold'
        return color;
      },
      calcularPromedio(){
        var acum = 0;
        const index = this.alumnos.length;

        this.alumnos.forEach( alumno => {
          acum +=  Number(alumno.nota);
        })

        console.log('========= VALORES DEL PROMEDIO ===============');
        console.log( acum);
        console.log( index);
        return acum / index; 
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .formulario {
    
  }
</style>
