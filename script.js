let digit = 0;

const calcButton = document.querySelector('#calcButtons');
calcButton.style.gridTemplateColumns = "repeat(4, 1fr)";
calcButton.style.gridTemplateRows = "repeat(4, 1fr)";

console.log(3 + 5);

function Add(){
    //display + on screen
};


// each number can just be button
// operators can be a fuction for each one
// const to keep track of result?


// display screen with updating function
const calcScreen = document.querySelector('#calcScreen');
calcScreen.textContent = (`${digit}`);

calcButtons.addEventListener('mouseup', () => {
    calcScreen.textContent = (`${digit}`);
});


//number buttons
one.addEventListener('mousedown', () => {
    return digit = 1;
});
two.addEventListener('mousedown', () => {
    return digit = 2;
});
three.addEventListener('mousedown', () => {
    return digit = 3;
});
four.addEventListener('mousedown', () => {
    return digit = 4;
});
five.addEventListener('mousedown', () => {
    return digit = 5;
});
six.addEventListener('mousedown', () => {
    return digit = 6;
});
seven.addEventListener('mousedown', () => {
    return digit = 7;
});
eight.addEventListener('mousedown', () => {
    return digit = 8;
});
nine.addEventListener('mousedown', () => {
    return digit = 9;
});
zero.addEventListener('mousedown', () => {
    return digit = 0;
});

//make object that takes in every input
//= will return every item as string, remove the "" so it can be run as an operation
// make function that if same key pressed, they keep number going eg 7 7 = 77 not 7,7