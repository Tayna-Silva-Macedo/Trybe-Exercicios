import readline from 'readline-sync';

const unitsLength: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsLength.indexOf(initialUnit);
  const finalIndex = unitsLength.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(10, exponent)
  } ${finalUnit}`;
};

const execLength = (): void => {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const initialUnitIndex = readline.keyInSelect(
    unitsLength,
    'Escolha a unidade base: '
  );
  const finalUnitIndex = readline.keyInSelect(
    unitsLength,
    'Escolha a unidade para conversão: '
  );

  const initialUnit = unitsLength[initialUnitIndex];
  const finalUnit = unitsLength[finalUnitIndex];

  const result = convertLength(value, initialUnit, finalUnit);

  console.log(result);
};

execLength();
