const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  if (!taskInput) {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>
      <strong>${taskInput}</strong> (${priority})<br>
      <small>Due: ${dueDate || 'No date'}</small>
    </span>
    <div class="icons">
      <i class="fas fa-check" title="Mark as complete" onclick="toggleComplete(this)"></i>
      <i class="fas fa-edit" title="Edit task" onclick="editTask(this)"></i>
      <i class="fas fa-trash" title="Delete task" onclick="deleteTask(this)"></i>
    </div>
  `;
  taskList.appendChild(taskItem);

  // Clear input fields
  document.getElementById('taskInput').value = '';
  document.getElementById('dueDate').value = '';
}

// Toggle task completion
function toggleComplete(icon) {
  const taskItem = icon.parentElement.parentElement;
  taskItem.classList.toggle('completed');
}

// Edit a task
function editTask(icon) {
  const taskItem = icon.parentElement.parentElement;
  const taskDetails = taskItem.querySelector('span').innerText.split('\n')[0];
  const [taskText, priority] = taskDetails.split(' (');
  document.getElementById('taskInput').value = taskText;
  document.getElementById('priority').value = priority.replace(')', '');
  taskList.removeChild(taskItem);
}

// Delete a task
function deleteTask(icon) {
  const taskItem = icon.parentElement.parentElement;
  taskList.removeChild(taskItem);
}