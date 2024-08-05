function squareDigits(num) {
    let numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);

        let squaredDigit = digit * digit;

        result += squaredDigit.toString();
    }

    return parseInt(result);
}

console.log(squareDigits(3212)); 
console.log(squareDigits(2112));