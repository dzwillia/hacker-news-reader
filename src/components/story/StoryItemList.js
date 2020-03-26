import React from 'react'
import { StoryItem } from './StoryItem'

export function StoryItemList(props) {
  const items = props.items
  const storyItems = items.map(item =>
    <StoryItem
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
