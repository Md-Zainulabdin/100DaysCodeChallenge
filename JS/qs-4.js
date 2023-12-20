// 4 -> Question: Check if a string is a palindrome.


const checkPalindrome = (str) => {
    const reversedString = str.split("").reverse().join("");

    if (reversedString == str) {
        return true;
    }

    return false
}

const result = checkPalindrome("rotator") ? "Palindrome" : "Not Palindrome";
console.log("result:", result);
