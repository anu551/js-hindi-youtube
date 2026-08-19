 "use strict" // This directive is used to enable strict mode in JavaScript, which helps catch common coding mistakes and unsafe actions.

// alert(3+3); //we are using nodejs, not browser 

console.log(3
    +3); // Output: 6 code readability should be high

console.log("hitesh"); // Output: hitesh

console.log(1234567); // Output: 1234567

console.log(true); // Output: true

console.log(""); // Output: (an empty string)

console.log(null); // Output: null

let start;
console.log(start); // Output: undefined (since 'start' is declared but not initialized)

console.log(BigInt(123456789012345678901234567890)); // Output: 123456789012345678901234567890n (BigInt representation)

console.log(typeof start); // Output: undefined (the type of 'start' is undefined)

console.log(typeof null); // Output: object (this is a known quirk in JavaScript)
