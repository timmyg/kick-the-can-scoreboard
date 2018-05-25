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

function fetch(date, sport) {
  logRequests && console.log(`fetching ${child}...`)
  return api.get("?sport=" + sport + "&date=" + date);
}

export function fetchItems(date, sport) {
  return fetch(date, sport);
}