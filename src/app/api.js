import { getFirebaseInstance } from './database'
const db = getFirebaseInstance()

function fetchChild(child) {
  return new Promise((resolve, reject) => {
    db.child(child).once('value', snapshot => {
      const val = snapshot.val()
      resolve(val)
    }, reject)
  })
}

// this could easily support different story types by passing the type
// as a parameter and creating the story type string from that
export function fetchNewStoryIds() {
  return fetchChild('newstories')
}

export function fetchItem(id) {
  return fetchChild(`item/${id}`)
}
