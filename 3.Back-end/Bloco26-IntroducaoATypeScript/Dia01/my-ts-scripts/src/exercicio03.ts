import readline from 'readline-sync';

const unitsMass: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (
  value: number,
  initialUnit: string,
  finalUnit: string
): string => {
  const initialIndex = unitsMass.indexOf(initialUnit);
  const finalIndex = unitsMass.indexOf(finalUnit);
  const exponent = finalIndex - initialIndex;

  return `${value} ${initialUnit} tem ${
    value * Math.pow(10, exponent)
  } ${finalUnit}`;
};

const execMass = (): void => {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const initialUnitIndex = readline.keyInSelect(
    unitsMass,
    'Escolha a unidade base: '
  );
  const finalUnitIndex = readline.keyInSelect(
    unitsMass,
    'Escolha a unidade para conversão: '
  );

  const initialUnit = unitsMass[initialUnitIndex];
  const finalUnit = unitsMass[finalUnitIndex];

  const result = convertMass(value, initialUnit, finalUnit);

  console.log(result);
};

execMass();
