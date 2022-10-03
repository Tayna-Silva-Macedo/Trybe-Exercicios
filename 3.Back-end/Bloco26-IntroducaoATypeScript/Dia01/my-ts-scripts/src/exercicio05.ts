const unitsArea: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const convertArea = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsArea.indexOf(initialUnit);
  const finalIndex = unitsArea.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(100, exponent)
  } ${finalUnit}`;
};

console.log(convertArea(1, 'km²', 'm²'));
console.log(convertArea(1, 'm²', 'km²'));
console.log(convertArea(4, 'cm²', 'dam²'));
