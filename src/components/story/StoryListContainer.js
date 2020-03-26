import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoryList } from './StoryList'
import {
  addStory,
  removeStory,
  selectItems,
} from './storySlice'
import styles from './Story.module.css'

export function StoryListContainer() {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const len = items.length
  const newStory = {
    id: len,
    title: `Item ${len+1}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add story"
          onClick={() => dispatch(addStory(newStory))}
        >
          Add story
        </button>
        <button
          className={styles.button}
          aria-label="Remove last story"
          onClick={() => dispatch(removeStory(items.length - 1))}
        >
          Remove last story
        </button>
      </div>
      <StoryList items={items} />
    </div>
  )
}
