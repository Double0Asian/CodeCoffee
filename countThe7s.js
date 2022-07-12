// Takes in a number n. 
// Return the number of 7's that occur if you count from 1 through n. A 7 can occur in any digit. For example, the number 2778 contains two 7's and these should be counted separately.

const countSevens = (n) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let numbers = i.toString().split("");
    for (const digit of numbers) {
      if (digit === "7") ++count;
    }
  }

  return count;
};
