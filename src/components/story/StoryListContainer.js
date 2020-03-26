import React from 'react'
import { useSelector } from 'react-redux';
import { StoryItemList } from './StoryItemList'
import {
  selectItems,
} from './storySlice'

export function StoryListContainer() {
  const items = useSelector(selectItems)

  return (
    <StoryItemList items={items} />
  )
}
