import { useState } from 'react'
import './App.css'
import LandingPage from './clientPages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
