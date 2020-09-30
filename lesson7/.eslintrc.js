// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    extends: ['eslint:recommended'],
    parserOptions: {
        // sourseType: 'module'
        ecmaVersion: 6,
    },
    env: {
        browse: true
    },
    rules: {
        "no-console": "error"
    } 
}