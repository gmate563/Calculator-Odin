function add (num1, num2){
    return num1 + num2;
}

function subtract (minuend, subtrahend){
    return minuend - subtrahend;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (dividend, divisor){
    return dividend / divisor;
}

let number1 = 0;
let number2 = 0;
let operator = "";

function operate (op, n1, n2){
    if (op == "+"){
        return add(n1, n2);
    }
    else if (op == "-"){
        return subtract(n1, n2);
    }
    else if (op == "*"){
        return multiply(n1, n2);
    }
    else{
        return divide(n1, n2);
    }
}

