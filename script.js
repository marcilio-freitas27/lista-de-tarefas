
const inserirTarefa = () =>{
  let inserir = document.getElementById('inserir')
  let button = document.createElement('button')
  let classe = document.createAttribute('class')
  let buttonType = document.createAttribute('type')
  let buttonId = document.createAttribute('id')
  let buttonOnclick = document.createAttribute('onclick')
  classe.value = "btn btn-light"
  buttonType.value = "button"
  buttonId.value = "button"
  buttonOnclick.value = "excluir()"
  // buttonStyle = "background: url(https://img.icons8.com/wired/16/000000/delete.png)"
  button.setAttributeNode(classe)
  button.setAttributeNode(buttonId)
  button.setAttributeNode(buttonType)
  button.setAttributeNode(buttonOnclick)
// button.setAttributeNode(buttonStyle);
  let tarefa =  document.getElementById('tarefa')
  //criar um elemento
  let input = document.createElement('input')
  let label = document.createElement('label')
  let barra = document.createElement('br')
  //inserir um valor no atributo
  let type = document.createAttribute('type')
  let id = document.createAttribute('id')
  let checkOnclick = document.createAttribute('onclick')
  let idPara = document.createAttribute('id')
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
  
  inserir.style.textDecoration = 'none'
  //adicionar o elemento ao documento
  inserir.appendChild(input)
  // inserir.innerHTML += `${tarefa.value}`
  inserir.appendChild(label)
  label.innerHTML += `${tarefa.value}`
  inserir.appendChild(button)
  // limpar input
  tarefa.value = ''
  inserir.appendChild(barra)
  // button.innerHTML = `<button class="btn btn-small btn-light" type="button" id="button" onclick="excluir()"><img src="https://img.icons8.com/wired/16/000000/delete.png"/></button>`
  
}

const visibilidade = () => {
  let check = document.querySelector('#check')
  let para = document.getElementById('para')
  if(check.checked){
    para.style.textDecoration = 'line-through'
  }
}

const excluir = () =>{
  let collection = document.querySelector('#button')
  let checkDois = document.querySelector('#check')
  let para = document.querySelector('#para')
  let barra = document.querySelector('br')
  // let inputDois = document.querySelector('input')
  collection.remove()
  checkDois.remove()
  para.remove()
  barra.remove()
  // if(inputDois.id !== 'tarefa'){
  //   inputDois.value.remove()
  // }
  
}