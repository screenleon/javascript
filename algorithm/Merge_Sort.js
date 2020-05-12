/*
The problem that merge sort solves is general sorting: given an unordered array of elements that have a total ordering, create an array that has the same elements sorted. More precisely, for an array a with indexes 1 through n, if the condition

for all i, j such that 1 ≤ i < j ≤ n then a[i] ≤ a[j]
holds, then a is said to be sorted.

Following the divide and conquer methodology, how can a be broken up into smaller subproblems? Because a is an array of n elements, we might want to start by breaking the array into two arrays of size n/2 elements. These smaller arrays will also be unsorted and it is meaningful to sort these smaller problems; thus we can consider these smaller arrays "similar".
*/

let rawArray = [];
const rawArrayLength = Math.ceil(Math.random() * 100);
for (let index = 0; index < rawArrayLength; index++) {
  rawArray.push(Math.ceil(Math.random() * 1000));
}

const mergeSort = (array1, array2) => {
  let sortArray = [];
  while (array1.length > 0 || array2.length > 0) {
    if (Math.min(...array1) > Math.min(...array2)) {
      sortArray.push(Math.min(...array2));
      array2.splice(array2.findIndex(element => element === Math.min(...array2)), 1);
    } else {
      sortArray.push(Math.min(...array1));
      array1.splice(array1.findIndex(element => element === Math.min(...array1)), 1);
    }
  }
  return sortArray;
}

console.log(rawArray);
console.log(mergeSort(rawArray.slice(0, Math.ceil(rawArrayLength / 2)), rawArray.slice(Math.ceil(rawArrayLength / 2))));