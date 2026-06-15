document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskCard = document.createElement('div');
            taskCard.className = `task-card p-4 rounded-lg shadow-md flex flex-col justify-between hover:animate-flip-rotate ${task.completed ? 'completed' : ''}`;
            taskCard.innerHTML = `
                <div>
                    <h3 class="font-bold text-lg text-black">${task.title}</h3>
                    <p class="text-black text-sm mt-2">${task.description}</p>
                    <p class="text-black text-xs mt-3">Due: ${task.dueDate}</p>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <button data-index="${index}" class="complete-btn text-green-500 hover:text-green-400 mr-3">
                        <i class="fas fa-check-circle fa-lg"></i>
                    </button>
                    <button data-index="${index}" class="delete-btn text-red-500 hover:text-red-400">
                        <i class="fas fa-trash-alt fa-lg"></i>
                    </button>
                </div>
            `;
            taskList.appendChild(taskCard);
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const dueDate = e.target['due-date'].value;
        tasks.push({ title, description, dueDate, completed: false });
        saveTasks();
        renderTasks();
        taskForm.reset();
    });

    taskList.addEventListener('click', (e) => {
        const completeBtn = e.target.closest('.complete-btn');
        const deleteBtn = e.target.closest('.delete-btn');

        if (completeBtn) {
            const index = completeBtn.dataset.index;
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        }

        if (deleteBtn) {
            const index = deleteBtn.dataset.index;
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        }
    });

    renderTasks();
});
