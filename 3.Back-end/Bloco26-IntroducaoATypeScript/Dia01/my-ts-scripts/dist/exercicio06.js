"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsVolumes = [
    'km³',
    'hm³',
    'dam³',
    'm³',
    'dm³',
    'cm³',
    'mm³',
];
const convertVolume = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsVolumes.indexOf(initialUnit);
    const finalIndex = unitsVolumes.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(1000, exponent)} ${finalUnit}`;
};
const execVolume = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const initialUnitIndex = readline_sync_1.default.keyInSelect(unitsVolumes, 'Escolha a unidade base: ');
    const finalUnitIndex = readline_sync_1.default.keyInSelect(unitsVolumes, 'Escolha a unidade para conversão: ');
    const initialUnit = unitsVolumes[initialUnitIndex];
    const finalUnit = unitsVolumes[finalUnitIndex];
    const result = convertVolume(value, initialUnit, finalUnit);
    console.log(result);
};
execVolume();
