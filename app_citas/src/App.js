import { React, Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  //Arreglo decitas
  const [citas, setCitas] = useState([]);
//use Effect para realizar operaciones cuando el state cambia
useEffect(() => {
  console.log('lista');
})
  //Funcion que tome ciutas act. y tome la nueva
  const crearCita = cita => {
    setCitas([
      ...citas, cita
    ]);
  }

  //Funcion que elimina una cita por su id/key
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita =>cita.id!==id)
    setCitas(nuevasCitas);
  }
//Mensaje condicional
const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas"
  return (
    <Fragment>
      <h1> Administrador de pacientes </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
              
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
key={cita.id}
cita={cita}
eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
