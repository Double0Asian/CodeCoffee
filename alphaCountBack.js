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
