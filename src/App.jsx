import { BrowserRouter, Route, Routes} from 'react-router-dom'

// Estilização
  import './App.css'
//.

// Páginas
  import RevolucaoRussa from './pages/RevolucaoRussa'
  import Rankings from './pages/Rankings'
//.

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RevolucaoRussa />} />
          <Route path='/rank' element={<Rankings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
