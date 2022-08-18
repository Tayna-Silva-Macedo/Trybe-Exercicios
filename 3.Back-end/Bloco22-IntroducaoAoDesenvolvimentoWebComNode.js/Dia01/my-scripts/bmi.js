const readLine = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight (thin)': {
    minBMI: Number.NEGATIVE_INFINITY,
    maxBMI: 18.4,
  },
  'Normal weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight (overweight)': {
    minBMI: 25.0,
    maxBMI: 29.9,
  },
  'Grade I obesity': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Grade II obesity': {
    minBMI: 35.0,
    maxBMI: 39.9,
  },
  'Grades III and IV obesity': {
    minBMI: 40.0,
    maxBMI: Number.POSITIVE_INFINITY,
  },
};

const calculateBMI = (weight, height) => {
  return weight / Math.pow(height, 2);
};

const checkSituation = (bmi) => {
  const situations = Object.keys(BMI_MAX_AND_MIN);

  const resultSituation = situations.find((situation) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[situation];

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultSituation;
};

const main = () => {
  const weight = readLine.questionFloat("What's your weight? (kg) ");
  const height = readLine.questionFloat("What's your height? (m)");

  const resultBMI = calculateBMI(weight, height);
  const resultSituation = checkSituation(resultBMI);

  console.log(`BMI: ${resultBMI.toFixed(2)}`);
  console.log(`Situation: ${resultSituation}`);
};

main();
