// ejemplo para entender el uso de props.children

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de uso de children props</h1>
            <h2>
                nombre: {props.name}
            </h2>
            {/* props.children pintara por defecto aquello que se encuentre entre las eqtiquetas de apertura y cierre desde el componente de orden superior*/}
            {props.children}

        </div>
    );
}

export default Ejemplo4;
