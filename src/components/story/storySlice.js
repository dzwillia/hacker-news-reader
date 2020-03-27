import { createSlice } from '@reduxjs/toolkit'
import {
  fetchNewStoryIds,
  fetchItem,
  watchNewStoriesForUpdates,
} from '../../app/api'

/*
  Story object descriptor:

  {
    id: The item's unique id.
    deleted: true if the item is deleted.
    type: The type of item. One of "job", "story", "comment", "poll", or "pollopt".
    by: The username of the item's author.
    time: Creation date of the item, in Unix Time.
    text: The comment, story or poll text. HTML.
    dead: true if the item is dead.
    parent: The comment's parent: either another comment or the relevant story.
    poll: The pollopt's associated poll.
    kids: The ids of the item's comments, in ranked display order.
    url: The URL of the story.
    score: The story's score, or the votes for a pollopt.
    title: The title of the story, poll or job. HTML.
    parts: A list of related pollopts, in display order.
    descendants: In the case of stories or polls, the total comment count.
  }
*/

export const slice = createSlice({
  name: 'story',
  initialState: {
    ids: [],
    items: [],
  },
  reducers: {
    addIds: (state, action) => {
      // append ids to the ids array
      state.ids = state.ids.concat(action.payload)

      // remove duplicate ids
      state.ids.splice(0, state.ids.length, ...(new Set(state.ids)))
    },
    addOrUpdateStory: (state, action) => {
      // updated existing stories or append new stories to the items array
      const new_item = action.payload
      const idx = state.items.findIndex(item => item.id == new_item.id)
      if (idx >= 0) {
        // update the story
        state.items = [
          ...state.items.slice(0, idx),
          Object.assign({}, state.items[idx], new_item),
          ...state.items.slice(idx + 1)
        ]
      } else {
        // add the story
        state.items = [...state.items, new_item]
      }
    },
    removeStory: (state, action) => {
      // remove the story at the specified index from the items array
      const idx = action.payload

      if (idx >= 0 && idx < state.items.length) {
        // remove the item from the array
        state.items = [
          ...state.items.slice(0, idx),
          ...state.items.slice(idx + 1)
        ]
      } else {
        // index is out-of-bounds; bail out
        return state
      }
    },
  },
})

// actions
export const { addIds, addOrUpdateStory, removeStory } = slice.actions

// thunks
export const fetchNewStory = id => dispatch => {
  fetchItem(id).then(response => {
    dispatch(addOrUpdateStory(response))
  }).catch(error => {
    // TODO
  })
}

export const fetchNewStories = () => dispatch => {
  fetchNewStoryIds().then(response => {
    dispatch(addIds(response))
    for (var i = 0; i < 10; ++i) {
      dispatch(fetchNewStory(response[i]))
    }
  }).catch(error => {
    // TODO
  })
}

export const watchForChanges = () => dispatch => {
  watchNewStoriesForUpdates(item => {
    dispatch(addOrUpdateStory(item))
  })
}

// selectors
export const selectItems = state => state.story.items

export default slice.reducer
