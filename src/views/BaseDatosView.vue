 <template>
  
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in usuarios" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.correo}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>




 <!--<script type=”module”>-->
<script>
 //import firebase from 'firebaseDb'; //aqui no hace el include
 
 

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "../main";


export default {
  name: 'Home',
  data() {
    return {
      usuarios: []
    }
  },
  methods:{
  // GET / OBTENER / Consulta instantánea 
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
      });
    },
  },
    mounted() {
      this.obtenerDatos();
    },
}

</script>