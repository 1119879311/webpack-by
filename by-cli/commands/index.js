const AddCommand = require('./add.command');
const AddAction = require('../actions/add.action');

const loadCommand = (program) => {
    new AddCommand(AddAction.create()).load(program);
    const options = program.opts();
    console.log('options:', options);
};

exports.loadCommand = loadCommand;
