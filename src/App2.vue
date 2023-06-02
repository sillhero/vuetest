<template>
  <div>
    <div class="basic" :class="str">你好啊</div>
    <button @click="str='happy'">开心</button>
    <button @click="str='normal'">一般</button>
    <button @click="str='sad'">悲伤</button>
    <hr>

    <div class="basic" :class="obj">你好啊(class样式绑定，对象写法)</div>
    <button @click="obj.atguigu1 = !obj.atguigu1">应用/取消 atguigu1</button>
    <button @click="obj.atguigu2 = !obj.atguigu2">应用/取消 atguigu2</button>
    <button @click="obj.atguigu3 = !obj.atguigu3">应用/取消 atguigu3</button>
 
    </div>
</template>

<script>
  export default {
     name:'App',
     data() {
       return {
        str: 'normal',
        obj: {
          atguigu1: true,
          atguigu2: true,
          atguigu3: true
        }
       }
     },
  }
</script>

<style>
   .basic{
    width: 400px;
    height: 100px;
    border: 1px solid black;
  }

  /* 三种心情，三选一 */
  .happy{
    border: 4px solid red;;
    background-color: rgba(255, 255, 0, 0.644);
    background: linear-gradient(30deg,yellow,pink,orange,yellow);
  }
  .sad{
    border: 4px dashed black;
    background-color: gray;
  }
  .normal{
    border: 4px solid deepskyblue;
    background-color: skyblue;
  }

  /* 三个样式，随意选择，可以同时存在 */
  .atguigu1{
    background-color: yellowgreen;
  }
  .atguigu2{
    text-shadow:2px 2px 10px red;
  }
  .atguigu3{
    border-radius: 20px;
  }
</style>