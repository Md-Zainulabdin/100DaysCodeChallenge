// 25 -> How does the optional chaining operator (?.) work,
// and how can it be used to access nested properties of an object?

const obj = {
    level1: {
        level2: {
            level3: 'value'
        }
    }
};


const resultWithOptionalChaining = obj?.level1?.level2?.level3;
console.log(resultWithOptionalChaining);