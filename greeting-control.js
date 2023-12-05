import {getRandomGreeting} from "./greeting-logic.js";
document.forms.nameSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#name").value;
    let greeting = getRandomGreeting();
   let p =  document.createElement("p");
   p.innerText = `${greeting}, ${name}.`;
   document.querySelector("#message-here").innerHTML = "";
   document.querySelector("#message-here").appendChild(p);
})