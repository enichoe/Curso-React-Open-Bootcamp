import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetinsF = (props) => {
    // Breve introduccion a useState
    // const [variable,metodo para actualizar]=useState(valor inicial)
    const [age,setage]=useState(40);

    const birthday=()=>{
        // actualizar el estado
        setage(age+1);
    }

    return (
        <div>
            <h1>¡HOLA {props.name} desde componente funcional¡</h1>
            <h2>
                tu edad es de : {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir Años
                </button>
            </div>
        </div>
    );
};


GreetinsF.propTypes = {
    name: PropTypes.string
};


export default GreetinsF;
