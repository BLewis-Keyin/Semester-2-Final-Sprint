import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList'; // Import your TaskList component path

test('renders task list correctly', () => {
  const { container } = render(<TaskList tasks={['Task 1', 'Task 2']} />);
  const taskListElement = container.querySelector('.task-list');
  expect(taskListElement).toBeInTheDocument();
});
