import Logger from './Logger';

export default class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}
