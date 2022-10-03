const unitsVolumes: string[] = [
  'km³',
  'hm³',
  'dam³',
  'm³',
  'dm³',
  'cm³',
  'mm³',
];

const convertVolume = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsVolumes.indexOf(initialUnit);
  const finalIndex = unitsVolumes.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(1000, exponent)
  } ${finalUnit}`;
};

console.log(convertVolume(1, 'km³', 'm³'));
console.log(convertVolume(1, 'm³', 'km³'));
console.log(convertVolume(3, 'dm³', 'hm³'));
