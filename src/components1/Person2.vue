<template>
  <div class="person">
    <h1>我是Person组件</h1>
    <ul>
      <li>姓名：{{name}}</li>
      <li>年龄：{{age}}</li>
      <li>资产：{{money}}</li>
    </ul>
    <button @click="demo">看看Person的vc</button>
  </div>
</template>

<script>
  export default {
    name:'Person',
    props:['name','age','money'],
    methods: {
      demo(){
        console.log('@', this)
      }
    },
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    padding: 20px;
  }
</style>