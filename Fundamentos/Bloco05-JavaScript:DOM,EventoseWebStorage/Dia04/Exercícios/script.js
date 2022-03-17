window.onload = function () {
  let selectCoresDeFundo = document.getElementById("select-backgroundColor");

  selectCoresDeFundo.addEventListener("change", function () {
    let selecionado = selectCoresDeFundo.selectedOptions[0];
    document.body.style.backgroundColor = selecionado.value;

    localStorage.setItem("5.4-Cor de Fundo", selecionado.value);
  });

  let selectCorDaFonte = document.getElementById("select-color");
  let paragrafo = document.getElementById("paragrafo");

  selectCorDaFonte.addEventListener("change", function () {
    let selecionado = selectCorDaFonte.selectedOptions[0];
    paragrafo.style.color = selecionado.value;

    localStorage.setItem("5.4-Cor da Fonte", selecionado.value);
  });

  let inputFonte = document.getElementById("input-tamanhoDoTexto");

  inputFonte.addEventListener("change", function () {
    paragrafo.style.fontSize = `${inputFonte.value}px`;

    localStorage.setItem("5.4-Tamanho da Fonte", `${inputFonte.value}px`);
  });

  let inputEspacamento = document.getElementById("input-espacamentoDeLinhas");

  inputEspacamento.addEventListener("change", function () {
    paragrafo.style.lineHeight = `${inputEspacamento.value}cm`;

    localStorage.setItem(
      "5.4-Espaçamento entre as linhas do texto",
      `${inputEspacamento.value}cm`
    );
  });

  let selectTipoDaFonte = document.getElementById("select-fontFamily");

  selectTipoDaFonte.addEventListener("change", function () {
    let selecionado = selectTipoDaFonte.selectedOptions[0];
    paragrafo.style.fontFamily = selecionado.value;

    localStorage.setItem("5.4-Tipo da fonte", selecionado.value);
  });

  let corDeFundoSalva = localStorage.getItem("5.4-Cor de Fundo");
  document.body.style.backgroundColor = corDeFundoSalva;

  let corDaFonteSalva = localStorage.getItem("5.4-Cor da Fonte");
  paragrafo.style.color = corDaFonteSalva;

  let tamanhoDaFonteSalva = localStorage.getItem("5.4-Tamanho da Fonte");
  paragrafo.style.fontSize = tamanhoDaFonteSalva;

  let espacamentoDasLinhasSalvo = localStorage.getItem(
    "5.4-Espaçamento entre as linhas do texto"
  );
  paragrafo.style.lineHeight = espacamentoDasLinhasSalvo;

  let tipoDaFonteSalvo = localStorage.getItem("5.4-Tipo da fonte");
  paragrafo.style.fontFamily = tipoDaFonteSalvo;
};
