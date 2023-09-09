import { IStreamLoggaer } from '../../core/handlers/interfaces/stream-logger';

export class ConsoleLogger implements IStreamLoggaer {

	private constructor(){};

	public static getInstance(instance: ConsoleLogger) {
		if(instance) {
			return instance;
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