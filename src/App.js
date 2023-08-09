import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';
import { TaskProvider } from './TaskContext';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <TaskProvider>
      <div className="app">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <h1 className="app-title">To-Do List</h1>
          <div className="task-input">
            <input
              type="text"
              placeholder="Enter a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-button" onClick={addTask}>
              Add Task
            </button>
          </div>
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
        </BrowserRouter>
      </div>
    </TaskProvider>
  );
};

export default App;
