

//criar novo elemento, seus atributos e inserir na lista de tarefas
const inserirTarefa = () =>{
  const inserir = document.getElementById('inserir')
  const tarefa =  document.getElementById('tarefa')
  //criar elemento
  const div = document.createElement('li')
  const button = document.createElement('button')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const barra = document.createElement('br')
  //criar atributo
  const classe = document.createAttribute('class')
  const buttonType = document.createAttribute('type')
  // const buttonOnclick = document.createAttribute('onclick')
  const type = document.createAttribute('type')
  // const checkOnclick = document.createAttribute('onclick')
  //definir valores dos atributos
  div.className = 'divisao'
  button.className = "button"
  classe.value = `btn btn-light ${button.className}`
  buttonType.value = "button"
  // buttonOnclick.value = "excluir()"
  type.value = 'checkbox'
  label.className = 'para'
  input.className = 'check'
  // checkOnclick.value = 'visibilidade()'
  //setar o atrubuto inserindo o valor no elemento
  button.setAttributeNode(classe)
  button.setAttributeNode(buttonType)
  // button.setAttributeNode(buttonOnclick)
  input.setAttributeNode(type);
  // input.setAttributeNode(checkOnclick)
  // adicionar o elemento filho ao elemento pai
  div.appendChild(input)
  div.appendChild(label)
  label.innerHTML = `${tarefa.value}`
  div.appendChild(button)
  tarefa.value = ''
  div.appendChild(barra)
  inserir.appendChild(div)

  //collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
  const close = document.getElementsByClassName("button")
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = (event) => { 
      const remove = event.target.parentElement
      remove.remove()
    }
  }

  // marcar um item como concluido inserir um tachado no texto: em andamento
  const visivel = document.getElementsByClassName("check")
  for (let i = 0; i < visivel.length; i++) {
    visivel[i].onclick = (event) => { 
      const para = event.target.parentElement;
      para.style.textDecoration = 'line-through'
    }
  }

}




