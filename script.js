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
    var expressionString = [];
    let operators = ['+', '-', '*', '/', '=']
    var operand = '';
    var result; 
    btn.forEach( (item) => {
        item.addEventListener('click', () => {
            let value = item.value;
   
        // If button is an operator save the operand and the operator
            if(operators.includes(value)) {
                expressionString.push(operand, value);
                
                // If expression has only 1 operand, display it    
                if (expressionString.length < 3) {
                    display.value = operand;
                    operand = '';
                /* Else if expression has 2 operand, calculate result, clear expression
                 and save result as first element for the next expression */  
                } else if (expressionString.length >= 3) {

                    result = operate(+expressionString[0], +expressionString[2], expressionString[1])
                    expressionString.length = 0;
                    expressionString[0] = result;
                    display.value = result;
                    
                    /* If operator is not '=' save it for next expression and
                    clear operand */
                    if (value != '=') { 
                        expressionString[1] = value;
                        operand = '';
                    // Else clear expression and save result as operand for display
                    } else {
                        expressionString.length = 0;
                        operand = result;
                    }                  
                }

            // If button is AC clear memory and display 0
            } else if (value == 'AC') {
                expressionString.length = 0;
                operand = '';
                display.value = '0';

            // If button is CANC, delete last number 
            } else if (value == 'CANC') {
                operand = operand.toString().slice(0, -1)
                display.value = operand;

            // If button is a number or '.', save it as string to display
            } else if (item.className == 'operands') {
                // If there is already a result, clear operand and result
                if (result) {
                    operand = '';
                    result = undefined;
                }
                operand += value;

                // Functionality for decimal button
                let pointBtn = document.getElementById('point');
                if (display.value.includes('.')) {    
                    pointBtn.disabled = true;
                } else {
                    pointBtn.disabled = false;
                }
                display.value = operand;

            }
        })
    })
}

display();
