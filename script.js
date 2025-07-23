let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;
let display = document.getElementById("display");
let operatorClicked = false;

//assigning the buttons to variables
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");   
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");


const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");


//adding event listeners to the buttons
zero.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10;
        display.textContent = display.textContent + secondNumber;
    }
});

one.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 1;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 1;
        display.textContent = display.textContent + secondNumber;

    }
});

two.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 2;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 2;
        display.textContent = display.textContent + secondNumber;
    }   
});

three.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 3;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 3;
        display.textContent = display.textContent + secondNumber;
    }
}); 

four.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 4;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 4;
        display.textContent = display.textContent + secondNumber;
    }   
});

five.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 5;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 5;
        display.textContent = display.textContent + secondNumber;
    }      
});

six.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 6;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 6;
        display.textContent = display.textContent + secondNumber;
    }      
}); 

seven.addEventListener("click",()=>{                                    
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 7;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 7;
        display.textContent = display.textContent + secondNumber;
    }
});

eight.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 8;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 8;
        display.textContent = display.textContent + secondNumber;
    }   
});

nine.addEventListener("click",()=>{
    if (operatorClicked == false){
        firstNumber = firstNumber * 10 + 9;
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber * 10 + 9;
        display.textContent = display.textContent + secondNumber;
    }      
}); 

clear.addEventListener("click",()=>{
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    result = 0;
    display.textContent = "";
});

plus.addEventListener("click",()=>{
    operator = "+";
    operatorClicked = true;
    display.textContent = display.textContent + operator;

});

minus.addEventListener("click",()=>{
    operator = "-";
    operatorClicked = true;
    display.textContent = display.textContent + operator;
});

divide.addEventListener("click",()=>{
    operator = "/";
    operatorClicked = true;
    display.textContent = display.textContent + operator;
});

multiply.addEventListener("click",()=>{
    operator = "*";
    operatorClicked = true;
    display.textContent = display.textContent + operator;
});

equals.addEventListener("click",()=>{
    result = operate(firstNumber,secondNumber,operator);
    display.textContent = result;
    firstNumber = result;
    secondNumber = 0;
    operator = "";
    operatorClicked = false;
    
});




function addFunction(num1,num2){
    return num1 + num2;
}

function subFunction(num1,num2){
    return num1 - num2;
}

function divideFunction(num1,num2){
    return num1 / num2;
}

function multiplyFunction(num1,num2){
    return num1 * num2;
}

function operate(num1,num2,operator){
    console.log(num1,num2,operator);
    if (operator == "+"){
        return addFunction(num1,num2);
    }else if (operator == "-"){
        return subFunction(num1,num2);
    }else if (operator == "/"){
        return divideFunction(num1,num2);
    }else if (operator == "*"){
        return multiplyFunction(num1,num2);

    }
}