import EvaluationResult from './EvaluationResult';
import IEnrollable from './interfaces/IEnrollable';
import Person from './Person';

export default class Student extends Person implements IEnrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16)
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  sumGrades(): number {
    return [...this._evaluationsResults].reduce(
      (acc, note) => note.score + acc,
      0
    );
  }

  calculateAverage(): number {
    const sumGrades = this.sumGrades();
    const numberOfGrades = this._evaluationsResults.length;

    return Math.round(sumGrades / numberOfGrades);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}
