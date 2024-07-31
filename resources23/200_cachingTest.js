console.log('it is just logged once ');
console.log("irrespective of how many times it is require()");
console.log("because, node uses cached version of this file");

module.exports = { time23: new Date().toISOString() }