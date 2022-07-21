// Takes in an object whose values are all strings. Return a new object that only contains the key/values where the key exists as a value in the original object.

const saveKeysThatAreValues = (obj) => {
  // Create result object
  const result = {};
  // Store keys that are stored as values in obj
  const values = Object.values(obj);
  
  // Loop over values array
  for (const el of values) {
    // Check if el in values array is a key in obj
    if (el in obj) {
      // Assign key/value pair to result
      result[el] = obj[el];
    }
  }
  return result;
};