import Character from './Character';

export default class MeleeCharacter extends Character {
  private _name: string;
  private _specialMoveName: string;

  constructor(name: string, specialMoveName: string) {
    super();
    this._name = name;
    this._specialMoveName = specialMoveName;
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}
