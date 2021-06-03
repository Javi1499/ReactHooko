import {React, Fragment, useState} from 'react';
import {v4 as uuid} from 'uuid';
const Formulario = () => {
//Crear State Citas
const [cita, setCita] = useState({
    mascota:'',
    duenio:'',
    fecha:'',
    hora: '',
    sintomas:''
});
const [error, setError] = useState(false);

//Funcion que se ejecuta cada que el usuaruioi modica un input
const actualizarState = e =>{
    setCita({
        ...cita,
        [e.target.name] : e.target.value
    })
}
//Extraer valores
const {mascota, duenio, fecha, hora, sintomas} = cita;

//Enviar formulario
const submitCita = (e) =>{
   e.preventDefault();

   //validar
if(mascota.trim()===''|| duenio.trim()===""|| fecha.trim()===""||
 hora.trim()===""|| sintomas.trim()===""){
    setError(true)
    
    return
}
//Actualizar error
setError(false);

   //Asignar ID
cita.id = uuid()
console.log(cita)
   //Crear cita

   // Reiniciar el form
}
    return ( 
<Fragment>
    <h2>Crear Cita</h2>
{error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

    <form
    onSubmit={submitCita}
    >
        <label>Nombre Mascota</label>
        <input 
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre mascota"
        onChange={actualizarState}
        value={mascota}
        />
        <label>Nombre del duenio</label>
        <input 
        type="text"
        name="duenio"
        className="u-full-width"
        placeholder="Nombre del duenio"
        onChange={actualizarState}
        value={duenio}
        />
         <label>Fecha</label>
        <input 
        type="date"
        name="fecha"
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}
        />
         <label>Hora</label>
        <input 
        type="time"
        name="hora"
        className="u-full-width"
        onChange={actualizarState}
        value={hora}
        />
          <label>Sintomas</label>
       <textarea
       className="u-full-width"
       name="sintomas"
       onChange={actualizarState}
       value={sintomas}
       >
       </textarea>
       <button
    type="submit"
    className="u-full-width button-primary">
        Agregar cita</button>
    </form>
</Fragment>

    );
}
 
export default Formulario;