import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <Header></Header>
      </div>
      <div>
        <Body></Body>
      </div>
      
    </div>
  )
}

export default App
