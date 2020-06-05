// ATM

/*
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
*/

function solve(n) {
    // Your code here
    const dollars = [500, 200, 100, 50, 20, 10];
    let count = 0, index = 0;
    while (n > 0 && index < dollars.length) {
        if (n >= dollars[index]) {
            n -= dollars[index];
            count += 1;
        } else 
            index++;
    }
    return n === 0 ? count : -1;
}
console.log(solve(550));  // 2
console.log(solve(1250)); // 4