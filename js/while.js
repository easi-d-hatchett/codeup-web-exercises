(function(){
    "use strict";
let i = 2;
while (i <= 65536){
    console.log(i);
    i *= 2;
}
let allCones = Math.floor(Math.random() * (100 - 50) + 50 + 1)
console.log(`${allCones} ice cream cones need to be sold`)

do {
    let x = Math.floor(Math.random() * 5) + 1;
    if (allCones === 0) {
        console.log('yay! I sold them all!')
        break;

    }
    if (allCones >= x) {
        console.log(`${x} cones sold`);
        allCones = allCones - x
    } else if (allCones < x) {
        console.log(`Cannont sell you ${x} cones i only have ${allCones}`)
    }
}while (allCones >= 0);
})();


