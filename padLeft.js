// Given a number (4),
// Pad it with zeroes, n amount of times (up to 3 chars)

// 4 => 004
// 40 => 040
// 400 => 400
// 4000 => 4000 (or return an error, saying the number exceeds the padding)

function padLeft(num, width, char) {
   // width should be the total width of the completed string
   // A width of 4 is 0006 and 0060 and 0600 for example.
   const numAsStr = String(num);
   let padding = "";
   for (let i = 0; i < width; i++) {
      padding += char;
   }
   console.log(`Padding: ${padding}`);
   // console.log("pizza".slice(-4)); // when slice is given a negative num, add that negative num to the string length, and that's where the slice starts.
   const concattedStr = padding + numAsStr; // 000000 + 6

   if (numAsStr.length >= width) {
      console.log(`${numAsStr.length} is >= the width of ${width}`);
      return numAsStr; // return a string
   }

   const slicedStr = concattedStr.slice(-width);
   return slicedStr; // returns a string
}

const num = 50;
const paddedNum = padLeft(num, 3, "0");
console.log("Here is your padded num: ", paddedNum);

const numAsStr = String(num);
const newPaddedNum = numAsStr.padStart(3, "0");
console.log("Here is your NEW padded num: ", newPaddedNum);
