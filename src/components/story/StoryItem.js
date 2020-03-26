import React from 'react'

export function StoryItem(props) {
  const item = props.item
  return (
    <div>
      {item.title}
    </div>
  )
}
