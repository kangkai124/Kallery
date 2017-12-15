import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Album from '@/components/Album'
import Tags from '@/components/Tags'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
