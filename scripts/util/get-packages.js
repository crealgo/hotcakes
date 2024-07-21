import fs from 'node:fs';

export default function getPackages() {
	return fs.readdirSync("packages", { withFileTypes: true })
		.filter(f => f.isDirectory())
		.map(f => `${f.path}/${f.name}`)
}
