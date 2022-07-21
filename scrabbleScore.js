// Takes in a string that is a word and returns its scrabble score. 
// In the game of Scrabble, each letter has a point value. 
// The score of each word is calculated by adding all the point values for each letter.


const letterValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, S: 1, T: 1, R: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10,
};

const scrabbleScore = (str) => {
    let result = 0;

    for (const char of str.toUpperCase()) {
        char in letterValues ? result += letterValues[char] : 0;
    }

    return result;
};
