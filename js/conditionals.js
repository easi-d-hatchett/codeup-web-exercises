"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
if (color === 'blue') {
    return "blue is the color of the sky";
}
else if (color === 'red')
{ return "strawberries are red";
    }
else if (color === "cyan"){
        return "i don't know anything about cyan"
    }
else {
    return "i dont know anything about that color"
}
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
switch(randomColor){
    case "blue":
      alert("blue is the the color of the sky");
    break;
    case "red":
        alert("strawberries are red");
    break;
        default:
            alert(" I don't know anything about " + randomColor);
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor =prompt("what is your favortie color?").toLowerCase();
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
 function calculateTotal(luckyNumber, totalAmount){
     if(luckyNumber === 0) {
    return `sorry no discount your total is \$${totalAmount}`
} else if(luckyNumber === 1) {
    return `you get %10 discount your total is \$${(totalAmount * .10).toFixed(2)}`;
} else if(luckyNumber === 2){
    return `you get %25 discount your total is \$${(totalAmount * .25).toFixed(2)}`;
} else if(luckyNumber === 3){
    return `you get %35 discount your total is \$${(totalAmount * .35).toFixed(2)}`;
} else if(luckyNumber === 4){
    return `you get %50 discount your total is \$${(totalAmount * .50).toFixed(2)}`;
} else if(luckyNumber === 5) {
         return `you get a %100 discount your total is \$${(0).toFixed(2)}`;
     }
}
console.log(calculateTotal(0,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6;
const luckyNumber = Math.floor(Math.random() * 6);
{
 let customerTotal =parseFloat("what is your total")
}
alert("Your lucky number is: " + luckyNumber)
alert("your total before discount is " + customerTotal )
alert("your price after the disocunt is" + calculateTotal(luckyNumber,customerTotal));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numberFacts(){
    let decision=confirm("would you like to enter a number?")
if(decision === true){
let userNumber =prompt ("what number would you like rto enter?");
if (userNumber > 0 && userNumber % 2 === 0) {
    let numHundred = parseFloat(userNumber) + 100;

}
}
}
