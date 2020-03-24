
var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href','#');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

function addTodo(){    
    var todoText = inputElement.value;
    if(todoText == ''){
        alerta_vazio();
    }
    else{
        
        todos.push(todoText);
        inputElement.value = "";
        saveToStorage();
    }
    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos,1)
    saveToStorage();
    renderTodos();

}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function alerta_vazio(){
    alert("ERRO, você esta tentando adicionar um item vazio");
}

buttonElement.onclick = addTodo;

renderTodos()