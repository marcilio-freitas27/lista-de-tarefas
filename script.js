const inserirTarefa = () => {
  const inserir = $("#inserir");
  const tarefa = $("#tarefa");
  const mensagem = $("#mensagem");
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
      color: "#f00",
      background: "black",
      "font-weight": "bold",
    });
  } else {
    mensagem.html(`Tarefa foi adicionada.`);
    // const toastTrigger = document.getElementById("botao");
    // const toastLiveExample = document.getElementById("liveToast");
    // if (toastTrigger) {
    //   toastTrigger.addEventListener("click", () => {
    //     const toast = new bootstrap.Toast(toastLiveExample);
    //     toast.show();
    //   });
    // }
    mensagem.css({
      color: "#0f0",
      background: "black",
      "font-weight": "bold",
    });
    // tarefa.prop('required', false);
    // tarefa.setCustomValidity(' ');
    // adicionar o elemento filho ao elemento pai
    div.append(input);
    div.append(label);
    // inserir o valor do input no elemento(label)
    label.html(`${tarefa.val()}`);
    //console.log(label.text())
    div.append(button);
    //inserido o elemento, o input fica sem texto
    tarefa.val("");
    div.append(barra);
    inserir.append(div);
  }

  //collection = semelhante a uma array, mas só é possível itera-lo. Não da pra usar funções built-in para array
  //quando clica no bottão, o parentNode onde está inserido o botão(a tarefa que foi adicionada) é removido
  const close = $(".button");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = (event) => {
      const remove = event.target.parentElement;
      remove.remove();
      mensagem.html(`Tarefa foi excluída.`);
      mensagem.css({
        color: "#ff0",
        background: "black",
        "font-weight": "bold",
      });
    };
  }

  // marcar um item como concluido e  inserir um tachado no texto: funcional
  // quando o check é marcado, o nextSibling ou a child label que vem após o checkbox button tem seu texto tachado
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
};
