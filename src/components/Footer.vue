<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>已完成{{countDone}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'Footer',
        props:['todos', 'checkAllTodo'],

        computed: {
            total(){
                return this.todos.length
            },
            countDone() {
                return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
            },
            isAll:{ // 这里因为要进行更改 所以要用到getter setter
                get() {
                    return this.todos.every(todo => todo.done)
                },
                set(value) {
                    this.checkAllTodo(value);
                }
            }
        }
    }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
</style>