<template>
    <div>
        <li>
            <label for="">
                <input type="checkbox" :checked="todo.done" @click="handClick(todo.id)">
                <span>{{todo.title}}</span>
            </label>
            <button class="btn" @click="handDelete(todo.id)">删除</button>
        </li>
    </div>
</template>

<script>
export default{
  name: 'item',
  props: ['todo', 'checkTodo', 'delelteItem'],
  methods: {
    handClick (id) {
      this.checkTodo(id)
    },

    handDelete (id) {
      if (confirm('确认删除吗？')) {
        this.delelteItem(id)
      }
    }
  }
}
</script>

<style scoped>
   *{
        margin: 10px;
    }
    button {
        float: right;
        width:40px;
        background: red;
        border-radius: 2px;
        border: none;
        color:white;
        height: 25px;
        margin-top: 5px;
        border-radius: 5px;
        display: none;
    }
    li {
       list-style: none;
        width: 400px;
        border: 1px solid grey;
        border-radius: 8px;
    }
    li:hover {
        background-color: #f3f3f3;
    }
     li:hover button {
        display: block;
    }
    input {
        margin-right:20px;
    }
</style>
