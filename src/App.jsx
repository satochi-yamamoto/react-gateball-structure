import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gateball App</h1>
          <p>Welcome to the Gateball Structure Application</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page of the Gateball application.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Learn more about Gateball and this application.</p>
    </div>
  )
}

export default App