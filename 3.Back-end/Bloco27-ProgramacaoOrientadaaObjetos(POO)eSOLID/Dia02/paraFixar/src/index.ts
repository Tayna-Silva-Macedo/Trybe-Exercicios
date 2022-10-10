import Animal from './Animal';
import Bird from './Bird';
import ConsoleLogger from './ConsoleLogger';
import ConsoleLogger2 from './ConsoleLogger2';
import ExampleDataBase from './ExampleDatabase';
import Mammal from './Mammal';
import MyClass from './MyClass';
import Subclass from './Subclass';
import Superclass from './Superclass';

const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));

const main = (animal: Animal) => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();

main(parrot);
parrot.fly();

const sup = new Superclass();
const sub = new Subclass();

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

myFunc(sup);
myFunc(sub);

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDataBase(logger1);
const database2 = new ExampleDataBase(logger2);
const database3 = new ExampleDataBase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');

