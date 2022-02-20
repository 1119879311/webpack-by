// eslint-disable-next-line import/prefer-default-export
module.exports = class AbstractAction {
    // eslint-disable-next-line class-methods-use-this
    handler() {
        throw new Error(' 必须实现类方法');
    }

    static create(...arg) {
        return new this(...arg);
    }
};
