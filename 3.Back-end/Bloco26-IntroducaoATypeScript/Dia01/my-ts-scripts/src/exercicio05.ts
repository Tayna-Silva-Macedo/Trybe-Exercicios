import readline from 'readline-sync';

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

const execArea = (): void => {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const initialUnitIndex = readline.keyInSelect(
    unitsArea,
    'Escolha a unidade base: '
  );
  const finalUnitIndex = readline.keyInSelect(
    unitsArea,
    'Escolha a unidade para conversão: '
  );

  const initialUnit = unitsArea[initialUnitIndex];
  const finalUnit = unitsArea[finalUnitIndex];

  const result = convertArea(value, initialUnit, finalUnit);

  console.log(result);
};

execArea();
