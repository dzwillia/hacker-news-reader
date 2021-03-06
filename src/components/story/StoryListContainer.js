import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoryList } from './StoryList'
import {
  selectItems,
  fetchNewStories,
} from './storySlice'
import styles from './Story.module.css'

export function StoryListContainer() {
  const items = useSelector(selectItems)
  const dispatch = useDispatch()
  dispatch(fetchNewStories())

  return (
    <div className={styles.container}>
      <StoryList items={items} />
    </div>
  )
}
