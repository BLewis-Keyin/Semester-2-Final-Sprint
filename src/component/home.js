import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from './TaskContext'; // Update the path to TaskContext
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Home = ({ showTasks }) => {
  const { tasks, addTask, deleteTask, setSelectedTask, selectedTask, updateTask } = useTaskContext();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedTime, setEditedTime] = useState('');


  const handleEditTask = (index) => {
    const task = tasks[index];
    setEditedName(task.name);
    setEditedDescription(task.description);
    setEditedDate(task.date);
    setEditedTime(task.time);
    setIsEditing(true);
    setSelectedTask(index);
  };

  const saveEditedTask = () => {
    if (
      editedName.trim() !== '' &&
      editedDescription.trim() !== '' &&
      editedDate.trim() !== '' &&
      editedTime.trim() !== ''
    ) {
      const updatedTask = {
        name: editedName,
        description: editedDescription,
        date: editedDate,
        time: editedTime,
      };
      updateTask(selectedTask, updatedTask);
      setIsEditing(false);
      setEditedName('');
      setEditedDescription('');
      setEditedDate('');
      setEditedTime('');
      setSelectedTask(null);
    }
  };

  const startEdit = (task) => {
    setEditedName(task.name);
    setEditedDescription(task.description);
    setEditedDate(task.date);
    setEditedTime(task.time);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    // Clear the edited fields
    setEditedName('');
    setEditedDescription('');
    setEditedDate('');
    setEditedTime('');
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

  const handleAddTask = () => {
    if (name.trim() !== '' && description.trim() !== '' && date.trim() !== '' && time.trim() !== '') {
      addTask({ name, description, date, time });
      setName('');
      setDescription('');
      setDate('');
      setTime('');
      setIsFormOpen(false);
    }
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
                  className="task-info-input"
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
                <button onClick={handleAddTask}>Add Task</button>
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
                    <p className="task-name" onClick={() => toggleTaskDetails(index)}>
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
          <p><strong>{tasks[selectedTask].name}</strong></p>
          <p><b>Description:</b><br /><div className='task-details-box'>{tasks[selectedTask].description}</div></p>
          <p><b>Date:</b> {tasks[selectedTask].date}</p>
          <p><b>Time:</b>  {tasks[selectedTask].time}</p>
          <button className='delete-button' onClick={() => deleteTask(selectedTask)}>Delete</button>
          <button className='edit-button' onClick={() => handleEditTask(selectedTask)}>Edit</button>
          {/* Edit Form */}
          {selectedTask !== null && isEditing && (
            <div className="edit-form">
              <h2>Edit Task</h2>
              <input
                type="text"
                placeholder="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="task-info-input"
              />
              <input
                type="text"
                placeholder="Date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Time"
                value={editedTime}
                onChange={(e) => setEditedTime(e.target.value)}
              />
              <button onClick={saveEditedTask}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;