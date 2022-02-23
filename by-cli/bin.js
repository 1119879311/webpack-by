#!/usr/bin/env node
const { program } = require('commander');
const { loadCommand } = require('./commands');

const booststrap = () => {
    program
        .name('be-ci')
        .version('0.0.1', '-v, --version', 'Output the current version.')
        .usage('[command] [options]')
        .helpOption('-h, --help', 'Output usage information.');

    loadCommand(program);
    console.log('cwd--', process.cwd());
    program.parse();
};
booststrap();
