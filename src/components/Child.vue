<template>
  <div class="child">
    <h1>我是Child组件</h1>
    <h3>我是一台游戏机：{{toy}}</h3>
    <button @click="$emit('send-toy', toy)">点我把游戏机给父亲</button>
    <button @click="$emit('send-computer', computer)"></button>
  </div>
</template>

<script>
    export default {
        name:'Child',
        data() {
            return {
                toy:'Switch',
                computer:'MacBook Pro'
            }
        }   
    }
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 20px;
  }
</style>