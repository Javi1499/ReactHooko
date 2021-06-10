import React, {useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  //State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostratPregunta, setMostrarPregunta] = useState(true);

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
          <Formulario/>
        </div>
        <div className="one-half column">
          2
        </div>

      </div>)}
       
 
        </div>
       
        
      </header>

    </div>
  );
}

export default App;
