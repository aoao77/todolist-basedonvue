<template>
    <div>
        <ul class="todoList">
            <item v-for="todoObj in todo"
            :key="todoObj.id"
            :todo="todoObj"
            :checkTodo="checkTodo"
            :delelteItem="delelteItem"
            >
            </item>
        </ul>
    </div>
</template>

<script>
import Item from './item.vue'
export default{
  components: { Item },
  name: 'todoList',
  props: ['todo', 'checkTodo', 'delelteItem']

}
</script>

<style scoped>

</style>
