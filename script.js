
const inserirTarefa = () => {
  const inserir = $('#inserir')
  const tarefa =  $('#tarefa')
  //criar elemento
  // criar atributo e definir seus valores
  const div = $('<li />',{ class: 'divisao' })
  const button = $('<button />',{
    class: 'button',
    type: 'button'
  })
  const input = $('<input />',{ 
    class: 'check',
    type: 'checkbox'
  })
  // const label = $('<label />',{ class: 'para' })
  const barra = $('<br />')
  // adicionar o elemento filho ao elemento pai
  div.append(input)
  // div.append(label)
  // inserir o valor do input no elemtento(label)
  // label.html(`${tarefa.val()}`)
  div.append(`${tarefa.val()}`)
  div.append(button)
  //inserido o elemento, o input fica sem texto
  tarefa.val('')
  div.append(barra)
  inserir.append(div)

  //collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
  const close = $('.button')
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = (event) => { 
      const remove = event.target.parentElement
      remove.remove()
    }
  }

  // marcar um item como concluido e  inserir um tachado no texto: funcional
  const visivel = $('.check')
  for (let i = 0; i < visivel.length; i++) {
    visivel[i].onclick = (event) => { 
      const para = event.target.parentElement
      para.style.textDecoration = 'line-through'
    }
  }

}
