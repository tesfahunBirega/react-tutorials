import React, { useState,useRef, useEffect } from 'react'
import './CSS/Todo.css';

let count=0;
 const Todo = () => {

const [todos, setTodos] = useState([]);
const inputRef = useRef(null);

const add = () => {
  setTodos([...todos,{no:count++,text:inputRef.current.value,display:"T"}])
  inputRef.current.value ="";

}

useEffect(() => {
  console.log(todos);

},[todos])
  return (
    <div className='todo'>
           <div className="todo-header">To-Do List</div>
           <div className="todo-add">
            <input ref={inputRef} className="todo-input" typeof='text' placeholder='Add Your Task'></input>
            <div onClick={() => {add()}} className="todo-add-btn">ADD</div>
           </div>

    </div>
  )
}


export default Todo