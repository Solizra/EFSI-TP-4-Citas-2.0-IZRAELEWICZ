
import './Cita.css';

const Cita = ({ nombreMascota, nombreDueño, fecha, hora, sintomas }) => {
    return (
        <div className="cita">
            <p><strong>Mascota:</strong> {nombreMascota}</p>
            <p><strong>Dueño:</strong> {nombreDueño}</p>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Hora:</strong> {hora}</p>
            <p><strong>Síntomas:</strong> {sintomas}</p>
            <button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
};

export default Cita;