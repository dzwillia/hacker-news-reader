import React from 'react'
import styles from './Story.module.css'

export function StoryListItem(props) {
  const item = props.item
  return (
    <li className={styles.item}>
      {item.title}
    </li>
  )
}
