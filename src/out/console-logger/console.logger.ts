import { IStreamLoggaer } from '../../core/handlers/interfaces/stream-logger';

export class ConsoleLogger implements IStreamLoggaer {
	private instance!: ConsoleLogger;

	public getInstance() {
		if(this.instance) {
			return this.instance;
		}

		return new ConsoleLogger();
	}

	public log(...args: any[]): void {
		console.log(args);
	}

	public error(...args: any[]): void {
		console.error(args);
	}

	public end(): void {
		console.log('operation complete');
	}
}