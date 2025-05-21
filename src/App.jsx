import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RevolucaoDe1930 from './pages/RevolucaoDe1930'
import SobreNos from './pages/SobreNos'
import Home from "./pages/Home"
import './App.css'
import GuerraContestado from './pages/GuerraContestado.jsx'
import RevolucaoRussa from './pages/RevolucaoRussa'

import GuerraCanudos from './pages/GuerraCanudos'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Revolução-de-1930' element={<RevolucaoDe1930/>}/>  
          <Route path='/SobreNos' element={<SobreNos/>}/>                
        </Routes>
      </BrowserRouter>
   <RevolucaoRussa/>

    </>
  )
}

export default App
