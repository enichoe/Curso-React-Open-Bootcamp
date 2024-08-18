import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetinsF from './components/pure/greetinsF';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyles from './components/pure/greetingStyles';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> */}
          {/* Componente propio Greeting.jsx */}
          {/* <Greeting name="ERNESTO"/> */}
          {/* <GreetinsF name="ERNESTITO"/> */}
          {/* componente de listado de tareas 
          */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* ejemplos de uso de Hooks */}
          {/* <Ejemplo1></Ejemplo1> */}
          {/* <Ejemplo2></Ejemplo2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 name="ernesto"> */}
          {/* todo lo que esta adentro es tratado como props.children  */}
            {/* <h3>Contenido del props.Children</h3>
          </Ejemplo4> */}
          {/* <GreetingStyles name="ernesto"></GreetingStyles> */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* gestion de eventos */}
          {/* <Father></Father> */}

          {/* ejemplos de renderizado condicional */}
          <OptionalRender></OptionalRender>
        {/* </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
