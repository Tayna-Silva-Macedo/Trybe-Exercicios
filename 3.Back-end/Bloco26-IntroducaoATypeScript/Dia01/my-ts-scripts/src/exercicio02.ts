const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = units.indexOf(initialUnit);
  const finalIndex = units.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(10, exponent)
  } ${finalUnit}`;
};

console.log(convert(1, 'km', 'm'));
console.log(convert(1, 'm', 'km'));
console.log(convert(5, 'cm', 'hm'));
