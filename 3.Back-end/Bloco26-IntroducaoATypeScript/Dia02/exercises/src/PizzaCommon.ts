import Pizza from './Pizza';
import { Common } from './PizzaFlavoursTypes';

interface PizzaCommon extends Pizza {
  flavor: Common;
}

export default PizzaCommon;
