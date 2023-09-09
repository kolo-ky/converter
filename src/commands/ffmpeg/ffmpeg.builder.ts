export class FfmpegBuider {
	private inputPath!: string;
	private options: Map<string, string> = new Map();

	constructor() {
		this.options.set('-c:v', 'libx264');
	}

	public input(inputPath: string): FfmpegBuider {
		this.inputPath = inputPath;

		return this;
	}

	public setVideoSize(width: number, height: number): FfmpegBuider {
		this.options.set('-s', `${width}x${height}`);

		return this;
	}

	public output(outputPath: string): string[] {
		if(!this.input) {
			throw new Error('input not found...');
		}

		const args: string[] = ['-i', this.inputPath];

		this.options.forEach((value, key) => {
			args.push(key);
			args.push(value);
		});

		args.push(outputPath);

		return args;
	}
}