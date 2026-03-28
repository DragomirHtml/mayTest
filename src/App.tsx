import { Energy } from './components/Energy'
import { Pythagras } from './components/Pythagpras'
import { Quadra } from './components/Quadra'
import { Quadrasum } from './components/Quadrasum'
import { Water } from './components/Water'
import { Log } from './components/Log'
import { Cylinder } from './components/Cylinder'

import { RandomSum } from './components/RandomSum';

import './App.css'

function App() {
  return (
    <>
      <Energy />
      <Pythagras />
      <Cylinder />
      <Quadra />
      <Quadrasum />
      <Water /> 
      <Log />
      <RandomSum />
    </>
  )
}

export default App
