import Logger from './Logger';

export default class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger2: ', param);
  }
}
