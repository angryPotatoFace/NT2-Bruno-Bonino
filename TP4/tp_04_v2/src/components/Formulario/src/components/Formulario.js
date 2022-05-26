export default {
  name: 'src-components-formulario',
  components: {
  },
  props: [],
  data () {
    return {
    formstate: {},
    model: {
      name: '',
      age: '',
      email: '',
    },
    personas:[ ],
    minLenghtName: 5,
    maxLenghtName: 15,
    minAge: 18,
    maxAge: 120
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    onSubmit: function () {
      if( this.formstate.$valid ){
        this.personas.push( {...this.model});
        this.model = this.getResetData();
        this.formstate._reset();
      }
    },
    getResetData() {
      return {
        name: null,
        age: null,
        email: null
      }
  }
}
}