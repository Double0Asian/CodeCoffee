const mergeLists = (arr1, arr2) => {
  // Create result array
  const result = [];
  // Loop over arr1, push results to result
  arr1.forEach((element) => result.push(element));
  // Loop over arr2, push results to result
  arr2.forEach((element) => result.push(element));

  result.sort((a, b) => a - b);

  return result;
};
