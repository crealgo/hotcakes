import fs from 'node:fs';
import childProcess from "node:child_process";

// find all packages
const pkgs = fs.readdirSync("packages", {withFileTypes: true})
	.filter(f => f.isDirectory())
	.map(f => `${f.path}/${f.name}`)


// add all packages to package.json
// for (const pkg of pkgs) {
// 	childProcess.spawnSync('npm -w ')
// }

// add all MIT
for (const pkg of pkgs) {
	console.log(`npm -w ${pkg} pkg set license=MIT`)
	childProcess.spawnSync(`npm -w ${pkg} pkg set license=MIT`)
}

// add tsconfig to all packages

// sync author
// sync reposistory


