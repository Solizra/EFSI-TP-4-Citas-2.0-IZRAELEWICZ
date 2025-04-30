import './Cita.css'

function Cita({ id, mascota, dueno, fecha, hora, sintomas, eliminarCita }) {
  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {mascota}</p>
      <p><strong>Dueño:</strong> {dueno}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button className="button eliminar u-full-width" onClick={() => eliminarCita(id)}>Eliminar × </button>
    </div>
  )
}

export default Cita
