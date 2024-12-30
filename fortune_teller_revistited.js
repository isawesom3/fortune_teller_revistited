let question = prompt("Ask me a yes or no question and I'll predict the answer");
let length = question.length;
let fortune = Math.floor(Math.random() * length);
let numberOfFortunes = 6;
fortune = fortune % numberOfFortunes;

if (fortune === 0) {
  alert("Definitely");
} else if (fortune === 1) {
  alert("Probably not");
} else if (fortune === 2) {
  alert("The stars are cloudy and the answer is uncertain");
} else if (fortune === 3) {
  alert("It's your lucky day");
} else if (fortune === 4) {
  alert("Not a chance");
} else if (fortune === 5) {
  alert("It is likely");
}

let luckyNumber = Math.floor(Math.random() * 1000) + 1;
alert("Your lucky number is " + luckyNumber);
