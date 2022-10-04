import Pizza from './Pizza';
import { Vegetarian } from './PizzaFlavoursTypes';

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian;
}

export default PizzaVegetarian;
