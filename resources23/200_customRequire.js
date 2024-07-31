require = function() {
    return { mocked: true, info: 'requireFn - function overriding' };
};

const test1 = require('edaina parledu');
console.log("test1 ====> ", test1);