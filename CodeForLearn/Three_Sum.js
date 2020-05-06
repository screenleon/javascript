/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const usedMemory = () => {
    return Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
  }
  
  // brute force
  var threeSum = function (nums) {
    let threeSumArray = [];
    nums = nums.sort((a, b) => a - b);
    for (let index = 0; index < nums.length; index++) {
      for (let indexNext = index + 1; indexNext < nums.length; indexNext++) {
        for (let indexFinal = indexNext + 1; indexFinal < nums.length; indexFinal++) {
          if (nums[index] + nums[indexNext] + nums[indexFinal] === 0) {
            if (threeSumArray.every(element => JSON.stringify(element) !== JSON.stringify([nums[index], nums[indexNext], nums[indexFinal]]))) {
              threeSumArray.push([nums[index], nums[indexNext], nums[indexFinal]]);
            }
          }
        }
      }
    }
    return threeSumArray;
  };
  
  var threeSumTwoPoint = function (nums) {
    let [solution, left, right] = [[], 0, nums.length - 1];
    if (nums.length < 3) return solution;
    nums.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]
  
    for (let [index, number] of nums.entries()) {
      if (number > 0) return solution;
      if (number === nums[index - 1]) continue;
      //number -4 
      left = index + 1; // -1  
      right = nums.length - 1;// 2
      let temp = 0;
  
      while (left < right) {
        temp = number + nums[left] + nums[right];
        if (temp === 0) {
          solution.push([number, nums[left], nums[right]])
          left++;
          right--;
  
          while (left < right && nums[left] == nums[left - 1]) {
            left++;
          }
  
          while (left < right && nums[right] == nums[right + 1]) {
            right--;
          }
        } else if (temp > 0) {
          right--
        } else if (temp < 0) {
          left++
        }
      }
    }
    return solution;
  };
  
  const threeSumHashMap = (nums) => {
    const resArr = [];
    const len = nums.length; 
    
    for(let i = 0; i < len; i++) {
        if (i !== 0 && nums[i] === nums[i - 1])  // Skip numbers if they are the same
            continue;
  
        const map = new Map();
        for (let j = i + 1; j < len; j++) {
            if (map.has((-nums[i]-nums[j]))) { // It finds in the hashmap the missing number to make 0
                resArr.push([ nums[i], nums[j], (-nums[i]-nums[j]) ]);
                
                while(j + 1 < len && nums[j] === nums[j + 1])  // Skip numbers if they are the same
                    j++;
            }
            map.set(nums[j]); // Set the number for future references in the loop
        }
    }
    
    return resArr; // O(n^3)
  };
  
  const array = [-11, -3, -6, 12, -15, -13, -7, -3, 13, -2, -10, 3, 12, -12, 6, -6, 12, 9, -2, -12, 14, 11, -4, 11, -8, 8, 0, -12, 4, -5, 10, 8, 7, 11, -3, 7, 5, -3, -11, 3, 11, -13, 14, 8, 12, 5, -12, 10, -8, -7, 5, -9, -11, -14, 9, -12, 1, -6, -8, -10, 4, 9, 6, -3, -3, -12, 11, 9, 1, 8, -10, -3, 2, -11, -10, -1, 1, -15, -6, 8, -7, 6, 6, -10, 7, 0, -7, -7, 9, -8, -9, -9, -14, 12, -5, -10, -15, -9, -15, -7, 6, -10, 5, -7, -14, 3, 8, 2, 3, 9, -12, 4, 1, 9, 1, -15, -13, 9, -14, 11, 9];
  
  
  let solution = [], left = 0, right = solution.length - 1;
  
  console.time('threeSum');
  let test = threeSum(array);
  console.timeEnd('threeSum');
  
  // console.time('threeSumTwoPoint');
  // let test2 = threeSumTwoPoint(array);
  // console.timeEnd('threeSumTwoPoint');
  // console.log(test);
  // console.log();
  
  // console.log(test2);
  // console.log();
  
  console.log(`${usedMemory()} MB`);