// Task data array
let tasks = [];

// Selecting elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

// Function to render tasks
function renderTasks() {
    // Clear existing tasks
    taskList.innerHTML = '';

    // Render each task item
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
            <div class="actions">
                <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask(name) {
    tasks.push({ name: name, completed: false });
    renderTasks();
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    let newName = prompt('Enter new task name:', tasks[index].name);
    if (newName && newName.trim() !== '') {
        tasks[index].name = newName;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm(`Are you sure you want to delete "${tasks[index].name}"?`)) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let taskName = todoInput.value.trim();
    if (taskName !== '') {
        addTask(taskName);
        todoInput.value = '';
    }
});

// Initial render of tasks
renderTasks();
