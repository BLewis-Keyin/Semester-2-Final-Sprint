import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Home = ({ showTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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
    setSelectedTask(null); // Clear selected task when deleted
  };

  const toggleTaskList = () => {
    setIsTaskListOpen(!isTaskListOpen);
  };

  const toggleTaskDetails = (index) => {
    if (selectedTask === index) {
      setSelectedTask(null); // Close details if already open
    } else {
      setSelectedTask(index); // Show details for clicked task
    }
  };

  const showTaskDetails = (taskIndex) => {
    setSelectedTask(taskIndex);
  };

  return (
    <div className='container'>
      {showTasks && (
        <div className='task-app-container'>
          <button onClick={() => setIsFormOpen(true)} className="add-task-button">
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
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="task-info-input" // Add the class name here
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
                    <p className="task-name" onClick={() => showTaskDetails(index)}>
                      {task.name}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Display task details area */}
      <br />
      <br />
      
      {selectedTask !== null && (
        <div className="task-details-container">
          <p><strong><div>{tasks[selectedTask].name}</div></strong> </p>
          <p><b>Description:</b><br /><div className='task-details-box'>{tasks[selectedTask].description}</div></p>
          <p><b>Date:</b> {tasks[selectedTask].date}</p>
          <p><b>Time:</b>  {tasks[selectedTask].time}</p>
          <button className='delete-button' onClick={() => deleteTask(selectedTask)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Home;