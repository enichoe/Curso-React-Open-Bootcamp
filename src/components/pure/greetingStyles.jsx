import React, { useState } from 'react';
// definiendo estilos en constantes
// estilo para usuario logeado
const logoStyle={
    color:'white'
}
// estilo para usuario no logeado
const unlogoStyle={
    color:'tomato',
    fontWeight:'bold'
}
// 
const GreetingStyles = (props) => {
    // genberamos un estaod para copmponentes y asi controlar si el usuario esta logueado
    const [logged,setLoggued] =useState(false)

    return (
        <div style={logged?logoStyle:unlogoStyle}>
        {logged? (<p>Hola , {props.name}</p>)
        :
        (<p>Please Login</p>)
        }
        
        <button onClick={()=>{
            console.log('boton pulsado');
            setLoggued(!logged);
        }}>
            {logged?'Logout':'Login'}
        </button>
            
        </div>
    );
}

export default GreetingStyles;
