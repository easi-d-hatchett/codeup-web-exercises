(function(){
    "use strict";
let userInput;
while (true) {
    userInput = prompt("Enter an odd number between 1 and 50: ");
    if (userInput >= 1 && userInput <= 50 && userInput % 2 === 1){
        break;
    }
}
 console.log(userInput);

for (let i = 1; i <= 50; i += 2 ) {
    if (i === userInput) {
        console.log(`oops gonna skip ${userInput}`);
        continue;
    }
    console.log(`here is an odd number: ${i}`)
}
})();