const evenOddSplitter = (arr) => {
  const result = [[], []];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result[0].push(arr[i]);
    } else {
      result[1].push(arr[i]);
    }
  }

  return result;
};
