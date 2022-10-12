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

  async getAll() {
    const allCharacter = await this._model.getAll();
    return { status: 200, data: allCharacter };
  }
}
