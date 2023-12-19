// 2-> Question: Count the number of vowels in a given string.

const countVowels = (str) => {
    const splittedString = str.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < splittedString.length; i++) {
        if (splittedString[i] === 'a'
            || splittedString[i] === 'e'
            || splittedString[i] === 'i'
            || splittedString[i] === 'i'
            || splittedString[i] === 'o'
            || splittedString[i] === 'u') {
            vowelCount++;
        }
    }

    return vowelCount
}

const numberOfVowels = countVowels("Hello World");
console.log("Number of Vowels :", numberOfVowels);