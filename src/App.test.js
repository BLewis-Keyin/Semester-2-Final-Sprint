import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home'; // Adjust the import path
import { TaskProvider } from './TaskContext'; // Adjust the import path

test('Adding a task', () => {
  render(
    <TaskProvider>
      <Home showTasks={true} />
    </TaskProvider>
  );

  // Get input fields and buttons
  const nameInput = screen.getByPlaceholderText('Name');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const dateInput = screen.getByPlaceholderText('Date');
  const timeInput = screen.getByPlaceholderText('Time');
  const addButton = screen.getByText('Add Task');

  // Fill input fields
  fireEvent.change(nameInput, { target: { value: 'New Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'Task description' } });
  fireEvent.change(dateInput, { target: { value: '2023-08-20' } });
  fireEvent.change(timeInput, { target: { value: '14:00' } });

  // Click the Add Task button
  fireEvent.click(addButton);

  // Check if the task has been added
  const addedTask = screen.getByText('New Task');
  expect(addedTask).toBeInTheDocument();
}),
  
test('Deleting a task', () => {
  render(
    <TaskProvider>
      <Home showTasks={true} />
    </TaskProvider>
  );

  // Assume there's a task with the name 'Task to Delete'
  const taskToDelete = screen.getByText('Task to Delete');
  const deleteButton = screen.getByText('Delete');

  // Click the delete button
  fireEvent.click(deleteButton);

  // Check if the task has been removed
  expect(taskToDelete).not.toBeInTheDocument();
}),

test('Updating a task', () => {
  render(
    <TaskProvider>
      <Home showTasks={true} />
    </TaskProvider>
  );

  // Assume there's a task with the name 'Task to Update'
  const taskToUpdate = screen.getByText('Task to Update');
  const editButton = screen.getByText('Edit');

  // Click the edit button
  fireEvent.click(editButton);

  // Get input fields and buttons for editing
  const nameInput = screen.getByPlaceholderText('Name');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const dateInput = screen.getByPlaceholderText('Date');
  const timeInput = screen.getByPlaceholderText('Time');
  const saveButton = screen.getByText('Save');

  // Edit input fields
  fireEvent.change(nameInput, { target: { value: 'Updated Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'Updated description' } });
  fireEvent.change(dateInput, { target: { value: '2023-08-21' } });
  fireEvent.change(timeInput, { target: { value: '15:00' } });

  // Click the Save button
  fireEvent.click(saveButton);

  // Check if the task has been updated
  const updatedTask = screen.getByText('Updated Task');
  expect(updatedTask).toBeInTheDocument();
});


