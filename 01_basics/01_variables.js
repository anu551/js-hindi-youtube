const accountId = 123456789;
let accountEmail = "hitesh@example.com";
 var accountPassword = "mySecurePassword123"; //perfer to use let and not var for variable declaration in modern JavaScript
let accountState;

// accountId = 2 // This will throw an error because accountId is a constant and cannot be reassigned.
console.log(accountId); // Output: 123456789
console.log(accountEmail); // Output: hitesh@example.com
console.log(accountPassword); // Output: mySecurePassword123
console.log(accountState); // Output: undefined
console.table({ accountId, accountEmail, accountPassword, accountState }); // Output: A table displaying the variable names and their values         