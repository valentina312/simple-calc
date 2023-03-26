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
    if (result > Math.floor(result)) {
        return result.toFixed(2);
    } else {
        return result;
    }
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
                
         
        // If button is an operator save the operand and clear display
        if(operators.includes(value)) {
            expressionString.push(operand)
            operand = '';
            // If there's only 1 item in the expression, save the operator
            if (expressionString.length == 1) {
                expressionString.push(value);
            /* Else if expression has 3 element, calculate result and
            save it as first element for the next expression */        
            } else if (expressionString.length == 3) {
                console.log(expressionString)
                let result = operate(+expressionString[0], +expressionString[2], expressionString[1])
                
                display.value = result
                expressionString.length = 0;
                operand = result;
                // Save operator if it's not '='
                if (value != '=') {
                    expressionString[1] = value;
                    expressionString[0] = result
                    operand = '';        
                }
                // TO DO: FIX ENABLE DECIMAL BUTTON AND DISPLAY AFTER =
            }           
        // If button is AC clear memory and display
        } else if (value == 'AC') {
            expressionString.length = 0;
            operand = '';
            display.value = '';
        // If button is CANC, delete last number 
        } else if (value == 'CANC') {
            operand = operand.toString().slice(0, -1)
            display.value = operand
        // If button is a number or '.', save it as string to display
        } else if (item.className == 'operands') {
            operand += value;
            display.value = operand;
            let pointBtn = document.getElementById('point');
            if (display.value.includes('.')) {    
                pointBtn.disabled = true;
            } else {
                pointBtn.disabled = false;
            }
        }
        })
    })
}

display();
