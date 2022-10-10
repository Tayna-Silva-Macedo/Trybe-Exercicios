import Animal from "./Animal";

class Mammal extends Animal {
  walk(): void {
    console.log(`${this.name} está andando!`);
    
  }
}

export default Mammal;
