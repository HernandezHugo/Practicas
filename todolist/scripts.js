const task = document.querySelector('.task');
const list = document.querySelector('.list');

const addBtn = document.querySelector('.add');

function addButtons(task) {
    const completedBtn = document.createElement('BUTTON');
    completedBtn.classList.add('btn', 'completed', 'border');
    completedBtn.innerText = '✓';

    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add('btn', 'delete', 'border');
    deleteBtn.innerText = '✗';

    completedBtn.addEventListener('click', () => {
        task.classList.toggle('task__completed');
    })

    deleteBtn.addEventListener('click', () => {
        task.classList.add('deleting');
        setTimeout(() => {
            task.remove();
        }, 500);
    })

    task.appendChild(completedBtn);
    task.appendChild(deleteBtn);
}

function addTasks() {
    let newTask = document.createElement('LI');
    newTask.classList.add('task__listed', 'border', 'shadow');

    let taskContent = document.createElement('P');
    taskContent.innerText = task.value.trim();

    newTask.appendChild(taskContent);
    addButtons(newTask);
    list.appendChild(newTask);

    task.value = '';
}

addBtn.addEventListener('click', () => {
    if (task.value === '') return;
    addTasks();
});