<template>
  <div class="app">
    <h1>我是App组件</h1>
    <h3 v-show="computer">儿子很孝顺电脑给我了：{{toy}}</h3>
    <!-- <h3 v-show="toy">儿子很孝顺给我游戏机:{{toy}}</h3> -->
    <!-- 这里的send-toy是监听事件 -->
    <Child 
    @send-toy="getToy" 
    @send-computer="getComputer"
    @click.native="getComputer"
    ></Child> 

    <!-- <Child ref="haizi"/> -->
  </div>
</template>

<script>
    import Child from './components/Child.vue'
    export default {
        name:'App',
        components:{
            Child
        },
        data() {
            return {
                toy:'',
                computer:''
            }
        },
        methods: {
            getToy(toy) {
                console.log("App组件接收到了儿子的礼物", toy);
                this.toy = toy
            },
            getComputer(value) {
              console.log("App组件接收到了儿子的礼物", value);
              this.computer = value
            },
            handleClick(value) {
              console.log("App", value);
            }
        },
        // mounted() {
        //   this.$refs.haizi.$on('send-toy', this.getToy);
        // }
    }
</script>

<style>
  .app {
    background-color: gray;
    padding: 20px;
  }
</style>