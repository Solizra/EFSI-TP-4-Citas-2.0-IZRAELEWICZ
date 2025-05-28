import { useEffect, useState } from 'react'
import './Formulario.css'


//tuve que poner todos los usestate vacíos para que a partir de esto luego se completen
function Formulario({ setCitas, citas }) {
  const [mascota, setMascota] = useState('')
  const [dueno, setDueno] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')
  
//pongo el id unico
  let idCita = 1

  function agregarCita() {
    // Validar que ningun valor esté vacío
    if (mascota === '' || dueno === ''|| fecha === '' || hora=== '' ||sintomas === '') {
    alert('ERROR! Completá todos los campos antes de agregar la cita!');
    return; // si hay cosas vacías, lo frena
  }
    const confirmar = window.confirm("¿Estás seguro de agregar esta cita?");
  
    if (confirmar) {
      const nuevaCita = {
        id: idCita++, mascota, dueno, fecha, hora, sintomas
      };
    
      setCitas((citasAnteriores) => [...citasAnteriores, nuevaCita]);
    
      setMascota('');
      setDueno('');
      setFecha('');
      setHora('');
      setSintomas('');

    }

    useEffect(()=>{
      const citaGuardada = localStorage.getItem(idCita)
      if(citaGuardada)
      {
        setCitas(citaGuardada)
      }
    }, [])

    useEffect(() => {
      if(citas){
        localStorage.setItem(idCita, JSON.stringify(citas))
      }
    },[citas])
  
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input type="text" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)}/>
        <label>Nombre Dueño</label>
        <input type="text" className="u-full-width" placeholder="Nombre del dueño" value={dueno} onChange={(e) => setDueno(e.target.value)}/>
        <label>Fecha</label>
        <input type="date" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        <label>Hora</label>
        <input type="time" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)}/>

        <label>Síntomas</label>
        <textarea className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>

        <button type="button" className="u-full-width button-primary" onClick={agregarCita}>Agregar Cita </button>
      </form>
    </div>
  )
}

export default Formulario
