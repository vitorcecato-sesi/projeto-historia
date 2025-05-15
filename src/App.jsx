import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GuerraCanudos from './pages/GuerraCanudos'
import Home from './pages/Home'

function App() {

  return (
    <>
         
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Guerra-Canudos' element={<GuerraCanudos/>}/>         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
