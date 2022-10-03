"use strict";
const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convertMass = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsMass.indexOf(initialUnit);
    const finalIndex = unitsMass.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
console.log(convertMass(1, 'kg', 'g'));
console.log(convertMass(1, 'g', 'kg'));
console.log(convertMass(7, 'cg', 'dag'));
