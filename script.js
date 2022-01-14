

//criar novo elemento, seus atributos e inserir na lista de tarefas
// const inserirTarefa = () =>{
//   const inserir = document.getElementById('inserir')
//   const tarefa =  document.getElementById('tarefa')
//   //criar elemento
//   const div = document.createElement('li')
//   const button = document.createElement('button')
//   const input = document.createElement('input')
//   const label = document.createElement('label')
//   const barra = document.createElement('br')
//   //criar atributo
//   const classe = document.createAttribute('class')
//   const buttonType = document.createAttribute('type')
//   const type = document.createAttribute('type')
//   // define um valor para a classe
//   div.className = 'divisao'
//   button.className = "button"
//   label.className = 'para'
//   input.className = 'check'
//   //definir valores dos atributos
//   classe.value = `btn btn-light ${button.className}`
//   buttonType.value = "button"
//   type.value = 'checkbox'
//   //setar o atrubuto inserindo o valor no elemento
//   button.setAttributeNode(classe)
//   button.setAttributeNode(buttonType)
//   input.setAttributeNode(type);
//   // adicionar o elemento filho ao elemento pai
//   div.appendChild(input)
//   div.appendChild(label)
//   // inserir o valor do imput no elemtento(label)
//   label.innerHTML = `${tarefa.value}`
//   div.appendChild(button)
//   //inserido o elemento, o input fica sem texto
//   tarefa.value = ''
//   div.appendChild(barra)
//   inserir.appendChild(div)

//   //collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
//   const close = document.getElementsByClassName("button")
//   for (let i = 0; i < close.length; i++) {
//     close[i].onclick = (event) => { 
//       const remove = event.target.parentElement
//       remove.remove()
//     }
//   }

//   // marcar um item como concluido e  inserir um tachado no texto: funcional
//   const visivel = document.getElementsByClassName("check")
//   for (let i = 0; i < visivel.length; i++) {
//     visivel[i].onclick = (event) => { 
//       const para = event.target.parentElement;
//       para.style.textDecoration = 'line-through'
//     }
//   }

// }
const inserirTarefa = () => {
  const inserir = $('#inserir')
  const tarefa =  $('#tarefa')
  //criar elemento
  const div = $('<li />')
  const button = $('<button />')
  const input = $('<input />')
  const label = $('<label />')
  const barra = $('<br />')
  // criar atributo e definir seus valores
  div.attr({ class: 'divisao' })
  button.attr({
    class: 'button',
    type: 'button',
  })
  label.attr({ class: 'para' })
  input.attr({
    class: 'check',
    type: 'checkbox',
  })
  // adicionar o elemento filho ao elemento pai
  div.append(input)
  div.append(label)
  // inserir o valor do input no elemtento(label)
  label.html(`${tarefa.val()}`)
  div.append(button)
  //inserido o elemento, o input fica sem texto
  tarefa.val('')
  div.append(barra)
  inserir.append(div)

  //collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
  const close = $(".button")
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = (event) => { 
      const remove = event.target.parentElement
      remove.remove()
    }
  }

  // marcar um item como concluido e  inserir um tachado no texto: funcional
  const visivel = $(".check")
  for (let i = 0; i < visivel.length; i++) {
    visivel[i].onclick = (event) => { 
      const para = event.target.parentElement;
      para.css('text-decoration','line-through')
    }
  }

}
