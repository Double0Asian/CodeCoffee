//takes in an object and an array of strings. The values in the object are strings. Create a copy of this object that only contains the keys/values if the value is NOT present in the array.

// O(n*3) Linear time complexity
const inverseObjectFilter = (obj, valueExclusionList) => {
  const swappedKeyValues = {};
  const result = {};

  for (const key in obj) {
    swappedKeyValues[obj[key]] = key;
  }

  for (const value of valueExclusionList) {
    if (value in swappedKeyValues) delete swappedKeyValues[value];
  }

  for (const key in swappedKeyValues) {
    result[swappedKeyValues[key]] = key;
  }

  return result;
};
