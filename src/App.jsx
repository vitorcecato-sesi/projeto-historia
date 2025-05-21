import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crisede29 from './pages/Crisede1929'
import GuerraCanudos from './pages/GuerraCanudos'
import Home from './pages/Home'

function App() {

  return (
    <> 
         
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Guerra-Canudos' element={<GuerraCanudos/>}/>   
          <Route path='/Crise-1929' element={<Crisede29/>}/>       
        </Routes>
      </BrowserRouter>
  

    </>
  )
}

export default App
