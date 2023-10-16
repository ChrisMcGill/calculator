let digit = '';
let digitStored = 0;
let lastOperator = '';

const calcButton = document.querySelector('#calcButtons');
calcButton.style.gridTemplateColumns = "repeat(4, 1fr)";
calcButton.style.gridTemplateRows = "repeat(4, 1fr)";


function resetDigit(){
    return digit = '';
};
function resetDigitStored(){
    return digitStored = '';
};

function storeDigitAdd(){
    return digitStored = Number(digit) + Number(`${digitStored}`);
};
//needs fix wrong sequence
function storeDigitMinus(){
    return digitStored = Number(digit) - Number(`${digitStored}`);
};
function storeDigitTimes(){
    return digitStored = Number(digit) * Number(`${digitStored}`);
};
//needs fix divide by zero
function storeDigitDivide(){
    return digitStored = Number(digit) / Number(`${digitStored}`);
};
// each number can just be button
// operators can be a fuction for each one
// const to keep track of result?


// display screen with updating function
const calcScreen = document.querySelector('#calcScreen');
calcScreen.textContent = (`${digit}`);

const calcButtons = document.querySelector('#calcButtons');
calcButtons.addEventListener('mouseup', () => {
    calcScreen.textContent = (`${digit}`);
});


//number buttons
one.addEventListener('mousedown', () => {
    return digit += 1;
});
two.addEventListener('mousedown', () => {
    return digit += 2;
});
three.addEventListener('mousedown', () => {
    return digit += 3;
});
four.addEventListener('mousedown', () => {
    return digit += 4;
});
five.addEventListener('mousedown', () => {
    return digit += 5;
});
six.addEventListener('mousedown', () => {
    return digit += 6;
});
seven.addEventListener('mousedown', () => {
    return digit += 7;
});
eight.addEventListener('mousedown', () => {
    return digit += 8;
});
nine.addEventListener('mousedown', () => {
    return digit += 9;
});
zero.addEventListener('mousedown', () => {
    return digit += 0;
});

//plus function
// store digit on screen as number
//display it on top of screen digit stored
//reset let digit to 0

plus.addEventListener('mousedown', () =>{
    storeDigitAdd();
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '+';
});
times.addEventListener('mousedown', () =>{
    storeDigitTimes();
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '*';
});
divide.addEventListener('mousedown', () =>{
    storeDigitDivide();
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '/';
});
minus.addEventListener('mousedown', () =>{
    storeDigitMinus();
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    return lastOperater = '-';
});
//only displays on mousedown, sets to 0 on mouse up atm
equalButton.addEventListener('mousedown', () =>{
    if (lastOperator === '+'){
        storeDigitAdd();
    } else if (lastOperator === '*'){
        storeDigitTimes();
    } else if (lastOperator === '/'){
        storeDigitDivide();
    } else if (lastOperator === '-'){
        storeDigitMinus();
    } else {
        return;
    };
    resetDigit();
    console.log(digit);
    console.log(digitStored);
    calcScreen.textContent = (`${digitStored}`);
});

clear.addEventListener('mousedown', () => {
    resetDigit();
    resetDigitStored();
    console.log(digit);
    console.log(digitStored);
});



//make object that takes in every input
//= will return every item as string, remove the "" so it can be run as an operation
// make function that if same key pressed, they keep number going eg 7 7 = 77 not 7,7