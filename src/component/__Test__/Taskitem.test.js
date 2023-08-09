import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskItem from './TaskItem'; // Import your TaskItem component path

test('renders task item correctly', () => {
  render(<TaskItem task="Sample Task" />);
  const taskItemElement = screen.getByText(/Sample Task/i);
  expect(taskItemElement).toBeInTheDocument();
});
