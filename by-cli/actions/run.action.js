const AbstractAction = require('./abstract.action');

module.exports = class RunAction extends AbstractAction {
    // eslint-disable-next-line class-methods-use-this
    handler(...args) {
        console.log('handler', ...args);
    }
};
