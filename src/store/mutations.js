import Vue from 'vue'

export default {

  SET_SPORT: (state, {
    sport
  }) => {
    state.sport = sport
  },

  SET_DATE: (state, {
    date
  }) => {
    state.date = date
  },

  SET_ITEMS: (state, {
    items
  }) => {
    console.log("items", items.data.length);
    items.data.forEach(item => {
      if (item) {
        Vue.set(state.items, item._id, item)
      }
    })
  },
}