// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Estilização
  import './App.css'
//.

// Páginas
  import RevolucaoRussa from './pages/RevolucaoRussa'
  import Rankings from './pages/Rankings'
  import Crisede29 from './pages/Crisede1929'
import GuerraCanudos from './pages/GuerraCanudos'
//.

function App() {

  return (
    <> 
         
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<RevolucaoRussa />} />
          <Route path='/rank' element={<Rankings />} />
          <Route path='/Guerra-de-Canudos' element={<GuerraCanudos />} />
          <Route path='/Crise-de-1929' element={<Crisede29/>}/>
        </Routes>
      </BrowserRouter>
  

    </>
  )
}

export default App
