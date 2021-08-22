<template>
  <div class="search">
    <input class="input" type="text" placeholder="请输入待做事件"
      v-model="title" @keyup.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'search',
  props: ['receive'],
  methods: {
    addTodo (event) {
      if (!this.title) return alert('输入为空！')// 判断是否为空
      const todoObj = {
        id: nanoid(),
        title: event.target.value,
        done: false
      }// 声明对象
      console.log(todoObj)
      this.receive(todoObj)// 添加对象
      this.title = ''
    }
  },

  data () {
    return {
      title: ''
    }
  }
}
</script>

<style scoped>
  *{
        padding: 10px;
    }
    .input {
        width: 400px;
        height: 30px;
        border-radius: 2px;
    }
    .input:hover {
        border: none;
    }
</style>
