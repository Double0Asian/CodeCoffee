// Returns a string which, when printed, displays a tree. 
// The function take two arguments - str and size. 
// The tree is constructed of the character passed in as str, and is the height & width of size.

const christmasTree = (str, size) => {
  let result = "";
  let space = " ";
  let filler = ` ${str}`;
  let lineBreak = "\n";

  // prettier-ignore
  if (typeof str !== "string" || typeof size !== "number" || str.length > 1) return result;

  for (let row = 1; row < size; row++) {
    if (row === 1) {
      result += `${space.repeat(size - 1)}${str}${lineBreak}`;
    } else if (row > 1 && row < size) {
      result += `${space.repeat(size - row - 1)}${filler.repeat(row)}${lineBreak}`;
    }
  }
  result += `${str}${filler.repeat(size - 1)}`;
  
  return result;
};
