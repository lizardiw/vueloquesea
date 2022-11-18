<script setup type="module">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
//import {app} from './firebaseDb'
//import {analytics} from './firebaseDb'
  
</script>

<template>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<body>
  <nav class="navbar navbar-light " style="background-color: rgba(255, 255, 255, 0.2)">
    <a href="#" class="navbar-brand">&nbsp;</a>
  </nav>
        <div id="sections">
           
                <img class="stickerOne" src="./scotch.png" alt="Pegatina">
                <img class="stickerTwo" src="./scotch.png" alt="Pegatina">
           
        </div>

       <div class="container  border shadow-sm p-3 mb-5  rounded" style="margin-top: 20px; background-color: rgba(255, 255, 255, .5) "  >
           <nav class="nav">
                <a class="nav-link active" href="#"  > <RouterLink to="/">Componente </RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/sticky">Sticky</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/new">VueTableLite</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/newtable">Vue3EasyDataTable</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/formulario">Formulario</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/selectorcolor">Selector de Color</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/crudtareas">Tareas Pendientes</RouterLink></a>
                <a class="nav-link" href="#"> <RouterLink to="/creartarea">Capturar en firebase</RouterLink></a>
                
           </nav>
        <div class="form-group">
            <RouterView />
            <!--<BButton variant="primary">Test</BButton>-->
       
        </div>

    </div>
    </body>
<!--inicio-->

<!--fin-->

</template>

<style>
/*@import './assets/base.css';*/
@import './assets/stickers.css';
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Montserrat:wght@100&display=swap');
 
 body{
    /*background-image: url("img/pexels-jess-bailey-designs-1097930.jpg") !important;*/
    height: 1200px;
    background-size: cover;
    background-repeat: no-repeat;
    /*background-image: linear-gradient(rgba(255,105,180,0.527),rgba(70,131,180,.534),rgba(70,131,180,.534)), url("img/pexels-jess-bailey-designs-1097930.jpg");*/
    background-image: linear-gradient(rgba(255,105,180,0.527),rgba(68, 158, 151, 0.534),rgba(23, 107, 175, 0.534)),url("./img/pexels-jess-bailey-designs-1097930.jpg");
} 
#sections{
    float:right;
    width: 75%;
    font-family: sans-serif, Arial, Helvetica;
    margin-right: 50px;
}
#sections .stickerOne,
#sections .stickerTwo{
    position:absolute;
    margin-top: 5px;
    z-index:0;
}
#sections .stickerTwo{
    margin-left: 1050px;
}

</style>
