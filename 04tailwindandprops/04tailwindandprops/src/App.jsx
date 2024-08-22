import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-lg'>Vite with tailwind</h1>
      <Card username="Nugget" />
      <Card post="Cancun" />
      <Card />
    </>
  )
}

export default App
