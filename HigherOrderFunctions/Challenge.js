let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((ele) => isNaN(parseInt(ele)))
  .map((ele) => (ele === "_" ? " " : ele[0]))
  .reduce((acc, curr, index) => index <= 16 ? acc + curr : acc);

console.log(solution);