import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  //State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostratPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false)
//UseEfect que actualiza el restante
useEffect(()=>{
  if(crearGasto){
//Agrega nuevo presupuesto

//Resta del presupuesto
const presupuestoRestante = restante - gasto.cantidad;
setRestante(presupuestoRestante);
    setGastos(
      [...gastos, gasto]
    );
    //Resetera a false
    setCrearGasto(false);
  }
  }
  , [gasto, crearGasto, restante, gastos])

  //funcion agregar un gasto

  return (
    <div className="container">
      <header>
        <h1>Presupuesto semanal</h1>
        <div className="contenido-principal contenido">
          {mostratPregunta
         ?
         ( 
          <Pregunta
        setPresupuesto={setPresupuesto}
        setRestante = {setRestante}
        setMostrarPregunta={setMostrarPregunta}
        />
        )
        : 
        (<div className="row">
        <div className="one-half column">
          <Formulario
          setGasto={setGasto}
          setCrearGasto = {setCrearGasto}
          />
        </div>
        <div className="one-half column">
          <Listado
          gastos={gastos}
          />
          <ControlPresupuesto
          presupuesto={presupuesto}
          restante={restante}
          />
        </div>

      </div>)}
       
 
        </div>
       
        
      </header>

    </div>
  );
}

export default App;
