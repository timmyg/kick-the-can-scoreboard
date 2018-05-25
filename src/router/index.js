import Vue from 'vue'
import Router from 'vue-router'
import VueMoment from 'vue-moment';

Vue.use(VueMoment);
Vue.use(Router)

// route-level code splitting
const createListView = () => () =>
  import ('../views/CreateListView').then(m => m.default())
const ItemView = () =>
  import ('../views/ItemView.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [{
      path: '/:sport/:date',
      component: createListView()
    }]
  })
}