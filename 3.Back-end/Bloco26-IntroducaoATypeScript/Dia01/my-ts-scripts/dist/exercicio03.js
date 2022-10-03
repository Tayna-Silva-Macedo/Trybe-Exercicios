"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convertMass = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsMass.indexOf(initialUnit);
    const finalIndex = unitsMass.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
const execMass = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const initialUnitIndex = readline_sync_1.default.keyInSelect(unitsMass, 'Escolha a unidade base: ');
    const finalUnitIndex = readline_sync_1.default.keyInSelect(unitsMass, 'Escolha a unidade para conversão: ');
    const initialUnit = unitsMass[initialUnitIndex];
    const finalUnit = unitsMass[finalUnitIndex];
    const result = convertMass(value, initialUnit, finalUnit);
    console.log(result);
};
execMass();
