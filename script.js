function add(a, b) {
    return (a + b);
}

function substract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide (a, b) {
    if(b == 0) {
        return 'LOL';
    } else {
        return (a / b);
    }
}

function operate(a, b, operator) {
    let result;
    if(operator == '+') {
        result = add(a, b);
    } else if (operator == '-') {
        result = substract(a, b);
    } else if (operator == '*') {
        result = multiply(a, b);
    } else {
        result = divide(a, b);
    }
    return result.toFixed(2);
}

console.log(operate(5, 6, '/'))
