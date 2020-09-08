import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  //States
  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])
  const [status,setstatus]=useState("all")
  const [filteredTodo,setfilteredTodo]=useState([])

  //Use only at the starting of app
  useEffect(() => {
    getLocalTodos()
  }, [])

  //Use Effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos,status])

  //Todos Filter
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setfilteredTodo(todos.filter(el=>el.completed===true))
        break;
      case 'incompleted':
        setfilteredTodo(todos.filter(el=>el.completed===false))
        break;  
      default:
        setfilteredTodo(todos)
        break;
     }
  }

  //To save todos locally
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  //To get the saved todos
  const getLocalTodos=()=>{
    if (localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      let localTodo=JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }

  return (
    <div className="App">
      <h1 className="center" >kkvanonymous ToDo List</h1>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setstatus={setstatus} />
      <Todo todos={todos} setTodos={setTodos} filteredTodo={filteredTodo}/>
    </div>
  );
}

export default App;
