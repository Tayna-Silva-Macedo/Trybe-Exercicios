import ConsoleLogger from './ConsoleLogger';
import Database from './Database';
import Logger from './Logger';

export default class ExampleDataBase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}
