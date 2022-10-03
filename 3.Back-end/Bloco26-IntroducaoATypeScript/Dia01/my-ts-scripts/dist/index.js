"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
    { name: 'Converter comprimento', script: './exercicio02' },
    { name: 'Converter massa', script: './exercicio03' },
    { name: 'Converter capacidade', script: './exercicio04' },
    { name: 'Converter área', script: './exercicio05' },
    { name: 'Converter volume', script: './exercicio06' },
];
const scriptNames = scripts.map((script) => script.name);
const scriptSelected = readline_sync_1.default.keyInSelect(scriptNames, 'Escolha qual o tipo de conversão que deseja fazer: ');
require(scripts[scriptSelected].script);
