let TheBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let check = TheBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });

console.log(finalString);
