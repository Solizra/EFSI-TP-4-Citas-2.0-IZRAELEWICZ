import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Listado'

function App() {
  const [citas, setCitas] = useState([]);

useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas')
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas))
    }
  }, [])

  // useEffect 2: guardar las citas cuando cambian
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas]) //SACAR LOS USE EFFECT DEL FORMULARIO!!

  return (
    <>
      <h1>ADMINISTRADOR DE CITAS</h1>
      <div class = "container">
        <div class= "row">
        <Formulario setCitas = {setCitas} citas ={citas}></Formulario>
        <ListadoCitas citas= {citas} setCitas = {setCitas}></ListadoCitas>
        </div>
      </div>
    </>
  )
}

export default App
