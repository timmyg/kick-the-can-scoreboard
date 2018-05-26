import ItemList from './ItemList.vue'
import moment from 'moment'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createListView() {
  return {
    asyncData({
      store
    }) {
      let {
        params
      } = store.state.route
      return store.dispatch('FETCH_LIST_DATA', {
        date: params.date,
        sport: params.sport
      })
    },
    render(h) {
      return h(ItemList, {
        props: {}
      })
    }
  }
}