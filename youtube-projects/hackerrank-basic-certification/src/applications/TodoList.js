import '../App.css';
import { useState } from 'react';
import Task from '../components/Task.js' 

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const changeNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    let arr = todos.slice();
    arr.push(newTask);
    setTodos(arr);
  }

  const eliminateTask = (key) => {
    let arr = todos.slice();
    arr.splice(key, 1);
    setTodos(arr);
  }

  return (
    <div className="App">
      <div className='search-bar'>
        <input type='text' onChange={changeNewTask} />
        <button onClick={addTask}>Done!</button>
      </div>
      <div>
      {
        todos.map((todo, key) =>  {
            return (
                <Task key={key} todo={todo} index={key} eliminateTask={eliminateTask}/>
            )
        })
      }
      </div>
    </div>
  );
}

export default TodoList;
