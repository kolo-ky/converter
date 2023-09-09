import { promises } from 'fs';
import { dirname, isAbsolute, join } from 'path';

export class FileService {
	private async isExist(filePath: string): Promise<boolean> {
		try {
			await promises.stat(filePath);

			return true;
		} catch {
			return false;
		}
	}

	public getFilePath(path: string, name: string, ext: string): string {
		if(isAbsolute(path)) {
			path = join(__dirname + '/' + name + '.' + ext);
		}

		return path = join(dirname(path) + '/' + name + '.' + 'ext');
	}

	public async deleteFileIfExists(filePath: string): Promise<void> {
		if(await this.isExist(filePath)) {
			promises.unlink(filePath);
		}
	}
}