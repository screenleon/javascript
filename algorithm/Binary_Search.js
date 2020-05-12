/*
Once an array is sorted, we can quickly locate items in the array by doing a binary search. Binary search is different from other divide and conquer algorithms in that it is mostly divide based (nothing needs to be conquered). The concept behind binary search will be useful for understanding the partition and quicksort algorithms, presented in the randomization chapter.

Finding an item in an already sorted array is similar to finding a name in a phonebook: you can start by flipping the book open toward the middle. If the name you're looking for is on that page, you stop. If you went too far, you can start the process again with the first half of the book. If the name you're searching for appears later than the page, you start from the second half of the book instead. You repeat this process, narrowing down your search space by half each time, until you find what you were looking for (or, alternatively, find where what you were looking for would have been if it were present).
*/

let rawArray = [];
const rawArrayLength = Math.ceil(Math.random() * 20);
for (let index = 0; index < rawArrayLength; index++) {
    rawArray.push(Math.ceil(Math.random() * 100));
}
const purpose = rawArray[0];

const binarySearch = (searchArray, goal) => {
    var left = 0;
    var right = searchArray.length;

    while (right !== left) {
        if (right - left === 1) {
            if (searchArray[left] === goal) return left;
            else return -1;
        }
        var mid = Math.floor((left + right) / 2);
        if (searchArray[mid] > goal) {
            right = mid;
        } else if (searchArray[mid] < goal) {
            left = mid;
        } else {
            return mid;
        }
    }
    return -1;
};

const binarySearchRecursive = (searchArray, goal) => {
    return recursiveSearch(searchArray, goal, 0, searchArray.length);
}

const recursiveSearch = (searchArray, goal, start, end) => {
    if (start === end) return -1;
    let length = end - start;
    if (length === 1) {
        if (goal === searchArray[start]) return start
        else return -1;
    }
    let min = Math.floor((start + end) / 2);
    if (goal === searchArray[min]) return min;
    else if (goal > searchArray[min]) return recursiveSearch(searchArray, goal, min + 1, end);
    else return recursiveSearch(searchArray, goal, start, min);
}

rawArray.sort((a, b) => a - b);
console.log(rawArray);
console.log('goal:', purpose);
console.log('array length:', rawArray.length)
console.log();

console.time('Binary Search');
const binarySearchIndex = binarySearch(rawArray, purpose);
console.timeEnd('Binary Search');

console.time('Binary Search recursive');
const binarySearchRecursiveIndex = binarySearchRecursive(rawArray, purpose);
console.timeEnd('Binary Search recursive');

console.log();
console.log(binarySearchIndex === binarySearchRecursiveIndex);