const botaoEnviar = document.getElementById("botao-enviar");
const divulgacao = document.getElementById("divulgacao");
const nomeCompleto = document.getElementById("nome-completo");
const email = document.getElementById("email");
const justificativa = document.getElementById("justificativa");

function previnirComportamento(evento) {
  evento.preventDefault();

  const validacao = validacaoCampos();
  if (validacao === false) {
    alert("Dados Inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip"
    );
  }
}

botaoEnviar.addEventListener("click", previnirComportamento);

function habilitarEnvio() {
  botaoEnviar.disabled = !divulgacao.checked;
}

divulgacao.addEventListener("change", habilitarEnvio);

function validacaoCampos() {
  const caracteresNome = nomeCompleto.value.length;
  const nomeInvalido = caracteresNome < 10 || caracteresNome > 40;

  const caracteresEmail = email.value.length;
  const emailInvalido = caracteresEmail < 10 || caracteresEmail > 50;

  const caracteresJustificativa = justificativa.value.length;
  const justificativaInvalida = caracteresJustificativa > 500;

  if (nomeInvalido || emailInvalido || justificativaInvalida) {
    return false;
  } else {
    return true;
  }
}

var picker = new Pikaday({
  field: document.getElementById("data-viagem"),
  format: "D/M/YYYY",
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});
