<template>
    <div>
        <input type="checkbox">
        <span>已完成{{totalDone}}/全部{{todo.length}}</span>
    </div>
</template>

<script>
export default{
  name: 'mainFooter',
  props: ['todo'],
  computed: {
    totalDone () {
      const num = this.todo ? this.todo.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0) : 0
      return num
    }
  }
}
</script>

<style scoped>
*{
    margin: 10px;
}
</style>
