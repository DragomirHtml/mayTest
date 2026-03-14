import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Energy } from './components/Energy'
import { Pythagras } from './components/Pythagpras'
import { Cylinder } from './components/cylinder'
import { Quadra } from './components/Quadra'
import { Quadrasum } from './components/Quadrasum'
import { Water } from './components/Water'
import { Log } from './components/Log'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Energy />
      <Pythagras />
      <Cylinder />
      <Quadra />
      <Quadrasum />
      <Water />
      <Log />
      
    </>
  )
}

export default App
