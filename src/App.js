import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch,useSelector } from 'react-redux';
import { todos } from './redux/states';
import { filtertodo } from './redux/actions';



function App() {
 let dispatch = useDispatch(); 
const filter = useSelector(state => state.filterreducer)

  return (
    <div className="App m-5">
      <h1> To Do App </h1>
      <TodoInput/>
      <button className="btn btn-danger m-2" onClick={()=>dispatch ( filtertodo(null))} >All</button>
      <button className="btn btn-danger m-2"onClick={()=>dispatch ( filtertodo(true))}>DONE</button>
    <button className="btn btn-danger m-2" onClick={()=>dispatch ( filtertodo(false))}>UNDONE</button>
      <TodoList todos={filter=== null? todos:todos.filter(el=>el.isDone===filter)}/>
    </div>
  );
}

export default App;