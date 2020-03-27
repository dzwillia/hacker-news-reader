import firebase from 'firebase/app'
import 'firebase/database'

const databaseURL = 'https://hacker-news.firebaseio.com'
const version = '/v0'

export function getFirebaseInstance() {
  firebase.initializeApp({ databaseURL })
  return firebase.database().ref(version)
}
