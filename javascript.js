//LOGIC
function operate(firstNumber, secondNumber, operator){
    let result;
    switch (operator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    return result;
}
/*
let firstNumber = parseFloat(prompt("Input the first number",0));
let secondNumber = parseFloat(prompt("Input the second number",0));
let operator = prompt("Input the operator. It can be '+', '-', '*' or '/'", "")
let result = operate(firstNumber, secondNumber, operator);
console.log(result);
*/

//DOM variables. To control this elements by Js
const seven_div = document.getElementById('seven');
const eight_div = document.getElementById('eight');
const nine_div = document.getElementById('nine');
const divide_div = document.getElementById('divide');

const four_div = document.getElementById('four');
const five_div = document.getElementById('five');
const six_div = document.getElementById('six');
const multiply_div = document.getElementById('multiply');

const one_div = document.getElementById('one');
const two_div = document.getElementById('two');
const three_div = document.getElementById('three');
const subtract_div = document.getElementById('subtract');

const happy_div = document.getElementById('happy');
const zero_div = document.getElementById('zero');
const add_div = document.getElementById('add');
const equal_div = document.getElementById('equal');


//MAIN
function main() {
    seven_div.addEventListener('click', function() {
        operate('seven');
    })
    eight_div.addEventListener('click', function() {
        operate('eight');
    })
    nine_div.addEventListener('click', function() {
        operate('nine');
    })
    divide_div.addEventListener('click', function() {
        operate('divide');
    })

    four_div.addEventListener('click', function() {
        operate('four');
    })
    five_div.addEventListener('click', function() {
        operate('five');
    })
    six_div.addEventListener('click', function() {
        operate('six');
    })
    multiply_div.addEventListener('click', function() {
        operate('multiply');
    })

    one_div.addEventListener('click', function() {
        operate('one');
    })
    two_div.addEventListener('click', function() {
        operate('two');
    })
    three_div.addEventListener('click', function() {
        operate('three');
    })
    subtract_div.addEventListener('click', function() {
        operate('subtract');
    })

    happy_div.addEventListener('click', function() {
        operate('happy');
    })
    zero_div.addEventListener('click', function() {
        operate('zero');
    })
    add_div.addEventListener('click', function() {
        operate('add');
    })
    equal_div.addEventListener('click', function() {
        operate('equal');
    })
}
main();

