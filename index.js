/* Write a function to determine whether a given word is equal to 100 points, assuming a = 1, b = 2, ... z = 26. For example, QUARTER == 100. */

function inHundredPoints(word) {
    const total = word.toLowerCase().split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
    return total === 100;
}

fetch("https://gist.githubusercontent.com/ibanez270dx/6fe246ab7146dc482667808c11151beb/raw/b08e3449082c92a96dfc5a6340ea804bbb2e7e9e/words")
    .then(res => res.text())
    .then(text => {
        const words = text.split("\n");
        const hundredPointsWords = words.filter(inHundredPoints);

        console.log("100-point words: ", hundredPointsWords);
        console.log("Total found:", hundredPointsWords.length);
    })
    .catch(err => console.error(err));