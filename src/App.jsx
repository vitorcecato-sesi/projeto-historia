import './App.css'

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
