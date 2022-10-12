import ICharacter from './interfaces/ICharacter';
import IModel from './interfaces/IModel';

export default class CharacterService {
  private _model: IModel;

  constructor(model: IModel) {
    this._model = model;
  }

  async create(character: ICharacter) {
    const newCharacter = await this._model.create(character);
    return { status: 201, data: newCharacter };
  }

  async update(id: number, character: ICharacter) {
    const characterUpdated = await this._model.update(id, character);
    return { status: 200, data: characterUpdated };
  }

  async delete(id: number) {
    const characterDeleted = await this._model.delete(id);
    if (!characterDeleted) throw new Error('Character not deleted.');
    return { status: 200, data: 'Character deleted with success.' }
  }

  async getAll() {
    const allCharacter = await this._model.getAll();
    return { status: 200, data: allCharacter };
  }

  async getById(id: number) {
    const character = await this._model.getById(id);
    return { status: 200, data: character };
  }
}
