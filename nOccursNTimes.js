// Takes in a number n and a list and returns true if a list contains that number n times.

const nOccursNTimes = (n, values) => {
  let count = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] === n) count++;
  }

  return count === n;
};
