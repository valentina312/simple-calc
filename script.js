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
    } else if (operator == '/') {
        result = divide(a, b);
    }
    // If result has decimal, round them
    if (result % 1 != 0) {
        return result.toFixed(2);
    }
    return result;
}

function display() {
    let btn = document.querySelectorAll('input[type=button]');
    let display = document.getElementById('calc-display')
    let expressionString = [];
    let operators = ['+', '-', '*', '/', '=']
    let operand = '';
    btn.forEach( (item) => {
        item.addEventListener('click', () => {
            let value = item.value;
                if(operators.includes(value)) {
                    expressionString.push(operand)
                    operand = '';
                    console.log(expressionString)
                    if (expressionString.length == 1) {
                        console.log('OK');
                        expressionString.push(value);
                        console.log(expressionString)
                    } else if (expressionString.length == 3) {
                        expressionString.push(operand)
                        let result = operate(parseInt(expressionString[0]), parseInt(expressionString[2]), expressionString[1])
                        console.log('RESULT')
                        console.log(result)
                        display.value = result
                        expressionString.length = 0;
                        expressionString[0] = result;
                        if (value != '=') {
                            console.log(value)
                            expressionString[1] = value;
                        }
                        console.log(expressionString)
                    }           
                } else {
                    operand += value;
                    display.value = operand;
                }
            }
        )
    })
}

display();
