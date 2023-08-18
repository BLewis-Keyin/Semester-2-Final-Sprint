import React, { createContext, useContext, useState } from 'react';

// Create a context
const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    // Function to add a task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Function to delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setSelectedTask(null); // Clear selected task when deleted
    };


    const updateTask = (index, updatedTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(updatedTasks);
    };

    return (
        // Provide the context value to children
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                updateTask,
                selectedTask,
                setSelectedTask,

            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

// Custom hook to use the context
export function useTaskContext() {
    return useContext(TaskContext);
}

export default TaskContext;