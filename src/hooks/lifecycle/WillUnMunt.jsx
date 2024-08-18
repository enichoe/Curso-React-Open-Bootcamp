// ejemplo de uso del mentodo component WillUnMount para componente clase , ejmplo de us de hooks para componentes funcional (cuando el componente va desapparecer)

import React, { Component, useEffect } from 'react';

export class WillUnMunt extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}


export const WillUnMuntHook=()=> {
    useEffect(() => {
        // qui no ponemos nada
        return () => {
            console.log('comportamiento antes de que el componente desaparezca')
        }
    },[]);
  return (
    <div>
        <h1>WillUnMount</h1>
    </div>
  );
}

