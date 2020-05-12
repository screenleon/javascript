// Roman Numerals Helper

/*
Description:
Task
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

| Symbol | Value | |----| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |
*/

const RomanNumerals = {
    'values': { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 },
    fromRoman(romanString) {
        const regExp = /(C?M)|(C?D)|(X?C)|(X?L)|(I?X)|(I?V)|(I)/g;
        let sum = 0;
        for (let roman of romanString.match(regExp)) {
            sum += this.values[roman];
        }
        return sum;
    },
    toRoman(value) {
        var output = "";
        Object.keys(this.values).forEach((num) => {
            while (value >= this.values[num]) {
                value -= this.values[num];
                output += num;
            }
        });
        return output;
    }
}

console.log(RomanNumerals.fromRoman('MCMXCI'));  //1991
console.log(RomanNumerals.fromRoman('MMVII'));   //2007
console.log(RomanNumerals.fromRoman('MDCLXIX')); //1669

console.log(RomanNumerals.toRoman(1990))         //MCMXC
console.log(RomanNumerals.toRoman(2008))         //MMVIII