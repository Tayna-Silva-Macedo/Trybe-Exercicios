"use strict";
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convertLength = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsLength.indexOf(initialUnit);
    const finalIndex = unitsLength.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
console.log(convertLength(1, 'km', 'm'));
console.log(convertLength(1, 'm', 'km'));
console.log(convertLength(5, 'cm', 'hm'));
