export interface IStreamLoggaer {
	log(...args: any[]): void;
	error(...args: any[]): void;
	end(): void;
}