import './App.css'
import Accessible from './Accessible'
import Persona from './Persona'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/accessible-components" element={<Accessible />} />
      <Route path="/personas" element={<Persona />} />
    </Routes>
  )
}

export default App
