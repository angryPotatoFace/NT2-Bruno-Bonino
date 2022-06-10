import Vue from 'vue'
import VueForm from 'vue-form'

const option = {
    validators: {
        'caracteres-min': function(value) {
            return value.length >= 3
        },
        'caracteres-max': function(value) {
            return value.length <= 15
        },
        'numero-menor': function(value) {
            return 0 <= value;
        },
        'numero-mayor': function(value){
            return value <= 10;
        },
        'sin-espacios': function(value) {
            return !value.includes(' ')
        },
    }
}

Vue.use(VueForm,option);