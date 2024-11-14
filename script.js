const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDateTime = document.getElementById('task-datetime');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value, taskDateTime.value);
    taskInput.value = '';
    taskDateTime.value = '';
});

function addTask(taskName, taskDateTime) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskName} - ${taskDateTime}`;
    taskItem.appendChild(taskContent);

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskContent.classList.toggle('completed');
    });
    taskButtons.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        const newTaskName = prompt('Edit task:', taskName);
        const newTaskDateTime = prompt('Edit date & time:', taskDateTime);
        if (newTaskName) taskContent.textContent = `${newTaskName} - ${newTaskDateTime}`;
    });
    taskButtons.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskButtons.appendChild(deleteButton);

    taskItem.appendChild(taskButtons);
    taskList.appendChild(taskItem);
}
