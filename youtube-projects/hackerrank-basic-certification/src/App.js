import './App.css';
import { useState } from 'react';
import Task from './components/Task.js' 

function App() {
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
      <>
      {
        todos.map((todo, key) =>  {
            return (
                <Task todo={todo} index={key} eliminateTask={eliminateTask}/>
            )
        })
      }
      </>
    </div>
  );
}

export default App;
