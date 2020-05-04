let rawArray = [];
const rawArrayLength = Math.ceil(Math.random() * 100);
for(let index = 0; index < rawArrayLength; index++){
  rawArray.push(Math.ceil(Math.random() * 1000));
}

let array1 = rawArray.slice(0, Math.ceil(rawArrayLength / 2));
let array2 = rawArray.slice(Math.ceil(rawArrayLength / 2));
let array3 = [];

while(array1[0] || array2[0]){
  if(Math.min(...array1) > Math.min(...array2)){
    array3.push(Math.min(...array2));
    array2.splice(array2.findIndex(element => element === Math.min(...array2)),1);
  }else {
    array3.push(Math.min(...array1));
    array1.splice(array1.findIndex(element => element === Math.min(...array1)),1);
  }
}
console.log(array3);
