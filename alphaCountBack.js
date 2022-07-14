// Takes in a string that is a single letter. 
// Returns a string that is all the letters of the alphabet in a sequence counting backwards to the letter a. 
// It should be uppercase if the original letter is uppercase, lowercase if it is lowercase.

const alphaCountBack = (letter) => {
  const lowerCase = Array.from(Array(26)).map((e, i) =>
    String.fromCharCode(i + 97)
  );
  const upperCase = Array.from(Array(26)).map((e, i) =>
    String.fromCharCode(i + 65)
  );

  if (lowerCase.includes(letter)) {
    const indexOfLower = lowerCase.indexOf(letter);
    return lowerCase
      .slice(0, indexOfLower + 1)
      .reverse()
      .join("");
  } else {
    const indexOfUpper = upperCase.indexOf(letter);
    return upperCase
      .slice(0, indexOfUpper + 1)
      .reverse()
      .join("");
  }
};
