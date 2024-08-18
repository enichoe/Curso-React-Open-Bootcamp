// ejemplo de uso del Hook useState
// crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo

import React,{useState} from 'react';

const Ejemplo1 = () => {
    // valor inicial para un contador
    const valorInicial=0;
    // valor inical para una persona
    const personaInicial={
        nombre:'Ernesto',
        email:'enichoe@gmail.com'
    }
    // queremso que el VALOR INICIAL y PERSONAINICIAL sean parte del estaod del componente para gestionar su cambio y que este se vea reflejado en la vista del componente.
    // const [nombreVariable ,funcionParaCambiar]=useState(valorInicial)

    const[contador,setContador]=useState(valorInicial);
    const[persona,setPersona]=useState(personaInicial);


    // funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador+1);
    }


    // funcion para actualizar el estado privado que contiene la persona
    function actualizarPersona(){
        setPersona({
            nombre:'Alfredo',
            email:'anichoe@gmail.com'
        })
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* bloque de bonotones para actualizar el esatdo */}
            <button onClick={incrementarContador}>Incrementar Contador</button> 
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
