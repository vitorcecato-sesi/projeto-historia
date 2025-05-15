import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PrimeiraGuerraMundial from './pages/Primeira-Guerra-Mundial'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path="/1" element={<PrimeiraGuerraMundial />} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
