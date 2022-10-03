"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convertLength = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsLength.indexOf(initialUnit);
    const finalIndex = unitsLength.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
const execLength = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const initialUnitIndex = readline_sync_1.default.keyInSelect(unitsLength, 'Escolha a unidade base: ');
    const finalUnitIndex = readline_sync_1.default.keyInSelect(unitsLength, 'Escolha a unidade para conversão: ');
    const initialUnit = unitsLength[initialUnitIndex];
    const finalUnit = unitsLength[finalUnitIndex];
    const result = convertLength(value, initialUnit, finalUnit);
    console.log(result);
};
execLength();
