import Student from './Student';

const student1 = new Student('202001011', 'Maria da Silva');

student1.examsGrades = [9, 8, 10, 6];
student1.worksGrades = [10, 7];

console.log(student1);
console.log('Soma de todas as notas: ', student1.sumGrades());
console.log('Média de todas as notas: ', student1.calculateAverage());
