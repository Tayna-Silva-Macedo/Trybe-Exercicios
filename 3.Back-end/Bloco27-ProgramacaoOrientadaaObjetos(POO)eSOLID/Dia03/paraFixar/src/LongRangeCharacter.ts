import Character from './Character';

export default class LongRangeCharacter extends Character {
  private _name: string;
  private _specialMoveName: string;

  constructor(name: string, specialMoveName: string) {
    super();
    this._name = name;
    this._specialMoveName = specialMoveName;
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}
