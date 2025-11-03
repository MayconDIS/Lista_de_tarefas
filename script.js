// Aguarda o DOM estar completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

  // Seleciona os elementos do HTML que vamos usar
  const inputTarefa = document.getElementById('tarefa');
  const btnAdicionar = document.getElementById('btn');
  const lista = document.getElementById('lista');

  // --- Função para Adicionar Tarefa ---
  function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim(); // Pega o valor do input, sem espaços extras

    // Verifica se o campo não está vazio
    if (textoTarefa === "") {
      alert("Por favor, digite uma tarefa.");
      return; // Para a execução se estiver vazio
    }

    // Cria um novo elemento <li> (item da lista)
    const novoLi = document.createElement('li');

    // Define o conteúdo HTML do novo item, baseado na sua estrutura
    novoLi.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${textoTarefa}</span>
      <i class="fa-solid fa-trash-can close"></i>
    `;

    // Adiciona o novo item (li) à lista (ul)
    lista.appendChild(novoLi);

    // Limpa o campo de input
    inputTarefa.value = "";
  }

  // --- Adicionar Tarefa ao Clicar no Botão ---
  // Adiciona um "ouvinte" de clique no botão de adicionar
  btnAdicionar.addEventListener('click', adicionarTarefa);

  // --- Adicionar Tarefa ao Pressionar "Enter" ---
  // Adiciona um "ouvinte" de tecla no campo de input
  inputTarefa.addEventListener('keyup', function(e) {
    // Verifica se a tecla pressionada foi o "Enter" (código 13)
    if (e.key === 'Enter' || e.keyCode === 13) {
      adicionarTarefa();
    }
  });

  // --- Marcar como Concluída ou Excluir Tarefa ---
  // Adiciona um "ouvinte" na LISTA inteira (isso se chama "event delegation")
  // É mais eficiente do que adicionar um ouvinte para cada item
  lista.addEventListener('click', function(e) {
    const itemClicado = e.target; // Pega o elemento exato que foi clicado

    // Verifica se o clique foi no ícone de lixeira (que tem a classe 'close')
    if (itemClicado.classList.contains('close')) {
      // Pega o "pai" do ícone (o <li>) e o remove
      itemClicado.parentElement.remove();
    } 
    // Verifica se o clique foi no item da lista (LI), no texto (SPAN) ou no ícone de check
    else if (itemClicado.tagName === 'LI' || itemClicado.tagName === 'SPAN' || itemClicado.classList.contains('fa-check-circle')) {
      // Pega o item <li> mais próximo e adiciona/remove a classe 'checked'
      itemClicado.closest('li').classList.toggle('checked');
    }
  });

});