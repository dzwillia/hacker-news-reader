import React from 'react'
import { useSelector } from 'react-redux';
import { StoryList } from './StoryList'
import {
  selectItems,
} from './storySlice'

export function StoryListContainer() {
  const items = useSelector(selectItems)

  return (
    <StoryList items={items} />
  )
}
