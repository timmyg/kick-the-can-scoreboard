import ItemList from './ItemList.vue'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createListView(sport, date) {
  console.log("this", this);
  sport = "mlb"
  date = "2018-05-15"
  // console.log(this.$route.params);
  return {
    // name: `${type}-stories-view`,

    asyncData({
      store
    }) {
      console.log("async Data");
      return store.dispatch('FETCH_LIST_DATA', {
        date
      })
    },

    title: camelize(date),

    render(h) {
      return h(ItemList, {
        props: {
          date
        }
      })
    }
  }
}