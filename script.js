//criar novo elemento, seus atributos e inserir na lista de tarefas
const inserirTarefa = () =>{
  const inserir = document.getElementById('inserir')
  const tarefa =  document.getElementById('tarefa')
  //criar elemento
  const div = document.createElement('div')
  const button = document.createElement('button')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const barra = document.createElement('br')
  //criar atributo
  const classe = document.createAttribute('class')
  const buttonType = document.createAttribute('type')
  const buttonOnclick = document.createAttribute('onclick')
  const type = document.createAttribute('type')
  const checkOnclick = document.createAttribute('onclick')
  //definir valores dos atributos
  div.className = 'divisao'
  button.className = "button"
  classe.value = `btn btn-light ${button.className}`
  buttonType.value = "button"
  buttonOnclick.value = "excluir()"
  type.value = 'checkbox'
  label.className = 'para'
  input.className = 'check'
  checkOnclick.value = 'visibilidade()'
  //setar o atrubuto inserindo o valor no elemento
  button.setAttributeNode(classe)
  button.setAttributeNode(buttonType)
  button.setAttributeNode(buttonOnclick)
  input.setAttributeNode(type);
  input.setAttributeNode(checkOnclick)
  // adicionar o elemento filho ao elemento pai
  div.appendChild(input)
  div.appendChild(label)
  label.innerHTML = `${tarefa.value}`
  div.appendChild(button)
  tarefa.value = ''
  div.appendChild(barra)
  inserir.appendChild(div)
}

// marcar um item como concluido inserir um tachado no texto: em andamento
const visibilidade = () => {
  const para = document.querySelector('.para')
  para.style.textDecoration = 'line-through'
}

// excluir um item da lista: funcional, porém com erro na ordem de exclusão
const excluir = () =>{
  const divisao = document.getElementsByClassName('divisao')
  divisao[0].remove()
  
}