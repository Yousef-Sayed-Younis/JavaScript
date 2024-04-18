let nums = [10, 20, 15, 30];
//                       First Sum | Sec Num
let add = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
}, /* Initial Value 'acc' */);

let addition = nums.reduce((acc, current) => acc + current, 0)

console.log(addition)
