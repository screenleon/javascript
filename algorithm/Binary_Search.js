let rawArray = [];
const rawArrayLength = Math.ceil(Math.random() * 20);
for (let index = 0; index < rawArrayLength; index++) {
    rawArray.push(Math.ceil(Math.random() * 100));
}
const purpose = rawArray[0];

function binarySearch(searchArray, goal) {
    var left = 0;
    var right = searchArray.length;

    while (right - left !== 1) {
        var mid = Math.floor((left + right) / 2);

        if (searchArray[mid] > goal) {
            right = mid;
        } else if (searchArray[mid] < goal) {
            left = mid;
        } else {
            console.log(mid, searchArray[mid], goal);
            return mid;
        }
    }
    console.log(-1);
    return -1;
};

rawArray.sort((a, b) => a - b);
const pruposeIndex = binarySearch(rawArray, purpose);
console.log(rawArray.indexOf(pruposeIndex));