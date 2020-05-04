/*
You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

#Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

1) the smallest number you got
2) the index i of the digit d you took, i as small as possible
3) the index j (as small as possible) where you insert this digit d to have the smallest number.

smallest(209917) --> [29917, 0, 1]
smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
*/

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

function smallest(n) {
    let iter = `${n}`.length, res = new Map();
    for (let i = 0; i < iter; i++) {
        for (let j = 0; j < iter; j++) {
            let number = `${n}`.split('').move(i, j).join('');
            if (!res.has(+number)) res.set(+number, [i, j]);
        }
    }
    let min = Math.min(...res.keys());
    return [min, ...res.get(min)];
}