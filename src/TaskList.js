import React from 'react';
import { useTaskContext } from '../TaskContext'; // Update the path

function TaskList() {
  const { tasks, removeTask } = useTaskContext();

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button className="delete-button" onClick={() => removeTask(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
