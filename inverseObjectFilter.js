//takes in an object and an array of strings. The values in the object are strings. Create a copy of this object that only contains the keys/values if the value is NOT present in the array.

const inverseObjectFilter = (obj, valueExclusionList) => {
  const result = obj;

  for (const value of valueExclusionList) {
    for (const key in obj) {
      if (obj[key] === value) {
        delete obj[key];
      }
    }
  }

  return result;
};
