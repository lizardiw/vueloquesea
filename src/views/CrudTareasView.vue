<template>
 <div class="container">
    <table class="table" >
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Tarea</th>
        <th scope="col">Descripcion</th>
        <th scope="col" colspan="2"><a class="btnlearn" href="#"  > <RouterLink  to="/creartarea" style='color: black;' >Agregar</RouterLink></a> </th>  
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tareas" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.descripcion}}</td>
        <!--<td>{{item.id}}</td>-->
        <!--<td><a class="btn btn-warning" href="#"> <RouterLink to="/modificartarea">Editar</RouterLink></a>  </td> -->
        <td><b-button variant="info"  > <RouterLink  :to="{
              name: 'modificartarea',
              params: {
                nombre: item.nombre,
                descripcion: item.descripcion,
                id: item.id
              }
            }" style='color: white;'> Editar</RouterLink></b-button> </td> 
        <td> <button @click.prevent="eliminarDato(item.id)" class="btn btn-danger">Eliminar </button> </td>
      </tr>
     </tbody>
    </table>
</div>
</template>
<script >
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
//import { db } from "../main";
import {db, auth, storage } from '../firebaseDb'
import router from '../router/index'
export default {
  name: 'Home',
   data() {
    return {
      tareas: []
    }
  },
  methods:{
  // GET / OBTENER / Consulta instantánea 
      async obtenerDatos () { 
        const querySnapshot = await getDocs(collection(db, "tareas"));
          querySnapshot.forEach((doc) => {
          let tarea = doc.data()
          tarea.id = doc.id
          this.tareas.push(tarea)
          console.log(tarea)
        });
      },
      async eliminarDato (id){
        this.$swal({
          title: 'Estas Seguro?',
          text: 'Ya no podrás revertir esta acción',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, Elimínar!',
          cancelButtonText: 'No, Ignorar!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
             deleteDoc(doc(db, "tareas", id ));
            this.$swal('Eliminado', 'Has eliminado la tarea!', 'success')
            //router.go('/');//refrescar la pagina
            this.tareas=[];//reinicia el array 
            this.obtenerDatos();//vuelve a obtener los datos
          } else {
            this.$swal('Cancelado', 'Tu tarea no se ha eliminado!', 'info')
          }
        })
      //  router.go('/');//refrescar la pagina
    },
  },
  mounted() {
      this.obtenerDatos();
  },
}
</script>
<style scoped>
.btnlearn{
 position: relative;
height: 10px;
padding: 0 2rem;
border-radius: .2rem;
background: #f7f3f6;
color: #ffffff !important;
transition: all 0.3s;
}
.btnlearn:hover{
  background: transparent;
  letter-spacing: 2px;
}
.btnlearn::before{
top:0;
}

.btnlearn::after{
bottom: 0;}
.btnlearn:hover::before,
.btnlearn:hover::after{
  transform: scaleX(1);
}
.btnlearn::before,.btnlearn::after{
  content: "";
  position: absolute;
  left:0;
  transform: scaleX(0);
  width: 100%;
  height: 0.5px;
  background: white;
  transition: all 0.3s;
}

</style>