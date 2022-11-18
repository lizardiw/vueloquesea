<template>
  <div class="container my-4">
    <form>
      <div class="input-group mb-3">
        <span class="input-group-text">Nombre</span>
        <input v-model="tarea.nombre" type="text" class="form-control">
        <!--<input  type="text" class="form-control">-->
      </div>
      <!-- Correo -->
      <div class="input-group mb-3">
        <span class="input-group-text">Descripcion</span>
        <input v-model="tarea.descripcion" type="text" class="form-control">
        <!--<input  type="text" class="form-control">-->
      </div>
      <!-- Botone Guardar -->
      <div class="mt-3">
        <a class="btn btn-warning" href="#">
          <RouterLink to="/crudtareas">Regresar a Tareas</RouterLink>
        </a>&nbsp;
        <button @click.prevent="agregarDato()" class="btn btn-primary">Guardar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
//import { db } from "../main";
import { db, auth, storage } from '../firebaseDb'


export default {
  name: 'Home',
  data: () => ({
    tarea: {
      nombre: '',
      descripcion: ''
    }
  })
  ,
  methods: {
    // GET / OBTENER / Consulta instantánea 
    async agregarDato() {
      const docRef = await addDoc(collection(db, "tareas"), {
        nombre: this.tarea.nombre,
        descripcion: this.tarea.descripcion
      })
        .then(() => {
         // console.log("Documento añadido");
         // Vue.swal('Hello Vue world!!!');
         this.$swal("Excelente!", "Tarea registrada!", "success") // alertas

        })
        .catch(function (error) {
          console.error("Error al añadir la tarea! ", error);
        });
    },
    
  }
}
</script>

