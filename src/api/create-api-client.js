// import Firebase from 'firebase/app'
// import 'firebase/database'
import axios from 'axios';


export function createAPI({
  config,
  version
}) {
  // Firebase.initializeApp(config)
  // return Firebase.database().ref(version)
  return axios.create({
    baseURL: `https://kick-the-can-api.herokuapp.com/api/scoreboard`
  })
}