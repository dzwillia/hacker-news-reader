import React from 'react'

export function StoryListItem(props) {
  const item = props.item
  return (
    <div>
      {item.title}
    </div>
  )
}
