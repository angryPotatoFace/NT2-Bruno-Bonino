import axios from "axios"

export default {
  name: 'src-components-show-mock-api',
  components: {},
  props: [],
  data () {
    return {
      info: []
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSubmitAxios: function(){
        axios.get('https://628fcb460e69410599e2e8b1.mockapi.io/users')
        .then( res => {
          res.data.forEach(element => this.info.push(element) );
        })
        .catch(err => console.log(err))
    },
    onSubmitFetch: function(){
      fetch('https://628fcb460e69410599e2e8b1.mockapi.io/users')
      .then(res => res.json())
      .then( data => {
        data.forEach( element => this.info.push(element));
      });
    },
    onSubmitXMLH: function(){
      const refInfo = this.info;
      var req = new XMLHttpRequest();
      req.open('GET','https://628fcb460e69410599e2e8b1.mockapi.io/users',true);
      // eslint-disable-next-line no-unused-vars
      req.onreadystatechange = function(event) {
        if (req.readyState == 4){
          if(req.status == 200){
            const data = JSON.parse(req.response);
            data.forEach( element => refInfo.push(element));
          }else{
            console.log("Error loading page");
          }
        }
      }
      req.send(null);
    },
    clearInfo: function(){
      this.info = [];
    },

  }
}


