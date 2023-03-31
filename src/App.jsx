import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import Answer from './Component/Question/Answer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <Header></Header>
        <Body></Body>
        <Answer></Answer>
      
    </div>
  )
}

export default App
