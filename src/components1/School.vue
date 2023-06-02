<template>
  <div class="school">
    <h2>学校的名字是：{{name}}</h2>
    <button @click="showAddress">点我提示学校地址</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'尚硅谷',
        address:'地球村'
      }
    },
    methods: {
      showAddress(){
        alert(this.address)
      }
    },
  }
</script>

<style>
  .school {
    background-color: orange;
    padding: 10px;
  }
</style>