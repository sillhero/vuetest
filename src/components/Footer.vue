<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox" />
    </label>
    <span> <span>已完成0</span> / 全部{{countDone}} </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'Footer',
        props:['todos'],
        computed: {
            countDone() {
                return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
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