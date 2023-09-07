import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLoggaer } from './interfaces/stream-logger';

export class StreamHandler {
	constructor(private logger: IStreamLoggaer){}

	processOutput(stream: ChildProcessWithoutNullStreams) {
		stream.stdout.on('data', (data: any) => {
			this.logger.log(data);
		});

		stream.stderr.on('data', (data: any) => {
			this.logger.error(data);
		});

		stream.on('close', () => {
			this.logger.end();
		});
	}
}