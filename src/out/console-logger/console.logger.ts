import { IStreamLogger } from '../../core/handlers/interfaces/stream-logger'

export class ConsoleLogger implements IStreamLogger {
	private static logger: ConsoleLogger
	private constructor() {}

	public static getInstance() {
		if (ConsoleLogger.logger) {
			return ConsoleLogger.logger
		}

		return new ConsoleLogger()
	}

	public log(...args: any[]): void {
		console.log(args)
	}

	public error(...args: any[]): void {
		console.error(args)
	}

	public end(): void {
		console.log('operation complete')
	}
}
