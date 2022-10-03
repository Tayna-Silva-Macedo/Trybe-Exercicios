"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convertCapacity = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsCapacity.indexOf(initialUnit);
    const finalIndex = unitsCapacity.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
const execCapacity = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const initialUnitIndex = readline_sync_1.default.keyInSelect(unitsCapacity, 'Escolha a unidade base: ');
    const finalUnitIndex = readline_sync_1.default.keyInSelect(unitsCapacity, 'Escolha a unidade para conversão: ');
    const initialUnit = unitsCapacity[initialUnitIndex];
    const finalUnit = unitsCapacity[finalUnitIndex];
    const result = convertCapacity(value, initialUnit, finalUnit);
    console.log(result);
};
execCapacity();
