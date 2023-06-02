<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox" />
    </label>
    <span> <span>已完成0</span> / 全部2 </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'Footer'
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