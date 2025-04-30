import Cita from './Cita';
import './Listado.css';

const ListadoCitas = () => {

    return ( 
            <div className="one-half column">
                <h2>Administra tus citas</h2>
                <Cita nombreMascota="Toto" nombreDueño="Sol" fecha="5-7-2025" hora="15:30:00" sintomas="se le rompio una pata"/>
                <Cita nombreMascota="Javier" nombreDueño="Indi" fecha="20-5-2025" hora="17:30:00" sintomas="vacunas"/>
                <Cita nombreMascota="Ñoqui" nombreDueño="Flecha" fecha="8-8-2025" hora="12:45:00" sintomas="no quiere comer"/>
            </div>
    );
};

export default ListadoCitas;
