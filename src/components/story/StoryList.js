import React from 'react'
import { StoryListItem } from './StoryListItem'

export function StoryList(props) {
  const items = props.items
  const storyItems = items.map(item =>
    <StoryListItem
      key={item.id.toString()}
      item={item}
    />
  )

  return (
    <div>
      {storyItems}
    </div>
  )
}
