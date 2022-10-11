import IEmployee from './IEmployee';
import Person from './Person';
import Student from './Student';
import Subject from './Subject';

const tayna = new Person('Tayná Silva Macêdo', new Date('1996/05/24'));
const vania = new Person('Vânia Maria da Silva Macêdo', new Date('1971/05/29'));
// const invalidPersonName = new Person('An', new Date('2000/02/05'));
// const invalidPersonAge = new Person ('Ana Vitória', new Date('1900/06/07'));

console.log(tayna);
console.log(vania);

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
// fernando.worksGrades = [45, 45, 45];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

const testInterfaceEmployee: IEmployee = {
  registration: 'FNC1234567891011',
  salary: 1200.0,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(history);
console.log(philosophy);



