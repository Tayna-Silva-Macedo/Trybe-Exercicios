const unitsMass: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsMass.indexOf(initialUnit);
  const finalIndex = unitsMass.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};

console.log(convertMass(1, 'kg', 'g'));
console.log(convertMass(1, 'g', 'kg'));
console.log(convertMass(7, 'cg', 'dag'));
