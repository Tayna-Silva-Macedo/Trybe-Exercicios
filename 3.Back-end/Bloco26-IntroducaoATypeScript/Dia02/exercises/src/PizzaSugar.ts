import Pizza from './Pizza';
import { Sugar } from './PizzaFlavoursTypes';

interface PizzaSugar extends Pizza {
  flavor: Sugar;
  slices: 4;
}

export default PizzaSugar;
