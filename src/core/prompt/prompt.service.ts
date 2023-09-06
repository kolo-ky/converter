import inquirer from 'inquirer';
import { PromptInputType } from './prompt.types';

export class PromptService {
	public async input<T>(message: string, type: PromptInputType) {
		const { result } = await inquirer.prompt<{result: T}>([
			{
				type,
				name: 'result',
				message,
			}
		]);

		return result;
	}
}