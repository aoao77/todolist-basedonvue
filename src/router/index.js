import Vue from 'vue'
import Router from 'vue-router'
import item from '@/components/item.Vue'
import search from '@/components/search.Vue'
import todoList from '@/components/todoList.Vue'
import mainFooter from '@/components/mainFooter.Vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: {item, mainFooter, todoList, search}
    }
  ]
})
