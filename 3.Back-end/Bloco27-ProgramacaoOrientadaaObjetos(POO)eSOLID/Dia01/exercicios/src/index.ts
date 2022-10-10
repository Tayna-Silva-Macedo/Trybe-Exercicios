import Student from './Student';

import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

import Data from './Data';

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

const date1 = new Data(24, 5, 1996);

console.log(date1);
console.log('Dia: ', date1.day);
console.log('Mês: ', date1.month);
console.log('Mês por extenso: ', date1.getMonthName());
console.log('Ano: ', date1.year);
console.log('É ano bissexto: ', date1.isLeapYear());
console.log(date1.format('dd/mm/aaaa'));
console.log(date1.format('dd-mm-aaaa'));
console.log(date1.format('aaaa/mm/dd'));
console.log(date1.format('aaaa-mm-dd'));
console.log(date1.format('dd de M aa'));
console.log(date1.format('dd, M de aaaa'));

const date2 = new Data(10, 10, 2022);

console.log('Comparação: ', date1.compare(date2));

const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// console.log(date1.format('a m d'));
