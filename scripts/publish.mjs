#!/usr/bin/env node
/**
 * Reads the published version from the latest git tag for this package,
 * temporarily writes it to package.json, runs pnpm publish, then resets
 * the version back to the placeholder so package.json never stores real versions.
 */
import {execSync} from 'node:child_process';
import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

const PLACEHOLDER = '0.0.0-semantically-versioned';

const pkgPath = join(process.cwd(), 'package.json');
const raw = readFileSync(pkgPath, 'utf8');
const pkg = JSON.parse(raw);
const {name} = pkg;

const tagOutput = execSync(`git tag --list "${name}@*" --sort=-v:refname`).toString().trim();
if (!tagOutput) {
    throw new Error(`No git tags found for ${name}. Run "nx release version" first.`);
}

const version = tagOutput.split('\n')[0].replace(`${name}@`, '');
console.log(`Publishing ${name}@${version}`);

const serialize = (p) => JSON.stringify(p, null, 2) + '\n';

writeFileSync(pkgPath, serialize({...pkg, version}));

try {
    execSync('pnpm publish --no-git-checks', {stdio: 'inherit'});
} finally {
    writeFileSync(pkgPath, serialize({...pkg, version: PLACEHOLDER}));
}
