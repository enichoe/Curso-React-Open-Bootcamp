import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
// importamos la hoja de estilos de task.scss
import '../../styles/tasks.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task ,complete, remove}) => {
    useEffect(() =>{
        console.log('create task');
        return()=>{
            console.log(`Task: ${task.name} is going to unmount`);
        }
    },[task]);
    // funtion that retirns a badge , depending on the levl of de task

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENTE:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;    
        }
    }
    // funtion that return icon depeding on competed of de task
    function taskCompletedIcon(){
        if(task.completed){
            return (<i 
            onClick={() => complete(task)}
            className='bi-toggle-on task-action'style={{color:'green',fontWeight:'bold'}}></i>)
        }else{
            return (<i 
            onClick={() => complete(task)}
            className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }

    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>    
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* Execution of funtion to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/* todo sustituir por iconos*/}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color:'tomato' ,fontSize:'20px' }}onClick={()=>remove(task)}></i> 
            </td>

        </tr>



    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default TaskComponent;
