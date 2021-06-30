import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { muestraPrimeraMayuscula } from '../helpers'

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;
`
const Resumen = ({datos}) => {
    const {marca, year, plan} = datos
    if(marca===""||year===""||plan==="") return null;
    return ( 
      <ContenedorResumen>
<h2>Resumen de cotizacion</h2> 
<ul>
    <li>Marca:{muestraPrimeraMayuscula(marca)}</li>
    <li>Year:{muestraPrimeraMayuscula(year)}</li>
    <li>Plan:{muestraPrimeraMayuscula(plan)}</li>

</ul>
      </ContenedorResumen> 
     );
}
 
Resumen.protoTypes = {
    datos:PropTypes.object.isRequired
}
export default Resumen;
