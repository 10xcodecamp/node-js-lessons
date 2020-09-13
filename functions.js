// console.log("hello");

// In (pass it) ->

// Do something
// 1. Purely related to the input and output (pure function)
// 2. Or cause an effect elsewhere in the app (a side effect)

// Get something out (return) ->

// Input a string
// Reverse it
// Output that reversed string

function toReverse(str) {
   try {
      const chars = str.split("");
      const reversedChars = chars.reverse();
      const reversedStr = reversedChars.join("");
      return reversedStr;
   } catch {
      return "Error: There is a problem with toReverse()";
   }
}

const reversedString = toReverse("cat");
// console.log(reversedString);

// given a string and a number
// check the length of the string
// if the length is over the number, return true
// else return false

// isOver

function checkIsOver(str, num) {
   console.log(`String: ${str}\nNumber: ${num}`);
   return str.length > num; // true
}

const userInput = "Hello world";
const maxChars = 240;
const hasError = checkIsOver(userInput, maxChars);
console.log(hasError);

const id = "#char-counter";
const message = "You have exceeded the character limit.";
// showError(hasError, id, message);

// function showError(hasError, id, message) {
//    const errorId = `${id}-error`;
//    if (hasError) {
//       $(id).show(errorId);
//       $(errorId).html(message);
//    } else {
//       $(id).hide(errorId);
//    }
// }
