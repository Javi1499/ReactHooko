import React from 'react';

function Header({titulo, numero}){
    
    return(
        <h1>{titulo} tenemos {numero} productos</h1>
    );
}

export default Header;