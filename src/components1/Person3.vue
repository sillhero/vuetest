<template>
  <div class="person">
    <h1>我是Person组件</h1>
    <h3>我有一台游戏机</h3>
    <button>游戏机玩腻了，给父亲玩</button>
  </div>
</template>

<script>
    export default {
        name:'Person',
        props:['sendToy'],
        data() {
            return {
                toy:'游戏机'
            }
        },
    }
</script>

<style scoped>
    .person {
        background-color: pink;
        padding: 10px;
    }
</style>