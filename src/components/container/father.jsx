import React,{useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {
    const [name,setName]= useState('Alfredo')

    function showMessage(text){
        alert(`message received:${text}`)
    }

    function updateName(newName){
        setName(newName)
    }
    return (
        <div style={{background:'tomato',padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName} ></Child>
        </div>
    );
}

export default Father;
