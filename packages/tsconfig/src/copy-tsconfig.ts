import fs from 'node:fs';
import path from 'node:path';

const getTsConfigContent = async (tsconfigPath: string) => {
	const contents = await fs.promises.readFile(tsconfigPath, { encoding: 'utf-8' });

	return contents;
}

const getPublishFolder = async (packageConfigPath: string) => {
	const contents = await fs.promises.readFile(packageConfigPath, { encoding: 'utf-8' });
	const json = JSON.parse(contents);

	return path.resolve(json.files[0]);
}

async function main() {
	const tsconfigPath = path.resolve("../../tsconfig.json");
	const packageConfigPath = path.resolve('./package.json');

	if (!fs.existsSync(tsconfigPath)) {
		throw new Error(`${tsconfigPath} doesn't exist.`)
	}

	if (!fs.existsSync(packageConfigPath)) {
		throw new Error(`${packageConfigPath} doesn't exist.`)
	}

	const publishFolder = await getPublishFolder(packageConfigPath);
	const tsconfigContent = await getTsConfigContent(tsconfigPath);

	if (fs.existsSync(publishFolder)) {
		console.log(publishFolder)
		await fs.promises.rm(publishFolder, { recursive: true });
	}

	await fs.promises.mkdir(publishFolder);
	await fs.promises.writeFile(`${publishFolder}/tsconfig.json`, tsconfigContent)
}

void main();
