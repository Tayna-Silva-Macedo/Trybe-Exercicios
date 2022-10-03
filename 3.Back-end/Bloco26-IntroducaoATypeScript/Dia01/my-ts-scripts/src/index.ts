import readline from 'readline-sync';

const scripts = [
  { name: 'Converter comprimento', script: './exercicio02' },
  { name: 'Converter massa', script: './exercicio03' },
  { name: 'Converter capacidade', script: './exercicio04' },
  { name: 'Converter área', script: './exercicio05' },
  { name: 'Converter volume', script: './exercicio06' },
];

const scriptNames = scripts.map((script) => script.name);

const scriptSelected = readline.keyInSelect(
  scriptNames,
  'Escolha qual o tipo de conversão que deseja fazer: '
);

require(scripts[scriptSelected].script);
