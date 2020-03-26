import React from 'react'
import { StoryListItem } from './StoryListItem'
import styles from './Story.module.css'

export function StoryList(props) {
  const items = props.items
  const storyItems = items.map(item =>
    <StoryListItem
      key={item.id.toString()}
      item={item}
    />
  )

  return (
    <div className={styles.list}>
      <ul>
        {storyItems}
      </ul>
    </div>
  )
}
