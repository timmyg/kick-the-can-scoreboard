import {
  fetchItems
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({
    commit,
    dispatch,
    state
  }, {
    date,
    sport
  }) => {
    return fetchItems(date, sport)
      .then(items => {
        commit('SET_ITEMS', {
          items
        })
      })
      .then((x) => {
        // console.log("type, ids");
      })
  },

}