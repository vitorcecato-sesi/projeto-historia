// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Estilização
  import './App.css'
//.

// Páginas
import RevolucaoRussa from './pages/RevolucaoRussa'
import Home from './pages/Home'
import PrimeiraGuerraMundial from './pages/Primeira-Guerra-Mundial'
import GuerraDeCanudos from "./pages/GuerraCanudos"
import GuerraDoContestado from "./pages/GuerraContestado"

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path="/PrimeiraGuerraMundial" element={<PrimeiraGuerraMundial />} /> 
          <Route path='/RevolucaoRussa' element={<RevolucaoRussa />} />
          <Route path='/GuerraDeCanudos' element={<GuerraDeCanudos />} />
          <Route path='/GuerraDoContestado' element={<GuerraDoContestado />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
