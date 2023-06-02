<template>
  <div class="todo-header">
    <input 
    type="text" 
    placeholder="请输入你的任务名称，按回车键确认" 
    @keyup.enter="handleAdd"
    />
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name: "Header",
    props: ['addTodo'],
    methods: {
      // 按下回车的回调函数
      handleAdd(event) {
        // 1、 获取用户的输入
        let {value} = event.target;
        if(value.trim()) {
          // 2、 将用户输入的title, 包装成一个todo对象
          const todoObj = {id:nanoid(), title:value, done:false} 
          // 将todo对象传给APP组件
          this.addTodo(todoObj);
          // 清空输入
          event.target.value = '';
        } else {
          alert('输入不能为空');
        }
      }
    }
  };
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>