import React, { useState } from 'react';
import Error from './Error';
import ShortId from 'shortid';
import ProTypes from 'prop-types'

const Formulario = ({setGasto, setCrearGasto}) => {
    //state
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    //Funcion para agregar gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //validar
if(cantidad<1|| isNaN(cantidad) || nombre.trim() === ""){
    setError(true);
    return;
}

setError(false);

        //Construir gasto
const gasto = {
    nombre,
    cantidad,
    id: ShortId.generate()
}
console.log(gasto)
        //Pasar gasto a componente principal
setGasto(gasto);
setCrearGasto(true)

        //Resetear formulario
        setNombre('');
        setCantidad(0);
    }
    return (

        <form
        onSubmit = {agregarGasto}
        >

            <h2>Agrega tus gastos aqui</h2>
            {error ? 
            (
            <Error mensaje="Ambos campos son obligatorios o el presupuesto es obiligatorio"/>)
            : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Comida"
                value={nombre}
                onChange = {e=> setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Monto del gasto</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 250"
                value={cantidad}
                onChange={e=> setCantidad(parseInt( e.target.value), 10)}
                />
            </div>
            <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar gasto"
            />
        </form>
    );
}
Formulario.protoType = {
    setGasto: ProTypes.func.isRequired,
    setCrearGasto: ProTypes.func.isRequired
}

export default Formulario;