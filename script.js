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

function display() {
    let btn = document.querySelectorAll('input[type=button]');
    let display = document.getElementById('calc-display')
    console.log(btn)
    let expressionString = [];
    let operators = ['+', '-', '*', '/']
    let operand;
    btn.forEach( (item) => {
        item.addEventListener('click', () => {
            let value = item.value;
            if(operators.includes(value)) {
                console.log('OK');
                operand = expressionString.join('')
                console.log(operand)
                display.value = '';
            } else if(value == '=') {
                console.log('RESULT')
            } else {
                expressionString.push(value);
                display.value = expressionString.join('');
            }
            console.log(expressionString);           
        })
    })
}

display();
