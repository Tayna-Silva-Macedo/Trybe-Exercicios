import Teacher from './Teacher';

export default abstract class Evaluation {
  private _teacher: Teacher;

  constructor(private _score: number, teacher: Teacher) {
    this.score = _score;
    this._teacher = teacher;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontuação deve ser positiva.');

    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }
}
