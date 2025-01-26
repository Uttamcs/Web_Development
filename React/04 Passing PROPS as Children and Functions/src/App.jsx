import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  return (
    <div>
      <Button incrementCount = {handleClick} text = "Click me">
        <h1>Count is {count}</h1>
      </Button>
      <card name="uttam">
        <h1>Best Web D Course</h1>
        <p>Trying to complete this series</p>
        <p>Will complete this course soon....</p>
      </card>
      <card children ="Hello">
        Overwrite kar do Hello ko
      </card>
    </div>
  )
}

export default App
