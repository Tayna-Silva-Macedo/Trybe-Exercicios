"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const convertArea = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsArea.indexOf(initialUnit);
    const finalIndex = unitsArea.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(100, exponent)} ${finalUnit}`;
};
const execArea = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const initialUnitIndex = readline_sync_1.default.keyInSelect(unitsArea, 'Escolha a unidade base: ');
    const finalUnitIndex = readline_sync_1.default.keyInSelect(unitsArea, 'Escolha a unidade para conversão: ');
    const initialUnit = unitsArea[initialUnitIndex];
    const finalUnit = unitsArea[finalUnitIndex];
    const result = convertArea(value, initialUnit, finalUnit);
    console.log(result);
};
execArea();
