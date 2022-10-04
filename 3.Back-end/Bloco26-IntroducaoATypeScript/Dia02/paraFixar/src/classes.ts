class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log('Au Au');
  }
}

const meg = new Dog('Meg', 'Black', 11);
console.log(meg);
meg.bark();

class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

const myHouse = new House('Tayná', 'Rua qualquer', 'Cinza', 55);
console.log(myHouse);

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  constructor(
    origin: string,
    destination: string,
    departureDate: Date,
    arrivalDate: Date,
    passengers: number
  ) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

const myLastFlight = new Flight(
  'Itápolis',
  'Borborema',
  new Date(2022, 9, 24),
  new Date(2022, 9, 24),
  4
);
console.log(myLastFlight);
