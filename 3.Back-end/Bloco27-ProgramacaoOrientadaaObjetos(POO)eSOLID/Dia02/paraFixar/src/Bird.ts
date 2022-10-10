import Animal from './Animal';

class Bird extends Animal {
  fly(): void {
    console.log(`${this.name} está voando!`);
  }
}

export default Bird;
