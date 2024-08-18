import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/tasks.scss';
import TaskForm from '../pure/forms/TaskForm';





const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1','Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2','Description2', false, LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3','Description3', false, LEVELS.BLOCKING);
    
    
    
    // estado del componente 
    const [tasks,setTasks]=useState([defaultTask1,defaultTask2,defaultTask3]);

    const [loading,setLoading]=useState(true);
    // control del ciclo de vida del componente
    
    useEffect(() =>{
        console.log('task state has been modified');
        setLoading(false);
        return()=>{
            console.log('tasklist component is going to unmount ');
        }
    },[tasks])

    function completeTask(task){
        console.log('Complete this Task' ,task);
        const index=tasks.indexOf(task);
        const tempTask=[...tasks];
        tempTask[index].completed=!tempTask[index].completed;
        // we update the state of de componet ant it will update the interaccion of the task in order to show the task update
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log('Delete this Task' ,task);
        const index=tasks.indexOf(task);
        const tempTask=[...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask);
    }

    function addTask(task){
        console.log('Delete this Task' ,task);
        const index=tasks.indexOf(task);
        const tempTask=[...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

   
    return (
        <div>
            <div className='col-12'>
            <div className='card'>
            {/* card heaer(title) */}
                <div className='card-header p-3'>
                    <h5>
                    Your Tasks:
                    </h5>
                </div>
                {/* card body(content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true'  style={{position:'relative',height:'400px'}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>    
                        </thead>
                        <tbody>
                          {tasks.map((tasks,index)=>{
                            return(
                                <TaskComponent 
                                key={index} 
                                task={tasks}
                                complete={completeTask}
                                remove={deleteTask}

                               ></TaskComponent>
                                )
                          }
                          )}
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>    
            </div>
            <TaskForm add={addTask}></TaskForm>
            {/* TODO aplicar un FOR / MAP para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
