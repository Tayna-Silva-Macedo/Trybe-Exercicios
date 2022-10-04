import Car from './Car';
import Pizza from './Pizza';
import PizzaCommon from './PizzaCommon';
import PizzaVegetarian from './PizzaVegetarian';
import PizzaSugar from './PizzaSugar';

const gol = new Car('Volkswagen', 'prata', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();

const mussarela: Pizza = {
  flavor: 'Mussarela',
  slices: 8,
};

console.log(mussarela);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
};

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(nutella);

const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6,
};

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 8,
};

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 4,
};

console.log(pepperoni);

const cogumelo: PizzaVegetarian = {
  flavor: 'Cogumelo',
  slices: 8,
};

console.log(cogumelo);

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 6,
};

console.log(palmito);

const goiabadaComQueijo: PizzaSugar = {
  flavor: 'Goiabada com queijo',
  slices: 4,
};

console.log(goiabadaComQueijo);
