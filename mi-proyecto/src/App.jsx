import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Listado'

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE CITAS</h1>
      <div class = "container">
        <div class= "row">
        <Formulario setCitas = {setCitas}></Formulario>
        <ListadoCitas citas= {citas} setCitas = {setCitas}></ListadoCitas>
        </div>
      </div>
    </>
  )
}

export default App
