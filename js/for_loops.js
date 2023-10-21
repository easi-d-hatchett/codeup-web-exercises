"use strict";
function showMultiplicationTable(inputNum) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${inputNum} x ${i} = ${inputNum * i}`);
    }
}
showMultiplicationTable(7);
showMultiplicationTable(5);

    for (let i = 1; i <= 10;  i++) {
        let randomNumber = Math.floor(Math.random() * 181 + 20);
        if(randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`)
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }
for (let i = 1; i <= 9; i++) {
    let numStr = i.toString()
    console.log(numStr.repeat(i));
}
for (let i = 100; i >= 1; i -= 5) {
    console.log(i);
}