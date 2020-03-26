import React from 'react'
import { StoryListContainer } from './components/story/StoryListContainer'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="app-header-inner">
          <a href="/" className="app-header-link app-header-logo">Y</a>
          <a href="/" className="app-header-link">Hacker News</a>
        </nav>
      </header>
      <div className="app-content">
        <StoryListContainer />
      </div>
    </div>
  )
}

export default App
