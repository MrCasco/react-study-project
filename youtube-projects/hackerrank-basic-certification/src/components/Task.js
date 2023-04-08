import { useState } from 'react';
import '../App.css';

const Task = ({todo, index, eliminateTask}) => {

    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <div>
            <h1 className='task' style={{color: isCompleted ? 'green':'black'}}>{todo}</h1>
            <button onClick={() => setIsCompleted(!isCompleted)}>Complete</button>
            <button onClick={() => eliminateTask(index)}>X</button>
        </div>
    );
}

export default Task;