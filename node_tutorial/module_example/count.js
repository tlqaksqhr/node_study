export const counter = (arr) => {
    return 'There are ' + arr.length + ' elements in this array.';
};

export const adder = (a, b) => {
    return `The sum of the 2 numbers is ${a+b}`;
};

export const pi = 3.142;

/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
