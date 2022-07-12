const minMaxNumScraper = (strOfNums) => {
  // Create result array
  const result = [];
  // Convert strOfNums to array
  const arrOfNums = strOfNums.split(" ");
  // User Math.min and Math.max to get highest number of array
  const lowestNum = Math.min(...arrOfNums);
  const highestNum = Math.max(...arrOfNums);
  // Push lowestNum and highestNum to result
  result.push(lowestNum, highestNum);

  return result;
};
