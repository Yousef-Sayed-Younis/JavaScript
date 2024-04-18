function findLongestWord(string) {
  return string
    .split(" ")
    .reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
}

console.log(findLongestWord("Hello Yellow Bye Hola GoodMorning"));
