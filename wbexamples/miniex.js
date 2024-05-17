let age = 15;
while (age  < 18) { // 
  console.log(`You are ${age} years old. That is not old enough`);
  age++; // increment +1 every loop 
  //console.log(`Happy birthday, You are ${age} years old`);
  if(age == 17) {
    console.log(`Just one more year to go before you are 18`);
  }
}

console.log("--------------------------------------------------");

let count = 10;
while (count >= 1) {
  if (count == 1) {
    console.log(`Countdown: 1. Ready for launch!`);
  } else {
    console.log(`Countdown: ${count}`);
  }
  count--;
}

console.log("--------------------------------------------------");

let countdown = 10;
while (countdown > 1) { // Loop until countdown is greater than 1
  console.log(`Countdown: ${countdown}`);
  countdown--; // Decrement countdown at the end of the loop
}
console.log("Countdown: 1. Ready for launch!"); // Special message outside the loop


/*Here is a do-while example:
let counter = 10;

do {
  console.log(`Countdown: ${counter}`);
  counter--; // decrement the counter by 1
} while (counter > 0);

console.log("Countdown: 0. Ready for launch");*/