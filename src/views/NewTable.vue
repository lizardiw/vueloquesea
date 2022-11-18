
<template>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<form class="w3-container">
  <!--<label class="w3-text-teal"><b>Buscar:</b></label>-->
 <input class="w3-input w3-border " type="text" v-model="searchValue" placeholder="Buscador">
  
</form>

<br>
  <EasyDataTable
    :headers="h"
    :items="i"
    :search-field= "Folio_Impresion"
    :search-value="searchValue"
   
  />
</template>


<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const searchField = ref("player");
const searchValue = ref("");

let h=reactive([]);//encabezados
let i=reactive([]);//datos


fetch('http://10.9.3.223/ingresos2/control_obligaciones/ejecutables/obl_actas_inspeccion_vue.php')
  .then(response => response.json())
  .then(data => { 
    for (let x in data[0])
    {
      h.push({text:x,value:x,sortable: true});      
    }
      data.forEach( (y) => i.push(y) )    
    
  });



</script>
<style scoped>
input{
  border-radius: 10px;
  background-color: rgb(167, 9, 88);
  caret-color:  rgb(167, 9, 88);
  outline: 3px solid rgb(167, 9, 88);
  outline-offset: 3px;
  color: rgb(253, 253, 251);
  
}
::placeholder {
  color: rgb(223, 189, 221);
  font-size: 1em;
}
</style>
