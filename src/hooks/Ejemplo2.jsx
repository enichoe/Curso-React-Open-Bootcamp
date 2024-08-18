// ejemplo de uso de :
// useState()
// useRef()
// useEffect()

import React,{useEffect,useRef,useState} from 'react';

const Ejemplo2 = () => {
    // vamos a crear dos contadores distintos cada uno en un estado diferente 
    const [contador1,setContador1]= useState(0);
    const [contador2,setContador2]= useState(0);

    // vamos a crear una referencia con useRef para asociar una variable con un elemnto del DOM del componente (vista HTML)

    const miRef=useRef();

    function incrementar1(){
        setContador1(contador1+1);
    }

    function incrementar2(){
        setContador2(contador2+1);
    }

    // trabajndo con useEffect
    // caso1 : ejecutar SIEMPRE un snippet de codigo
    // cada vez que hay un cambio en el etado del componente se ejecuta aquello qye este dentro del useEffcet

    // useEffect(()=>{
    //     console.log('cambio en el estado del componente');
    //     console.log('mostrando referencia a elemento del DOM :');
    //     console.log(miRef)  
    // })

    // caso2: ejecutar solo cuando cambia contador 1 es decir cada vez que haya un cam,bion en contador 1 se ejecuta lo que diga el useEffect en caso de cambie contador 2 no habra ejecucion

    // useEffect(()=>{
    //     console.log('cambio en el estado del CONTADOR 1');
    //     console.log('mostrando referencia a elemento del DOM :');
    //     console.log(miRef)
    // },[contador1]);


      // caso2: ejecutar solo cuando cambia contador 1 o contador 2 es decir cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect o cada vez que haya un cambio en contador 2 se ejecuta lo que diga el useEffect

      useEffect(()=>{
        console.log('cambio en el estado del CONTADOR 1 o CONTADOR 2');
        console.log('mostrando referencia a elemento del DOM :');
        console.log(miRef)
    },[contador1,contador2]);



    return (
        <div>
           <h1>*** Ejemplo de useState() ,useRef() y useEffect() ***</h1> 
           <h2>Contador 1: {contador1}</h2>
           <h2>Contador 2: {contador2}</h2>
           {/* elemento referenciado */}
           <h4 ref={miRef}>
                Ejemplo de elemnto referenciado
           </h4>
           <div>
            <button onClick={incrementar1}>Incrementar Contador 1</button>
            <button onClick={incrementar2}>Incrementar Contador </button>
           </div>
        </div>
    );
}

export default Ejemplo2;
