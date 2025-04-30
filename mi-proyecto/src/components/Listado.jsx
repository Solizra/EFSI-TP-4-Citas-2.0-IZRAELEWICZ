import Cita from './Cita'
import './Listado.css'

function ListadoCitas({ citas, setCitas }) {

  function eliminarCita(id) {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita id={cita.id} mascota={cita.mascota} dueno={cita.dueno} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} eliminarCita={eliminarCita}/>
      ))}
    </div>
  )
}

export default ListadoCitas
