import fs from 'node:fs';
import childProcess from "node:child_process";

// find all packages
const pkgs = fs.readdirSync("packages", { withFileTypes: true })
	.filter(f => f.isDirectory())
	.map(f => `${f.path}/${f.name}`)


// add all packages to package.json
// for (const pkg of pkgs) {
// 	childProcess.spawnSync('npm -w ')
// }

// add all MIT
for (const pkg of pkgs) {
	console.log(`-w ${pkg}`)

	// add package
	if (!fs.existsSync(`${pkg}/package.json`)) {
		console.log(`-w ${pkg} is not initialized, fixing...`)
		childProcess.execSync(`npm -fw ${pkg} init `)
	}

	// sync license, sync author
	childProcess.execSync(`npm -w ${pkg} pkg set license=MIT`)
	childProcess.execSync(`npm -w ${pkg} pkg set author="Crealgo, LLC <hello.crealgo@gmail.com> (https://crealgo.com)"`)
	childProcess.execSync(`npm -w ${pkg} pkg set files="dist"`)

	// add tsconfig to all packages
	fs.writeFileSync(`${pkg}/tsconfig.json`, JSON.stringify({
		"extends": "../../tsconfig.json"
	}, null, 2))
}


// sync reposistory


