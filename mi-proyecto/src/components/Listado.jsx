import Cita from './Cita'

function ListadoCitas({citas, setCitas}) {
  function eliminarCita(id) {
    const confirmar = window.confirm("¿Estás seguro que deseas eliminar esta cita?");
  
    if (confirmar) {
      //Creamos un nuevo array SIN la cita a eliminar.
      const nuevasCitas = citas.filter(cita => cita.id !== id)
      //actualizamos el listado con las nuevascitas,en donde solo contiene las citas del id que no elegimos
      setCitas(nuevasCitas)
    }
  }

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (<Cita id={cita.id} mascota={cita.mascota} dueno={cita.dueno} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} eliminarCita={eliminarCita}/>))}
    </div>
  )
}

export default ListadoCitas
