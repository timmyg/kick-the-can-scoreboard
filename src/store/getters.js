export default {
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  // activeIds(state) {
  //   const {
  //     activeType,
  //     itemsPerPage,
  //     lists
  //   } = state

  //   if (!activeType) {
  //     return []
  //   }

  //   const page = Number(state.route.params.page) || 1
  //   const start = (page - 1) * itemsPerPage
  //   const end = page * itemsPerPage

  //   console.log(lists.top.data);
  //   console.log(page, start, end);
  //   // return lists[activeType].slice(start, end)
  //   return lists.top.data;
  // },

  // items that should be currently displayed.
  // this Array may not be fully fetched.
  activeItems(state, getters) {
    // return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    return state.items;
    // const {
    //   activeType,
    //   itemsPerPage,
    //   lists
    // } = statei
    // state.lists.top.data.forEach(e => {
    //   e.id = e._id;
    // });
    // console.log(state.lists.top.data);
    // return state.lists.top.data.filter(_ => _)
    // return []
  }
}