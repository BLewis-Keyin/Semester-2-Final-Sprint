import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = ({ showTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);

  const addTask = () => {
    if (name.trim() !== '' && description.trim() !== '' && date.trim() !== '' && time.trim() !== '') {
      setTasks([...tasks, { name, description, date, time }]);
      setName('');
      setDescription('');
      setDate('');
      setTime('');
      setIsFormOpen(false);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskList = () => {
    setIsTaskListOpen(!isTaskListOpen);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {showTasks && (
        <div>
          <button onClick={() => setIsFormOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        

          {isFormOpen && (
            <div className="popup-overlay">
              <div className="task-form-popup active">
                <h2>Add New Task</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
                <button onClick={() => setIsFormOpen(false)}>Close</button>
              </div>
            </div>
          )}
        <div className='task-list-container'>
          <div className="task-list-header">
            <h2>Task List</h2>
            <button className="toggle-button" onClick={toggleTaskList}>
              {isTaskListOpen ? '▲' : '▼'}
            </button>
            </div>


          {isTaskListOpen && (
            <ul className="task-list">
              {tasks.map((task, index) => (
                <li key={index}>
                  <strong>Name:</strong> {task.name}
                  <br />
                  <strong>Description:</strong> {task.description}
                  <br />
                  <strong>Date:</strong> {task.date}
                  <br />
                  <strong>Time:</strong> {task.time}
                  <br />
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;