import readline from 'readline-sync';

const unitsCapacity: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsCapacity.indexOf(initialUnit);
  const finalIndex = unitsCapacity.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(10, exponent)
  } ${finalUnit}`;
};

const execCapacity = (): void => {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const initialUnitIndex = readline.keyInSelect(
    unitsCapacity,
    'Escolha a unidade base: '
  );
  const finalUnitIndex = readline.keyInSelect(
    unitsCapacity,
    'Escolha a unidade para conversão: '
  );

  const initialUnit = unitsCapacity[initialUnitIndex];
  const finalUnit = unitsCapacity[finalUnitIndex];

  const result = convertCapacity(value, initialUnit, finalUnit);

  console.log(result);
};

execCapacity();
