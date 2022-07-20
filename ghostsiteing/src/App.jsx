import { useState } from 'react'
import './App.css'
import ComponentesContainer from './components/ComponentesContainer/ComponentesContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar>

        <ComponentesContainer />

      </NavBar>

      <ItemListContainer />
    </div>
  )
}

export default App
