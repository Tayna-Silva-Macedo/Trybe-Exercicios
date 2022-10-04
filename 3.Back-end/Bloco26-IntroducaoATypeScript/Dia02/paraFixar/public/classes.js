"use strict";
class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    bark() {
        console.log('Au Au');
    }
}
const meg = new Dog('Meg', 'Black', 11);
console.log(meg);
meg.bark();
class House {
    constructor(owner, address, color, area) {
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
}
const myHouse = new House('Tayná', 'Rua qualquer', 'Cinza', 55);
console.log(myHouse);
class Flight {
    constructor(origin, destination, departureDate, arrivalDate, passengers) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
}
const myLastFlight = new Flight('Itápolis', 'Borborema', new Date(2022, 9, 24), new Date(2022, 9, 24), 4);
console.log(myLastFlight);
