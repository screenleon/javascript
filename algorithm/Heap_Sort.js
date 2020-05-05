let rawArray = [];
const rawArrayLength = Math.ceil(Math.random() * 20);
for (let index = 0; index < rawArrayLength; index++) {
  rawArray.push(Math.ceil(Math.random() * 100));
}

function bottomUpMinRootSort(array) {
  let index = array.length;
  while (index !== 0) {
    index--;
    if (array[index] < array[Math.ceil((index - 2) / 2)]) {
      [array[index], array[Math.ceil((index - 2) / 2)]] = [array[Math.ceil((index - 2) / 2)], array[index]];
      index = array.length;
    }
  }
  return array;
}

function heapSort(array) {
  let sortArray = [];
  for (let unsortedIndex = array.length - 1; unsortedIndex >= 0; unsortedIndex--) {
    const shiftRoot = array.shift();
    array = bottomUpMinRootSort(array.slice(0, unsortedIndex));
    sortArray.push(shiftRoot);
  }
  return sortArray;
}

function displayTree(array) {
  console.log('tree:');
  for (let index = 1; Math.pow(2, index - 1) - 1 <= array.length; index++) {
    const levelNumberString = array.slice(Math.pow(2, index - 1) - 1, Math.pow(2, index) - 1).join(', ');
    console.log(levelNumberString);
  }
}

console.log(rawArray);
console.log();

const bottomUpMinRootArray = bottomUpMinRootSort(rawArray);
displayTree(bottomUpMinRootArray);
console.log()

const heapArray = heapSort(bottomUpMinRootArray);
console.log(heapArray);


