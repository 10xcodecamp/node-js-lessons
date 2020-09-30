const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
const userInput = "(517) 555-1234";
const isValidPhone = phonePattern.test(userInput);
// console.log(isValidPhone);
