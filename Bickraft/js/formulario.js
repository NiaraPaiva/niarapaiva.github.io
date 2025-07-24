const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; border-radius: 4px; background:'color #f7f7f7;'><span style='color #317a00'>Mensagem enviada, em breve estraremos em contato</span></p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; border-radius: 4px; background:'color #f7f7f7;'><span style='color #e00000'>Erro no envio, você pode enviar diretamente para o nosso  email contato@bickraft.com</span></p>";
  }
}

function enviarFormilario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", { method: "POST", body: data }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormilario);
