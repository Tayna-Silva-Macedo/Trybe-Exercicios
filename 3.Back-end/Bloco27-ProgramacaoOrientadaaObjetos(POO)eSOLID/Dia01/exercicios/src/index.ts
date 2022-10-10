import Student from './Student';
import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

const student1 = new Student('202001011', 'Maria da Silva');

student1.examsGrades = [9, 8, 10, 6];
student1.worksGrades = [10, 7];

console.log(student1);
console.log('Soma de todas as notas: ', student1.sumGrades());
console.log('Média de todas as notas: ', student1.calculateAverage());

const client1 = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.0);
const juice = new OrderItem('Suco de Abacaxi', 5.0);
const dessert = new OrderItem('Gelatina de Uva', 2.5);

const order1 = new Order(client1, [sandwich, juice, dessert], 'dinheiro', 0.1);

console.log(order1);
console.log('Valor total sem desconto: ', order1.calculateTotal());
console.log('Valor total com desconto: ', order1.calculateTotalWithDiscount());
