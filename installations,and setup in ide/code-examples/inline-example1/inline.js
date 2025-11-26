// function to calculate factorial of a number
function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
        return 1;
    }       
    return n * factorial(n - 1);
}

// example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: Factorial is not defined for negative numbers