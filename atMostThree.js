// Incomplete

// Takes in a string str and returns a new string. This string only contains the characters from the initial string, but is limited to just the first three instances of each particular character. If a character is used more than 3 times, stop including occurrences of that character in the new string.

const atMostThree = (str) => {
  // Create result string
  let result = "";
  // Convert str to array
  const strToArr = str.split("");
  // Store unique characters
  const unique = strToArr.filter((element, index) => {
    return strToArr.indexOf(element) === index;
  });
  // Create object that stores unique characters as keys with initial value of 0;
  const countForEachChar = {};
  unique.forEach(element => {
    countForEachChar[element] = 0;
  });

  // Loop over strToArr
    // Check
};

// aaaaaaabbaaccc
// kittens are both fuzzy and soft
// asdfjlkasfdjlajdslkfjlaksfklasdlkfjlkasdfkljlskdfjklajflkajslkdfjlaksdfjlasdflkjlaskdfjlkasdjf
