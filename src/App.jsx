import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import RevolucaoDe1930 from './pages/RevolucaoDe1930'
import SobreNos from './pages/SobreNos'
import Home from "./pages/Home"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Revolução-de-1930' element={<RevolucaoDe1930/>}/>         
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
