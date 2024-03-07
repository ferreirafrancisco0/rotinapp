// Variáveis globais
const taskList = document.getElementById('task-list');

// Função para adicionar uma tarefa
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskTime = document.getElementById('task-time').value;

    if (taskName && taskTime) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<span>${taskName}</span> <span>${taskTime} min</span> <button onclick="removeTask(this)">Remover</button>`;
        taskList.appendChild(taskItem);

        // Limpar campos de entrada
        document.getElementById('task-name').value = '';
        document.getElementById('task-time').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para remover uma tarefa
function removeTask(button) {
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
