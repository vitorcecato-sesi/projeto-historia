// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Estilização
  import './App.css'
//.

// Páginas
  import RevolucaoRussa from './pages/RevolucaoRussa'
//.

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RevolucaoRussa />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
