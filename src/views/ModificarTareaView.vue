<template>
  <div class="container my-4">
    <form >
      <div class="input-group mb-3">
        <span class="input-group-text">Nombre 
        </span>
        <input v-model="tarea.nombre"  type="text" class="form-control">
        <!--<input  type="text" class="form-control">--> 
      </div>
      <!-- Correo -->
      <div class="input-group mb-3">
        <span class="input-group-text">Descripción</span>
        <input v-model="tarea.descripcion" type="text" class="form-control">
        <!--<input  type="text" class="form-control">-->
      </div>
      <!-- Botone Guardar -->
      <div class="mt-3">
        <a class="btn btn-warning" href="#">
          <RouterLink to="/crudtareas">Regresar a Tareas</RouterLink>
        </a>&nbsp;
        <button @click.prevent="actualizarDato(tarea)" class="btn btn-primary">Guardar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { collection, getDocs, addDoc,doc, updateDoc } from 'firebase/firestore/lite';
//import { db } from "../main";
import { db, auth, storage } from '../firebaseDb'

console.log("hola");
export default {
  name: 'Home',
  data: () => ({
    tarea:{  
    }
  }),
  methods: {
    // GET / OBTENER / Consulta instantánea 
        async actualizarDato (tarea) {
        const elemento = doc(db, "tareas", tarea.id );
        await updateDoc(elemento, {
          nombre: tarea.nombre,
              descripcion: tarea.descripcion
          })
              .then(() => {
              this.$swal("Excelente!", "Tarea Actualizada!", "success") // alertas
              })
              .catch(function (error) {
                console.error("Error al actualizar la tarea! ", error);
              });
          },
        },  
  mounted() {
        this.tarea = {
            nombre : this.$route.params.nombre,
            descripcion: this.$route.params.descripcion,
            id: this.$route.params.id
        }
    }
 
}

</script>