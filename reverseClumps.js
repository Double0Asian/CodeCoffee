// Takes in an array arr and an integer n and reverses each sequence of n items in the array.

const reverseClumps = (arr, n) => {
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    const slice = arr.slice(i, i + n);
    result.push(slice.reverse());
  }

  return result.flat();
};

// reverseClumps([1, 2, 3, 4, 5, 6], 3)
// [3, 2, 1, 6, 5, 4]
