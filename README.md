# Task Manager

Task Manager is a simple web application for managing tasks. You can add, edit, and delete tasks, and they are saved in the browser's local storage to remain accessible after a page reload.

## Features

- **Add Task:** Users can enter a task in the input field and click the "Add" button to add it to the list.
- **Edit Task:** Each task can be edited by clicking the "Edit" button next to it.
- **Delete Task:** Users can delete a task by clicking the "Delete" button.
- **Task Persistence:** All tasks are saved in the browser's `localStorage` and automatically restored during the next visit.

## Technologies

- **HTML:** Structure of the web page.
- **CSS:** Styles for improving the visual appearance.
- **JavaScript:** Application logic, including task management and saving tasks to `localStorage`.

## Files

- `index.html`: Main HTML file of the application.
- `styles.css`: Styles for the user interface.
- `script.js`: Logic for application functionality.

## Application Structure

### HTML

A form for entering new tasks and a task list:

```html
<form id="task-form">
    <input type="text" id="task-input" placeholder="Enter a new task" required>
    <button type="submit">Add</button>
</form>
<div id="task-list"></div>
