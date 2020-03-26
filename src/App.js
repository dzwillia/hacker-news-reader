import React from 'react'
import { StoryListContainer } from './components/story/StoryListContainer'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hacker News Reader</h1>
        <StoryListContainer />
      </header>
    </div>
  )
}

export default App
