// import Firebase from 'firebase'
// import LRU from 'lru-cache'
import axios from 'axios';

export function createAPI({
  config,
  version
}) {
  return axios.create({
    baseURL: `https://kick-the-can-api.herokuapp.com/api/scoreboard?date=2018-05-10&sport=mlb`
  })
  // let api
  // // this piece of code may run multiple times in development mode,
  // // so we attach the instantiated API to `process` to avoid duplications
  // if (process.__API__) {
  //   api = process.__API__
  // } else {
  //   Firebase.initializeApp(config)
  //   api = process.__API__ = Firebase.database().ref(version)

  //   api.onServer = true

  //   // fetched item cache
  //   api.cachedItems = LRU({
  //     max: 1000,
  //     maxAge: 1000 * 60 * 15 // 15 min cache
  //   })

  //   // cache the latest story ids
  //   api.cachedIds = {}
  //   ;['top', 'new', 'show', 'ask', 'job'].forEach(type => {
  //     api.child(`${type}stories`).on('value', snapshot => {
  //       api.cachedIds[type] = snapshot.val()
  //     })
  //   })
  // }
  // return api
}