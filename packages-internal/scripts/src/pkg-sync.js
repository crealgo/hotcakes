#!/usr/bin/env node

import fs from 'node:fs';
import cp from "node:child_process";
import getPackages from './util/get-packages';

function main() {
	// find all packages
	const pkgs = getPackages();

	// add all MIT
	for (const pkg of pkgs) {
		console.log(`-w ${pkg}`)

		// add package
		if (!fs.existsSync(`${pkg}/package.json`)) {
			console.log(`-w ${pkg} is not initialized, fixing...`)
			cp.execSync(`npm -fw ${pkg} init `)
		}

		// sync license, sync author
		cp.execSync(`npm -w ${pkg} pkg set license=MIT`);
		cp.execSync(`npm -w ${pkg} pkg set author="Crealgo, LLC <hello.crealgo@gmail.com> (https://crealgo.com)"`);

		// add tsconfig to all packages
		const configString = JSON.stringify({ "extends": "../../tsconfig.json" }, null, 2);
		fs.writeFileSync(`${pkg}/tsconfig.json`, configString);

		// link package
		cp.execSync(`cd ${pkg} && npm link`);
	}

	// sync reposistory
	cp.execSync(`npm update`)
}

main();
