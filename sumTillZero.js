const tillZero = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item !== 0) {
      result += item;
    } else {
      break;
    }
  }

  return result;
};
