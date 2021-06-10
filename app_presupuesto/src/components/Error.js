import React from 'react';
import ProTypes from 'prop-types';

const Error = ({mensaje}) =>  ( 
    <p className="alert alert-danger error">{mensaje}</p>

 );

 Error.protoType = {
    mensaje: ProTypes.string.isRequired
}
 
export default Error