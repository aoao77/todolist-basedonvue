<template>
  <div id="app">
    <div class="title">todoList</div>
    <search :receive="receive"></search>
    <todoList :todo="todo" :checkTodo="checkTodo" :delelteItem="delelteItem"></todoList>
    <mainFooter :todo="todo"></mainFooter>
  </div>
</template>

<script>
import search from './components/search.vue'
import todoList from './components/todoList.vue'
import mainFooter from './components/mainFooter.vue'
export default {
  name: 'App',
  components: {
    search,
    todoList,
    mainFooter
  },
  methods: {
    checkTodo (id) {
      this.todo.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done
      })
    },

    delelteItem (id) {
      this.todo = this.todo.filter((todo) => {
        return todo.id !== id
      })
    },

    receive (todoObj) {
      this.todo.unshift(todoObj)
    }

  },
  watch: {
    todo: {
      deep: true,
      handler (value) {
        localStorage.setItem('todo', JSON.stringify(value))
      }
    }
  },
  data () {
    return {
      todo: JSON.parse(localStorage.getItem('todo')) || []
    }
  }
}
</script>

<style>
* {
   margin: 0;
   padding:0;

 }

 #app {
   width: 500px;
   margin: 0 auto;
   border: 2px grey solid;
   border-radius: 8px;
 }
 .title {
  height: 40px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
 }
</style>
