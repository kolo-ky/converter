import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLoggaer } from '../handlers/interfaces/stream-logger';
import { ICommandExec } from './command.types';

export abstract class CommandExecutor<Input> {
	private logger: IStreamLoggaer;

	constructor(logger: IStreamLoggaer) {
		this.logger = logger;
	}

	protected abstract input(): Promise<Input>;
	protected abstract build(input: Input): ICommandExec;
	protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;
	protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLoggaer): void;

	public async execute(): Promise<void> {
		const input = await this.input();
		const command = this.build(input);
		const stream = this.spawn(command);

		this.processStream(stream, this.logger);
	}
} 