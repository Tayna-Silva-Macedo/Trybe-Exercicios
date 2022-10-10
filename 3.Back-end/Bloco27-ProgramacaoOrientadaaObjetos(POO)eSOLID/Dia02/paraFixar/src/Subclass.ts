import Superclass from './Superclass';

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

export default Subclass;
