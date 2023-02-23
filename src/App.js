//import logo from './logo.svg';
 //import './App.css';

import AlbumTemplate from "./bootstrap-comp/AlbumTemplate";
import MoviesRoundup from "./movie-review/components/MoviesRoundup";

// import LoginForm from './data-binding-forms/LoginForm';
// import MulCheckbox from './data-binding-forms/MulCheckbox';
// import SelectTag2 from './data-binding-forms/SelectTag2';
// import Test from './data-binding-forms/Test';

// import Greeting from './Greeting';
// import LoginControl from './LoginControl';
// import NumberList from './NumberList';
 //import Main from './todos-app/Main';
// import UserForm from './UserForm';

// import Clock from './Clock';
// import ReactElement from './ReactElement';
// import ReactElement2 from './ReactElement2';
// import ReactElement3 from './ReactElement3';
// import ReactElement4 from './ReactElement4';
// import ReactElement5 from './ReactElement5';
// import FunctionalComp from './FunctionalComp';
// import ClassBasedComp from './ClassBasedComp';
// import Clock1 from './Clock1';
// import ToggleButton from './ToggleButton';
// import ToggleButton1 from './ToggleButton1';
// import AnalogClock from './AnalogClock';
//import  Dashboard  from '../../react-basic-app/src/Dashboard/Dashboard';
// import AlertDismiss2 from './bootstrap-comp/AlertDismiss2';
// import AlertDismissable from './bootstrap-comp/AlertDismissible';
// import Alerts from './bootstrap-comp/Alerts';
// import ButtonEx1 from './bootstrap-comp/ButtonEx1';
// import ButtonLoadingState from './bootstrap-comp/ButtonLodingState';
// import ButtonTags from './bootstrap-comp/ButtonTags';
//import Calculator from './components/Calculator';
   //import Todos from './todos-app2/Todos';
   

export default function App() {

  


/*   const numbers = [20, 45, 73, 90, 'Test'];
  const numbers2 = [21, 45, 73, 91, 'Test'];
  const todos = [{id:'1', name:'coding', isDone:false},{id:'2',name:'walking', isDone:true}]; */


  return  (  <div>   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <ReactElement/>
    <ReactElement2/>
    <ReactElement3/>
    <ReactElement4/>
    <ReactElement5/>
    <FunctionalComp name="Suresh Reddy"/>
    <ClassBasedComp message = "React is Great" />
      <Clock  />
      <Clock1  />
       
       <ToggleButton />
      
      <AnalogClock /> 
      <ToggleButton1 />
      <Calculator /> 
      <Greeting isLoggedIn/>
      <LoginControl hasNewMessage={true} credit={200000} hasWarning />*/}

      
     {/*  <NumberList numbers={numbers} />
      <br></br>
      <NumberList numbers={numbers2} />
      <br></br>
       <ul>
         {todos.map((todo) => (
          <li key={todo.id}>{todo.name} - {todo.isDone? "Done" : ""}</li>
        ))}
       </ul> */}
      
      {/* <Main /> */}
      {/* <Dashboard /> */}
      <MoviesRoundup />
    </div>
  );
}

  