import { Energy } from './components/Energy'
import { Pythagras } from './components/Pythagpras'
import { Quadra } from './components/Quadra'
import { Quadrasum } from './components/Quadrasum'
import { Water } from './components/Water'
import { Log } from './components/Log'
import { Cylinder } from './components/Cylinder'

import { RandomSum } from './components/RandomSum';
import { UserProfile } from './components/UserProfile'

import './App.css'
import { StepCounter } from './components/StepCounter'
import { Todolist } from './components/Todolist'

function App() {
  return (
    <>
      <RandomSum />
      <UserProfile 
      firstname={'Диана'}
      lastname={'Хазикова'}
      birthyear={2006}
      />
      <StepCounter />
      <Todolist/>
    </>
  )
}

export default App
