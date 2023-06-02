<template>
  <div class="person">
    <h2>我的名字是：{{name}}</h2>  
  </div>
</template>

<script>
   export default {
    name:'Person',
    data(){
      return {
        name:'强哥'
      }
    }
  }
  let a
</script>

<style>
 .person {
    background-color: skyblue;
    padding: 20px;
 }
</style>