// 15 -> Question: Determine if a year is a leap year or not.

const findLeapYear = (year) => {
    if ((year % 4 === 0 || year % 100 !== 0) || year % 400 === 0) {
        return true
    }

    return false;
}

const leapYear = 2024;

const isLeap = findLeapYear(leapYear);
console.log(isLeap ? `${leapYear} is a leap year` : `${leapYear} is not a leap year`);