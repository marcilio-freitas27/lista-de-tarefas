
const inserirTarefa = () =>{
  const inserir = document.getElementById('inserir')
  const button = document.createElement('button')
  const classe = document.createAttribute('class')
  const buttonType = document.createAttribute('type')
  const buttonId = document.createAttribute('id')
  const buttonOnclick = document.createAttribute('onclick')
  // const para = document.getElementById('para')
  classe.value = "btn btn-light"
  buttonType.value = "button"
  buttonId.value = "button"
  buttonOnclick.value = "excluir()"
  // buttonStyle = "background: url(https://img.icons8.com/wired/16/000000/deconste.png)"
  button.setAttributeNode(classe)
  button.setAttributeNode(buttonId)
  button.setAttributeNode(buttonType)
  button.setAttributeNode(buttonOnclick)
// button.setAttributeNode(buttonStyle);
  const tarefa =  document.getElementById('tarefa')
  //criar um elemento
  const input = document.createElement('input')
  const label = document.createElement('label')
  const barra = document.createElement('br')
  //inserir um valor no atributo
  const type = document.createAttribute('type')
  const id = document.createAttribute('id')
  const checkOnclick = document.createAttribute('onclick')
  const idPara = document.createAttribute('id')
  //atribuir valores ao atributo
  type.value = 'checkbox'
  id.value = 'check'
  checkOnclick.value = 'visibilidade()'
  idPara.value = 'para'
  // alterar o valor do atributo
  input.setAttributeNode(type);
  input.setAttributeNode(id);
  input.setAttributeNode(checkOnclick)
  label.setAttributeNode(idPara);
  // para.style.textDecoration = 'none'
  //adicionar o elemento ao documento
  inserir.appendChild(input)
  // inserir.innerHTML += `${tarefa.value}`
  inserir.appendChild(label)
  label.innerHTML = `${tarefa.value}`
  inserir.appendChild(button)
  // limpar input
  tarefa.value = ''
  inserir.appendChild(barra)
  // button.innerHTML = `<button class="btn btn-small btn-light" type="button" id="button" onclick="excluir()"><img src="https://img.icons8.com/wired/16/000000/deconste.png"/></button>`
  
}

const visibilidade = () => {
  // const check = document.querySelector('#check')
  const para = document.getElementById('para')
  // if(check.checked){
  para.style.textDecoration = 'line-through'
  // }
}

const excluir = () =>{
  const collection = document.querySelector('#button')
  const checkDois = document.querySelector('#check')
  const para = document.querySelector('#para')
  const barra = document.querySelector('br')
  // const inputDois = document.querySelector('input')
  collection.remove()
  checkDois.remove()
  para.remove()
  barra.remove()
  // if(inputDois.id !== 'tarefa'){
  //   inputDois.value.remove()
  // }
  
}