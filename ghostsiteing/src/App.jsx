import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/Navbar/NavBar'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/CartWidget/Cart'

function App() {

  /* const sinVocales = (event) => {
    if(['e', 'a', 'i', 'o', 'u'].includes(event.key)){
      event.preventDefault();
    }
  }  */
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <input type="text" onKeyDown={sinVocales} /> */}
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={ <Navigate to='NotFound' /> } />   // cualquier rutas que no este definida, redireccionará aquí
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
