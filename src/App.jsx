// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

import RevolucaoDe1930 from './pages/RevolucaoDe1930'
import SobreNos from './pages/SobreNos'
import Home from "./pages/Home"
import './App.css'
// Estilização
  import './App.css'
//.

// Páginas
import RevolucaoRussa from './pages/RevolucaoRussa'
import Home from './pages/Home'
import PrimeiraGuerraMundial from './pages/Primeira-Guerra-Mundial'
import GuerraDeCanudos from "./pages/GuerraCanudos"
import GuerraDoContestado from "./pages/GuerraContestado"
import RevolucaoDe1930 from "./pages/RevolucaoDe1930"
import FascismoItalino from "./pages/FascismoItaliano"
// import CriseDe1929 from "./pages/Crisede1929"

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Revolução-de-1930' element={<RevolucaoDe1930/>}/>         
        </Routes>
      </BrowserRouter>
>>>>>>>>> Temporary merge branch 2
    </>
  )
}

export default App
