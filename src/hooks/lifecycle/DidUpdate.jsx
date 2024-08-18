// ejemplo de uso de metodo component DIdUpdate en componente de clases y uso de hook en componente fincional

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {
  componentDidUpdate(){
    console.log('Comportamineto cunado el componenet recibe nuevos prosp o camboio en su estado privado')
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}



export const DidUpdateHook=()=>{
      useEffect(() => {
        console.log('Comportamineto cunado el componenet recibe nuevos prosp o camboio en su estado privado')
      });
        return (
          <div>
            <h1>DidUpdate</h1>
          </div>
        );
    
}



