import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../components/counter/counterSlice'
import storyReducer from '../components/story/storySlice'

export default configureStore({
  reducer: {
    //counter: counterReducer,
    story: storyReducer,
  },
})
