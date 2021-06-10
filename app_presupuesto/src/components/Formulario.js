import React, { useState } from 'react';
const Formulario = () => {
    return (

        <form>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Comida"
                />
            </div>
            <div className="campo">
                <label>Monto del gasto</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 250"
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

export default Formulario;