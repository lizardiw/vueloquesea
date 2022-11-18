

<template>
 <!---prototurk.com-->
 <h3>SELECTOR DE COLOR</h3>
  <input :value="textColor" type="color"  @input="changeColor"/>
  <br>
</template>


<script setup>
import {ref} from "vue"
const textColor =ref('#fa6585')
const changeColor = e => {
  textColor.value = e.target.value
}
</script>
<style>
h1{
  color:v-bind(textColor)
}

</style>