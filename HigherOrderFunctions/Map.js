/* Map */
// Create New Array

// let myNums = [1, 2, 3, 4, 5, 6];
// let addSelf = myNums.map((e) => e + e);

// let swappingCases = "elZERo";
// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// let invertedNumber = [1, -10, -20, 15, 100, -30];
// let inv = invertedNumber.map((ele) => -ele);

// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers
//   .split("")
//   .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
//   .join("");

// nums = [2, 3, 6, 6, 5];

// nums.sort();

// let myList = nums
//   .map((e, i) => (e !== nums[i + 1] ? e : null))
//   .filter((e) => !isNaN(parseInt(e)));

// console.log(myList[myList.length - 2]);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myList = [...new Set(nums)];

myList.sort((a, b) => a - b);

console.log(myList.slice(-1));
