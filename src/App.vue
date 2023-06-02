<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
  export default {
    name: "App",
    components: {
      Header,
      List,
      Footer
    },
    data() {
      return {
        todos:[
          {id:'tyrytfsadtr1',title:'吃饭',done:false},
          {id:'tyrytfsadtr2',title:'睡觉',done:true},
          {id:'tyrytfsadtr3',title:'学习',done:false},
          {id:'tyrytfsadtr4',title:'打游戏',done:true}
        ]
      }
    },
    methods: {
      // 用于添加一个todo对象
      addTodo(todoObj) {
        // 看一下todos中是否已经存在当前输入的
        let result = this.todos.find( t => t.title === todoObj.title)
        if (result) {
          alert('不能重复添加');
        }else {
          this.todos.unshift(todoObj);
        }
      },
      deleteTodo(id) {
        console.log("进行删除");
        this.todos = this.todos.filter(t => t.id !== id);
      }
    }
  };
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>