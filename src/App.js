import React , {useState} from 'react';
//import './App.css';
// TODO COMponent
// could pass in props.todo.text ... but used variable from destructuring
function Todo ({todo, index}){
return(
  <div className="todo">{todo.text}</div>
)
}

// TODO COMPONENT
// {} bcz its destructured  from props
// will have state as well
function TodoForm ({addTodo}){

  const [value, setValue]  = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    // if its an empty value donot submit(return;)
    if(!value) return;
    //then
    addTodo(value);
    // clear the form
    setValue('');
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange = { e=> setValue(e.target.value)}/>
    </form>
  )

}





function App(){
  // destructure state amd method used to update the states from useState
const [todos,setTodos] = useState ([
  // individual todos
  {
    text:'Learn To play guitar',
    isCompleted:false
  },
  {
    text:'Learn To play Trumpet',
    isCompleted:false
  },
  {
    text:'Learn To play banjo',
    isCompleted:true
  },

]);
// AddTodo method
// takes value(state) from form and adds it to Todos(state)
const addTodo = (text) =>{
  const newTodos = [...todos,{text}];
  setTodos(newTodos);
}


return (
  <div className = 'app'>
    <div className="todo-list">
      {todos.map((todo,index)=> (
      <Todo key={index} index={index} todo={todo}/>
      ))
        
      }
      <TodoForm addTodo={addTodo}/>
    </div>
  </div>
)
}


export default App;