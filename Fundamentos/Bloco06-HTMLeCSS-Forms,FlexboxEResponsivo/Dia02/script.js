const botaoEnviar = document.getElementById("botao-enviar");
const divulgacao = document.getElementById("divulgacao");
const nomeCompleto = document.getElementById("nome-completo");
const email = document.getElementById("email");
const justificativa = document.getElementById("justificativa");

function previnirComportamento(evento) {
  evento.preventDefault();

  // const validacao = validacaoCampos();
  // if (validacao === false) {
  //   alert("Dados Inválidos");
  // } else {
  //   alert(
  //     "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip"
  //   );
  // }
}

botaoEnviar.addEventListener("click", previnirComportamento);

function habilitarEnvio() {
  botaoEnviar.disabled = !divulgacao.checked;
}

divulgacao.addEventListener("change", habilitarEnvio);

// function validacaoCampos() {
//   const caracteresNome = nomeCompleto.value.length;
//   const nomeInvalido = caracteresNome < 10 || caracteresNome > 40;

//   const caracteresEmail = email.value.length;
//   const emailInvalido = caracteresEmail < 10 || caracteresEmail > 50;

//   const caracteresJustificativa = justificativa.value.length;
//   const justificativaInvalida = caracteresJustificativa > 500;

//   if (nomeInvalido || emailInvalido || justificativaInvalida) {
//     return false;
//   } else {
//     return true;
//   }
// }

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

const validate = new window.JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
  errorFieldStyle: {
    border: "1px solid red",
  },
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "red",
    textDecoration: "underlined",
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: "top",
  },
});

validate
  .addField('#nome-completo', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#justificativa', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#data-viagem', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);
