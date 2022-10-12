import ICharacter from './interfaces/ICharacter';
import IModel from './interfaces/IModel';

export default class MockedDbModel implements IModel {
  async create(character: ICharacter) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: ICharacter) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'CHarge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}
