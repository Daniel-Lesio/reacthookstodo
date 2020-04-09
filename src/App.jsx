import { v4 as uuid } from 'uuid';
import React , {useState ,useRef , useEffect} from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([

  ])
  const todoNameRef = useRef();

  useEffect(()=>{
    const stored = localStorage.getItem('todos')
   console.log(stored) 
    if(stored) setTodos(JSON.parse(stored))
  },[])


  useEffect(()=>{
    const newT = [...todos]
    console.log(newT)
    localStorage.setItem('todos' , JSON.stringify(newT))
  },[todos])
  
  
  const handleAddTodo = (e) =>{
    const name = todoNameRef.current.value
    if(name === '') return
    console.log(name)
    setTodos(prev => {
      return [...prev , {id:uuid(),name,complete:false}]
    })
    todoNameRef.current.value = null
  }
  const toggleTodo = (id) =>{
    const newTodos = [...todos]
    const todo = newTodos.find(todo=>todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }
  const clearTodosCompleted = ()=>{
    const todosNotCompleted = todos.filter(todo => todo.complete === false)
    setTodos(todosNotCompleted)
  }
  return (
    <div className=" mt-2 App wrapper">
      <TodoList todos={todos}  toggleTodo={toggleTodo} />
      <form style={{display:'flex',flexDirection:'column'}} >
      <input autoFocus ref={todoNameRef} type="text"/>
      <button onClick={ handleAddTodo } >Add TODO</button>
      <button onClick={clearTodosCompleted} >ClearCompletedTodos</button>
      </form>
  <div className='mt-2'>Still to do:  {todos.filter(todo=>todo.complete === false).length}</div>
    </div>
  );
}
export default App;