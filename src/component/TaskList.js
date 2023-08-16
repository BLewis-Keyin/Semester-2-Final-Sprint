import React from 'react';

function TaskList({ tasks, onDelete }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <br></br>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;