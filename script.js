const inserirTarefa = () =>{
  let tarefa =  document.getElementById('tarefa')
  let inserir = document.getElementById('inserir')
  //criar um elemento
  let input = document.createElement('input')
  //inserir um valor no atributo
  let type = document.createAttribute('type')
  let id = document.createAttribute('id')
  //atribuir valores ao atributo
  type.value = 'checkbox'
  id.value = 'check'
  // alterar o valor do atributo
  input.setAttributeNode(type);
  input.setAttributeNode(id);
  if(tarefa.value != ''){
    inserir.style.textDecoration = 'none'
    //adicionar o elemento ao documento
    inserir.appendChild(input)
    inserir.innerHTML += `${tarefa.value}<br>`
  }
}

const visibilidade = () => {
  let check = document.getElementById('check')
  let inserir = document.getElementById('inserir')
  let button = document.createElement('button')
  let classe = document.createAttribute('class')
  let buttonType = document.createAttribute('type')
  let buttonId = document.createAttribute('id')
  let buttonOnclick = document.createAttribute('onclick')
  // let buttonStyle = document.createAttribute('style')
  classe.value = "btn btn-small btn-light"
  buttonType.value = "button"
  buttonId.value = "button"
  buttonOnclick.value = "excluir()"
  // buttonStyle = "background: url(https://img.icons8.com/wired/16/000000/delete.png)"
  button.setAttributeNode(classe);
  button.setAttributeNode(buttonId);
  button.setAttributeNode(buttonType);
  button.setAttributeNode(buttonOnclick);
  // button.setAttributeNode(buttonStyle);
  if(check.checked){
    inserir.style.textDecoration = 'line-through'
    inserir.appendChild(button)
    // button.innerHTML = `<button class="btn btn-small btn-light" type="button" id="button" onclick="excluir()"><img src="https://img.icons8.com/wired/16/000000/delete.png"/></button>`
  }
}

const excluir = () =>{
  let check = document.getElementById('check')
  let inserir = document.getElementById('inserir')
  let button = document.createElement('button')
  inserir.removeChild(check)
  button.remove()
  inserir.innerHTML = '';
}