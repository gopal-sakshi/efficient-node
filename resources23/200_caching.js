const cache1 = require('./200_cachingTest');
console.log('cache1 ====> ', cache1);

for (let i=0; i<1e5; i++) { 
    for (let i=0; i<1e5; i++) { }
}

// console.log("cached files23 ====> ", require.cache);

// node caches the 1st require & doesnt load the file on 2nd require
const cache2 = require('./200_cachingTest');
console.log('cache2 ====> ', cache2);

/*
    cache registry ===> simply an object that has a property for every required module.
    delete a property from require.cache to invalidate that cache
*/

delete require.cache[`${__dirname}/200_cachingTest.js`];
const cache3 = require('./200_cachingTest');
console.log('cache3 ====> ', cache3);