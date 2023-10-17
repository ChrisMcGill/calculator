let digit = '';
let digitStored = 0;
let lastOperator = '';
let calculation = [];
let calculated = 0;

const calcButton = document.querySelector('#calcButtons');
calcButton.style.gridTemplateColumns = "repeat(4, 1fr)";
calcButton.style.gridTemplateRows = "repeat(4, 1fr)";

//reset functions - can be removed 
function resetDigit(){
    digit = '';
};
function resetDigitStored(){
    digitStored = 0;
};
function resetCalculation(){
    calculation = [];
};
function resetCalculated(){
    calculated = 0;
};

// display screen with updating function - currently constantly set to 0 so no use
const calcScreen = document.querySelector('#calcScreen');
calcScreen.textContent = (`${digit}`);

const calcButtons = document.querySelector('#calcButtons');
calcButtons.addEventListener('mouseup', () => {
    calcScreen.textContent = (`${digit}`);
});


//number buttons
// look in to way to parse element as number, will reduce all functions to 1
// appendNumber(button.textContent)
one.addEventListener('mousedown', () => {
    calculation.push(1);
    digit += 1;
});
two.addEventListener('mousedown', () => {
    calculation.push(2);
    digit += 2;
});
three.addEventListener('mousedown', () => {
    calculation.push(3);
    digit += 3;
});
four.addEventListener('mousedown', () => {
    calculation.push(4);
    digit += 4;
});
five.addEventListener('mousedown', () => {
    calculation.push(5);
    digit += 5;
});
six.addEventListener('mousedown', () => {
    calculation.push(6);
    digit += 6;
});
seven.addEventListener('mousedown', () => {
    calculation.push(7);
    digit += 7;
});
eight.addEventListener('mousedown', () => {
    calculation.push(8);
    digit += 8;
});
nine.addEventListener('mousedown', () => {
    calculation.push(9);
    digit += 9;
});
zero.addEventListener('mousedown', () => {
    calculation.push(0);
    digit += 0;
});

decimal.addEventListener('mousedown', () => {
    calculation.push('.');
    digit += '.';
});
// start.addEventListener('mousedown', () => {
//     calculation.push('(');
//     digit += '(';
// });
// finish.addEventListener('mousedown', () => {
//     calculation.push(')');
//     digit += ')';
// });    work just using finish button for other function atm


finish.addEventListener('mousedown', () => {
    console.log(calculation);
}); 

// store digit on screen as number
//display it on top of screen digit stored

plus.addEventListener('mousedown', () =>{
    calculation.push(' + ');
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '+';
});
times.addEventListener('mousedown', () =>{
    calculation.push(' * ');
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '*';
});
divide.addEventListener('mousedown', () =>{
    calculation.push(' / ');
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '/';
});
minus.addEventListener('mousedown', () =>{
    calculation.push(' - ');
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '-';
});
//only displays on mousedown, sets to 0 on mouse up atm
equalButton.addEventListener('mousedown', () =>{
    calculated = (calculation.join(''));
    console.log(calculated);
});

clear.addEventListener('mousedown', () => {
    resetDigit();
    resetDigitStored();
    resetCalculation();
    resetCalculated();
    console.log(digit);
    console.log(digitStored);
});


// if + - / * return else loops thorugh array to return up top, also break on length
//set max numbers on screen by rounding if.length> certain amount

// function storeDigitAdd(){
//     return digitStored = Number(digit) + Number(`${digitStored}`);
// };
// //needs fix wrong sequence
// function storeDigitMinus(){
//     return digitStored = Number(digit) - Number(`${digitStored}`);
// };
// function storeDigitTimes(){
//     return digitStored = Number(digit) * Number(`${digitStored}`);
// };
// //needs fix divide by zero
// function storeDigitDivide(){
//     return digitStored = Number(digit) / Number(`${digitStored}`);
// };