"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const gol = new Car_1.default('Volkswagen', 'prata', 4);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();
const mussarela = {
    flavor: 'Mussarela',
    slices: 8,
};
console.log(mussarela);
const marguerita = {
    flavor: 'Marguerita',
    slices: 6,
};
console.log(marguerita);
const nutella = {
    flavor: 'Nutella',
    slices: 4,
};
console.log(nutella);
const calabresa = {
    flavor: 'Calabresa',
    slices: 6,
};
console.log(calabresa);
const frango = {
    flavor: 'Frango',
    slices: 8,
};
console.log(frango);
const pepperoni = {
    flavor: 'Pepperoni',
    slices: 4,
};
console.log(pepperoni);
const cogumelo = {
    flavor: 'Cogumelo',
    slices: 8,
};
console.log(cogumelo);
const palmito = {
    flavor: 'Palmito',
    slices: 6,
};
console.log(palmito);
const goiabadaComQueijo = {
    flavor: 'Goiabada com queijo',
    slices: 4,
};
console.log(goiabadaComQueijo);
