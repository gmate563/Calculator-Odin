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

const display = document.querySelector(".display");
const n0Button = document.querySelector("#n0");
const n1Button = document.querySelector("#n1");
const n2Button = document.querySelector("#n2");
const n3Button = document.querySelector("#n3");
const n4Button = document.querySelector("#n4");
const n5Button = document.querySelector("#n5");
const n6Button = document.querySelector("#n6");
const n7Button = document.querySelector("#n7");
const n8Button = document.querySelector("#n8");
const n9Button = document.querySelector("#n9");
const multiplyButton = document.querySelector("#multiply");
const divButton = document.querySelector("#divide");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const equalsButton = document.querySelector("#equals");
const clrButton = document.querySelector("#CLR");



n0Button.addEventListener("click", () => {display.textContent+="0"});
n1Button.addEventListener("click", () => {display.textContent+="1"});
n2Button.addEventListener("click", () => {display.textContent+="2"});
n3Button.addEventListener("click", () => {display.textContent+="3"});
n4Button.addEventListener("click", () => {display.textContent+="4"});
n5Button.addEventListener("click", () => {display.textContent+="5"});
n6Button.addEventListener("click", () => {display.textContent+="6"});
n7Button.addEventListener("click", () => {display.textContent+="7"});
n8Button.addEventListener("click", () => {display.textContent+="8"});
n9Button.addEventListener("click", () => {display.textContent+="9"});

multiplyButton.addEventListener("click", () => {
    number1 = parseInt(display.textContent);
    display.textContent+="*";
    operator = "*";
});

divButton.addEventListener("click", () => {
    number1 = parseInt(display.textContent);
    display.textContent+="/";
    operator = "/";
});

addButton.addEventListener("click", () => {
    number1 = parseInt(display.textContent);
    display.textContent+="+";
    operator = "+";
});

subtractButton.addEventListener("click", () => {
    number1 = parseInt(display.textContent);
    display.textContent+="-";
    operator = "-";
});

equalsButton.addEventListener("click", () => {
    const index = display.textContent.indexOf(operator);
    number2 = parseInt((display.textContent).substring(index+1));
    display.textContent = operate(operator, number1, number2);
})

clrButton.addEventListener("click", () => {display.textContent=""})



