// Takes in an object whose values are all strings. Return a new object that only contains the key/values where the key exists as a value in the original object.

const saveKeysThatAreValues = (obj) => {
  // Create result object
  const result = {};
  // Store keys that are stored as values in obj
  const keys = [];
  // Loop over obj
  for (const key in obj) {
    // Store values in keys array
    keys.push(obj[key]);
  }
  // Loop over keys array
  for (const key of keys) {
    // Check if key in keys array is a key in obj
    if (key in obj) {
      // Assign key/value pair to result
      result[key] = obj[key];
    }
  }
  return result;
};