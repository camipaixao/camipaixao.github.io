var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Ao invés de já escrevermos os valores da array, vamos usar o localStorage para guardar as informações. Começando com um array vazio.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  //Removendo o conteúdo dentro da lista para que não seja duplicado ao adicionar um novo todo.
  listElement.innerHTML = '';
  //Esse é um for específico para array. Ele vai percorrer cada item do array (todos) e irá retornar dentro da variável todo.
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoParagraphElement = document.createElement('p');
    var todoText = document.createTextNode(todo);

    //Adicionando o texto dentro de um parágrafo
    todoParagraphElement.appendChild(todoText);

    //Criando o link de excluir
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');
    linkElement.setAttribute('href', '#');

    //Pesquisando no array qual é a posição que tem o texto. Ele vai procurar no array de todos o índice do todo que eu tô dentro desse ciclo de for.
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    //Adicionando o texto ao link
    linkElement.appendChild(linkText);

    //Adicionando os textos e as listas
    todoElement.appendChild(todoParagraphElement);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  //Adicionando um item no fim do array
  todos.push(todoText);
  //Apagar o texto atual do input
  inputElement.value = '';
  //Renderizando a lista novamente com o novo item que adicionamos no final
  renderTodos();
}

//Chamando a função ao clicar no botão
buttonElement.onclick = addTodo;

//Removendo um todo referenciando qual excluir através da posição no array (index).
//Ele irá receber a posição do item no array (pos).
function deleteTodo(pos) {
  //Removendo item do array a partir da posição. Exemplo: na posição 0, remover 1 item.
  todos.splice(pos, 1);
  renderTodos();
}

function saveToStorage() {
  //O setItem vai setar um valor no storage, no nosso caso o valor está se chamando list_todos. O localStorage não tem capacidade de guardar arrays, por isso vamos usar o JSON (JSON é igual um objeto mas é uma string). O stringify irá transformar o array em uma string.
  localStorage.setItem('list_todos', JSON.stringify(todos));
}