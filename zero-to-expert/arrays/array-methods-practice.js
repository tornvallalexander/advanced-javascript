const accounts = [
  {
    name: 'John',
    movements: [300, -200, 5000, -1000, 400, -600, -300, -500],
  },
  {
    name: 'Mary',
    movements: [-300, -500, -600, -1000, 1200, -200, -300, -500],
  },
  {
    name: 'Bob',
    movements: [-300, -500, 600, -127, 1200, 200, 300, -800],
  },
]

// get the total balance of all accounts
const totalBalance = accounts
  .flatMap(account => account.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalBalance);

// get the total deposits
const totalDeposits = accounts
  .flatMap(account => account.movements)
  .reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);

console.log(totalDeposits);

// get the total deposits and withdrawals
const {withdrawals, deposits} = accounts
  .flatMap(account => account.movements)
  .reduce((total, curr) => {
    total[curr > 0 ? "deposits" : "withdrawals"] += Math.abs(curr);
    return total;
  }, {withdrawals: 0, deposits: 0});

console.log(withdrawals, deposits);

// get the total number of deposits above 999
const totalDepositsAbove999 = accounts
  .flatMap(account => account.movements)
  .reduce((count, curr) => curr > 999 ? ++count : count, 0);

console.log(totalDepositsAbove999);

// capitalize the first letter of each word in the sentence
const sentence = "Alexander is a great programmer";
const capitalizeWords = (s) => {
  const excludedWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "yet", "so"];
  return s
    .split(" ")
    .map((word) => {
      return excludedWords.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    })
    .join(" ")
}

console.log(capitalizeWords(sentence));

// skipping join usage
const capitalizeWords2 = (s) => {
  const excludedWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "yet", "so"];
  return s
    .split(" ")
    .reduce((acc, curr) => {
      return excludedWords.includes(curr) ? acc + curr + " " : acc + curr[0].toUpperCase() + curr.slice(1) + " "
    }, "")
}

console.log(capitalizeWords2(sentence));