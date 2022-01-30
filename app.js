//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) { 
    //prevent form from submitting
    event.preventDefault();

    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-thumbs-up"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input
    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;

    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove()
        });
    }

    //complete todo
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

