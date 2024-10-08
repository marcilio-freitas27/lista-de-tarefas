
//collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
//quando clica no bottão, o parentNode onde está inserido o botão(a tarefa que foi adicionada) é removido
const removerTarefa = (mensagem) => {
  const close = $(".button");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = (event) => {
      const remove = event.target.parentElement;
      remove.remove();
      mensagem.html(`A tarefa foi excluída.`);
      mensagem.css({
        color: "#000",
        background: "#fff",
        "font-weight": "bold",
      });
    };
  }
}

// marcar um item como concluido e  inserir um tachado no texto: funcional
// quando o check é marcado, o nextSibling ou a child label que vem após o checkbox button tem seu texto tachado
const checarTarefa = () => {
  const visivel = $(".check");
  for (let i = 0; i < visivel.length; i++) {
    visivel[i].onclick = (event) => {
      const para = event.target.nextSibling;
      // se o check box está ativo, linha com tachado. Senão, sem efeito
      if (visivel[i].checked) {
        para.style.textDecoration = "line-through";
      } else {
        para.style.textDecoration = "none";
      }
    };
  }
}

const inserirTarefa = () => {

  const inserir = $("#inserir");
  const tarefa = $("#tarefa");
  const mensagem = $("#mensagem");
  const cabecalho = $("#cabecalho");

  //criar elemento
  // criar atributo e definir seus valores
  const div = $("<li />", { class: "divisao" });
  const button = $("<button />", {
    class: "btn btn-light button",
    type: "button",
  });
  const input = $("<input />", {
    class: "check",
    type: "checkbox",
  });
  const label = $("<label />", { class: "para" });
  const barra = $("<br />");
  
  if (`${tarefa.val()}` == "") {
    mensagem.html("Insira algum texto, número ou símbolo.");
    mensagem.css({
      color: "#000",
      background: "#fff",
      "font-weight": "bold",
    });
    cabecalho.html(`Erro <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>`);
    cabecalho.removeClass("bg-success").addClass("bg-danger");
    cabecalho.css({
      color: "#fff",
      "font-weight": "bold",
      display: "flex",
      "justify-content": "space-between",
    })
  } else {
    mensagem.html(`Tarefa foi adicionada.`);
    mensagem.css({
      color: "#000",
      background: "#fff",
      "font-weight": "bold",
    });
    cabecalho.html(`Sucesso <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>`);
    cabecalho.css({
      color: "#fff",
      "font-weight": "bold",
      display: "flex",
      "justify-content": "space-between",
    })
    cabecalho.removeClass("bg-danger").addClass("bg-success")

    //adicionar o elemento filho ao elemento pai
    div.append(input);
    div.append(label);
    // inserir o valor do input no elemento(label)
    label.html(`${tarefa.val()}`);
    div.append(button);
    //inserido o elemento, o input fica sem texto
    tarefa.val("");
    div.append(barra);
    inserir.append(div);

    //onclicks
    inserir.onclick = removerTarefa(mensagem);
    input.onclick = checarTarefa();
  }
};

