// this is aliased in webpack config based on server/client build
import {
  createAPI
} from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})

// warm the front page cache every 15 min
// make sure to do this only once across all requests
// if (api.onServer) {
//   warmCache()
// }

// function warmCache() {
//   fetchItems((api.cachedIds.top || []).slice(0, 30))
//   setTimeout(warmCache, 1000 * 60 * 15)
// }

function fetch(child) {
  logRequests && console.log(`fetching ${child}...`)
  // const cache = api.cachedItems
  // if (cache && cache.has(child)) {
  //   logRequests && console.log(`cache hit for ${child}.`)
  //   return Promise.resolve(cache.get(child))
  // } else {
  // return new Promise((resolve, reject) => {
  console.log("apiapi", api);
  return api.get();
  // api.get(child).once('value', snapshot => {
  //   const val = snapshot.val()
  //   // mark the timestamp when this item is cached
  //   if (val) val.__lastUpdated = Date.now()
  //   cache && cache.set(child, val)
  //   logRequests && console.log(`fetched ${child}.`)
  //   resolve(val)
  // }, reject)
  // })
  // }
}

// export function fetchIdsByType(type) {
//   return api.cachedIds && api.cachedIds[type] ?
//     Promise.resolve(api.cachedIds[type]) :
//     fetch(`${type}stories`)
// }

// export function fetchItem(id) {
//   return fetch(`item/${id}`)
// }

export function fetchItems() {
  // return Promise.all(ids.map(id => fetchItem(id)))
  // return Promise.all(ids.map(id => fetchItem(id)))
  return fetch();
}

// export function fetchUser(id) {
//   return fetch(`user/${id}`)
// }

// export function watchList(type, cb) {
//   let first = true
//   console.log("apiapi2", api);
//   // const ref = api.get(`${type}stories`)
//   const ref = api.get(``)
//   const handler = snapshot => {
//     if (first) {
//       first = false
//     } else {
//       cb(snapshot.val())
//     }
//   }
//   ref.on('value', handler)
//   return () => {
//     ref.off('value', handler)
//   }
// }