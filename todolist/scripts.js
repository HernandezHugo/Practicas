const task = document.querySelector('.task');
const list = document.querySelector('.list');

const addBtn = document.querySelector('.add')

function addButtons(task) {
    const completedBtn = document.createElement('BUTTON');
    completedBtn.classList.add('btn', 'completed');
    completedBtn.innerText = '✓';

    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add('btn', 'delete');
    deleteBtn.innerText = '✗';

    task.appendChild(completedBtn);
    task.appendChild(deleteBtn);
}

function addTasks() {
    let newTask = document.createElement('LI');
    newTask.classList.add('task__listed');

    let taskContent = document.createElement('P');
    taskContent.innerText = task.value.trim();

    newTask.appendChild(taskContent);
    addButtons(newTask);
    list.appendChild(newTask);

    task.value = ''
}

addBtn.addEventListener('click', () => {
    if (task.value === '') return;
    addTasks();
});

// completedBtn.addEventListener('click', () => {

// })

// deleteBtn.addEventListener('click', () => {

// })