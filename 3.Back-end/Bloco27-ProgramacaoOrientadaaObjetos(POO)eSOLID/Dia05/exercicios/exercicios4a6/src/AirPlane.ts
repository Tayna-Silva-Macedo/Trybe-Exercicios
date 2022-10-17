import IAirPlane from './interfaces/IAirPlane';

export default class AirPlane implements IAirPlane {
  fly(): void {
    console.log('Fly a airplane');
  }
}
