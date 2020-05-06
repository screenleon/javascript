Array.prototype.match = function (value) {
    return JSON.stringify(this) === JSON.stringify(value);
}

// const test1 = [1, 2, 3, 4, 5, 6]
// const test2 = ['1', '2', '3', '4', '5', '6']
// const test3 = [1, 2, 3, 4, 5, 6]
// console.log(test1.match(test2));
// console.log(test1.match(test3));