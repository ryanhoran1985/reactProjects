import "./App.css"
import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(11)
  /*  let counter = 11

  const addValue = () => {
    counter = counter + 1
    console.log(counter)
  }

  const removeValue = () => {
    counter = counter - 1
    console.log(counter)
  } */

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1> React Course {counter} </h1>
     <h2> Counter Value: {counter} </h2>
     <button onClick={addValue}>Add value</button> {" "}
     <button onClick={removeValue}>Remove value</button>
     <p>footer: {counter} </p>
    </>
  )
}

export default App
