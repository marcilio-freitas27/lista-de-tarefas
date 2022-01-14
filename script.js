

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
  const type = document.createAttribute('type')
  // define um valor para a classe
  div.className = 'divisao'
  button.className = "button"
  label.className = 'para'
  input.className = 'check'
  //definir valores dos atributos
  classe.value = `btn btn-light ${button.className}`
  buttonType.value = "button"
  type.value = 'checkbox'
  //setar o atrubuto inserindo o valor no elemento
  button.setAttributeNode(classe)
  button.setAttributeNode(buttonType)
  input.setAttributeNode(type);
  // adicionar o elemento filho ao elemento pai
  div.appendChild(input)
  div.appendChild(label)
  // inserir o valor do imput no elemtento(label)
  label.innerHTML = `${tarefa.value}`
  div.appendChild(button)
  //inserido o elemento, o input fica sem texto
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

  // marcar um item como concluido e  inserir um tachado no texto: funcional
  const visivel = document.getElementsByClassName("check")
  for (let i = 0; i < visivel.length; i++) {
    visivel[i].onclick = (event) => { 
      const para = event.target.parentElement;
      para.style.textDecoration = 'line-through'
    }
  }

}
