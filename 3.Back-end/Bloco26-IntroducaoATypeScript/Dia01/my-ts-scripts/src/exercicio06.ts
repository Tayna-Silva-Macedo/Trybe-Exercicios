import readline from 'readline-sync';

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

const execVolume = (): void => {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const initialUnitIndex = readline.keyInSelect(
    unitsVolumes,
    'Escolha a unidade base: '
  );
  const finalUnitIndex = readline.keyInSelect(
    unitsVolumes,
    'Escolha a unidade para conversão: '
  );

  const initialUnit = unitsVolumes[initialUnitIndex];
  const finalUnit = unitsVolumes[finalUnitIndex];

  const result = convertVolume(value, initialUnit, finalUnit);

  console.log(result);
};

execVolume();
