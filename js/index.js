const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digits button');
const operationButtons = document.querySelectorAll('.opers button');

digitButtons.forEach( button => button.addEventListener('click', onDigitButtonPressed));
operationButtons.forEach( button => button.addEventListener('click', onOperationButtonPressed));

function onDigitButtonPressed(e){
    const digit = e.target.innerText;
    display.value += digit;
    
    while(display.value.length > 1 
        && display.value[0] === "0" 
        && display.value[1] !== ".") 
    {
        display.value = display.value.substr(1);
    }
    
    console.log("Digit button pressed: " + digit);
}

function onOperationButtonPressed(e){
    const operation = e.target.innerText;
    display.value += operation;
    console.log("Operation button pressed: " + operation);
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', equalPressed);

function equalPressed(){
    const lastIndex = display.value.length-1;
    if (display.value[lastIndex] === "0" && display.value[lastIndex-1] === "/")
    {
        display.value = 'Cannot divide by zero';
    }
    else {
        display.value = eval(display.value);
    }
}
document.querySelector('.cancel').addEventListener('click', cancelPresed)

function cancelPresed(){
    display.value ='';
}

document.querySelector('.decimal').addEventListener('click', decimalPresed)

function decimalPresed(){
    if (display.value === '')
    {
        display.value = '0';
    }
    display.value +='.';
}
document.querySelector('.sqrt').addEventListener('click', sqrtPresed)

function sqrtPresed(){
    display.value = Math.sqrt(eval(display.value));
}



