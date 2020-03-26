import React from 'react'
import { useSelector } from 'react-redux'
import { StoryList } from './StoryList'
import {
  selectItems,
} from './storySlice'
import styles from './Story.module.css'

export function StoryListContainer() {
  const items = useSelector(selectItems)

  return (
    <div className={styles.container}>
      <StoryList items={items} />
    </div>
  )
}
