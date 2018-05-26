import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment';
import moment from 'moment'

Vue.use(VueMoment);
Vue.use(VueRouter)

// route-level code splitting
const createListView = () => () =>
  import ('./views/CreateListView').then(m => m.default())


export function createRouter() {
  return new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [{
      path: '/',
      redirect: to => {
        return "/mlb/" + moment().format("YYYY-MM-DD")
      }
    }, {
      path: '/:sport/:date',
      component: createListView()
    }]
  })
}