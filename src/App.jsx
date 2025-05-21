// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Estilização
  import './App.css'
//.

// Páginas
import RevolucaoRussa from './pages/RevolucaoRussa'
import Rankings from './pages/Rankings'
import Home from "./pages/Home"
import PrimeiraGuerraMundial from './pages/Primeira-Guerra-Mundial'
import GuerraDeCanudos from "./pages/GuerraCanudos"
import GuerraDoContestado from "./pages/GuerraContestado"
import RevolucaoDe1930 from "./pages/RevolucaoDe1930"
import FascismoItalino from "./pages/FascismoItaliano"
import CriseDe1929 from "./pages/Crisede1929" 
import SobreNos from "./pages/SobreNos"

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
          <Route path='/RevolucaoDe1930' element={<RevolucaoDe1930 />} />
   <Route path='/FascismoItaliano' element={<FascismoItalino />} />
          <Route path='/CriseDe1929' element={<CriseDe1929 />} />
          <Route path='/' element={<RevolucaoRussa />} />
          <Route path='/rank' element={<Rankings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
