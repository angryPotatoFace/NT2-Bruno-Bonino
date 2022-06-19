import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        url: 'https://628fcb460e69410599e2e8b1.mockapi.io/users',
        alumnos: []
    },
    actions: {
        cargarDataApi({commit}, data){
            commit('postDataApi',data);
        },
        async obtenerDatosApi( { commit }){
            const { data } = await axios(this.state.url);
            commit('cargarDatosApi',data);
        }
    },
    mutations: {
        postDataApi( state, data){
            try {
                console.log(data)
                axios.post(state.url,data, { 'content-type': 'application/json'});
            }catch(e){
                console.error(e);
            }
        },
        cargarDatosApi( state , data ){
            console.log(data);
            state.alumnos = [];
            data.forEach(element => state.alumnos.push(element) );
        }
    },
})