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
*/
let result = operate(firstNumber, secondNumber, operator);
console.log(result);

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
        game('seven');
    })
    eight_div.addEventListener('click', function() {
        game('eight');
    })
    nine_div.addEventListener('click', function() {
        game('nine');
    })


//pendiente

    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })

    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })

    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
}
main();

