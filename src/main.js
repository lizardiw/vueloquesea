import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue3EasyDataTable from 'vue3-easy-data-table';
/*
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)
*/
import BootstrapVue3 from 'bootstrap-vue-3'

//import {db} from 'firebaseDb.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'vue3-easy-data-table/dist/style.css';
/*import 'vue3-easy-data-table/dist/style.css';*/

/*import './assets/main.css'*/

//app.use(VueSweetalert2);


const options = {
    confirmButtonColor: '#8F3E68',//color del boton de VueSweetalert2
    cancelButtonColor: '#ff7674',
  };

const app = createApp(App)

app.use(router).use(BootstrapVue3)

app.use(VueSweetalert2, options);
app.mount('#app')

app.component('EasyDataTable', Vue3EasyDataTable);







