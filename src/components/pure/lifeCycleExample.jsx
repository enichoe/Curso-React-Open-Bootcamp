// ejemplo de componente tipo mclase que dispone d elos mentodos del ciclo de vida

import React,{ Component } from "react";
import PropTypes from 'prop-types';

class LifeCycleExample extends Component{
    
    constructor(props){
        super(props);
        console.log('CONSTRUCTOR :cuando se instancia el componente');
    }



    componentWillMount(){
        console.log('WILLMOUNT : antes del montaje del componene');
    }

    componentDidMount(){
        console.log('MOUNTED : despues del montaje del componente antes de pintarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps ,nextState){
        // para controlar si el componente debe o no actualizarse return true o false
    }

    componentWillUpdate(nextProps,prevState){
        console.log('antes de actualizar el componente')
    }

    componentDidUpdate(prevProps , prevState){
        console.log('despues de actualizar el componente')
    }

    componentWillUnmount(){
        console.log('antes de destruir el componente')
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default LifeCycleExample