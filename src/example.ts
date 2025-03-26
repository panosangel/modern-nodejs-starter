const name: string = 'Panos';

type Status = 'INIT' | 'DRAFT' | 'COMPLETED' | 'CANCELED';

function printLogMessage(status: Status, message: string = '') {
  console.log(`[${status}] ${message}`);
}

class Logger {
  constructor(private status: Status) {}

  printMessage(message: string): void {
    console.log(`[${this.status}] ${message}`);
  }
}

printLogMessage('INIT', 'Hello World!');

const completedLogger = new Logger('COMPLETED');
completedLogger.printMessage('...and Goodbye!');

export { name, type Status, Logger, printLogMessage };
