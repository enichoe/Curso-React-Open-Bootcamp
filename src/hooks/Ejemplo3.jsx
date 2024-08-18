// ejemplos hooks de useState y useContex

import React,{useState,useContext} from 'react';
// componente 1 diospone de un contexto que va a tener un valor que recibe desde el padre

const miContexto=React.createContext(null)

const Componente1 = () => {
    // inicializamos vacio que va a rtellenarse con datos del padre
    const state=useContext(miContexto);
    
    return (
        <div>
            <h1>
                el token es :{state.token}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    const state=useContext(miContexto);
    return (
        <div>
            <h2>
                la sesion es : {state.sesion}
            </h2>
        </div>
    );
};


export default function MiComponenteConContexto(){
    const estadoInicial={
        token:'1234567',
        sesion:1
    }
    // creamos el estado de este componente
    const [sessionData,setSessionData]=useState(estadoInicial);
    function actualizarSesion(){
        setSessionData({
            token:'190485efc',
            sesion:sessionData.sesion+1
        })
    }
    return (
        <miContexto.Provider value={sessionData}>
            {/* todo lo que esta  aqui dentro puede leer los datos de sessionData ademas todo lo que se actualiza ademas lo que se actualiza */}
            <h1>***EJEMPLO DE useState y useContext</h1>
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}




