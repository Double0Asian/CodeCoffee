const minMaxNumScraper = (strOfNums) => {
  // Convert strOfNums to array and each element to number
  const arrOfNums = strOfNums.split(" ").map(Number);
  // Return array with lowest and highest number
  return [Math.min(...arrOfNums), Math.max(...arrOfNums)];
};
