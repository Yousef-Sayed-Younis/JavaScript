/* Map */
// Create New Array

// let myNums = [1, 2, 3, 4, 5, 6];
// let addSelf = myNums.map((e) => e + e);

let swappingCases = "elZERo";
let sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

let invertedNumber = [1, -10, -20, 15, 100, -30];
let inv = invertedNumber.map((ele) => -ele);

let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
