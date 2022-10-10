class Superclass {
  constructor(public isSuper: boolean = true) {}

  sayHello = (): void => {
    console.log('Olá mundo!');
  };
}

export default Superclass;
