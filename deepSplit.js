const deepSplit = (strings, sep) => {
  let result = [];

  for (const string of strings) {
    let temp = string.split(sep);
    for (const item of temp) {
      result.push(item);
    }
  }
  return result;
};
