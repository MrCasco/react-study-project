import '../App.css';

const Task = ({todo, index, eliminateTask}) => {
    return (
        <div>
            <h1 className='task'>{todo}</h1>
            <button onClick={() => eliminateTask(index)}>X</button>
        </div>
    );
}

export default Task;