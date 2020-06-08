// 1051. Height Checker
/*
Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

Example 1:
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.

Example 2:
Input: heights = [5,1,2,3,4]
Output: 5

Example 3:
Input: heights = [1,2,3,4,5]
Output: 0
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const sortHeights = mergeSort(heights.slice(0, Math.ceil(heights.length / 2)), heights.slice(Math.ceil(heights.length / 2)));
    let count = 0;
    for (let index = 0; index < heights.length; index++) {
        if (heights[index] !== sortHeights[index]) count++
    }
    return count;
};

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