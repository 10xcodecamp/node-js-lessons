const name = "             Mike Zetlow            ";

const trimmedName = name.trim();
// console.log(`The trimmed name is ${trimmedName}.`);

const startTrimmedName = name.trimStart(); // can also use trimLeft()
// console.log(`The start/left trimmed name is ${startTrimmedName}.`);

const endTrimmedName = name.trimEnd(); // can also use trimRight()
// console.log(`The end/right trimmed name is ${endTrimmedName}.`);

const nameLength = trimmedName.length;
// console.log(`The length of ${trimmedName} is ${nameLength}.`);

const upperCasedName = trimmedName.toUpperCase();
// console.log(`HEY ${upperCasedName}!`);

const lowerCasedName = trimmedName.toLowerCase();
// console.log(`shhhh.... hi ${lowerCasedName}...`);

let birthday = `4/21/1981`;

const indexOfMonth = birthday.indexOf(`4`);
// console.log(
//    `The string "4" is found at the ${indexOfMonth} index of ${birthday}.`
// );

const firstChar = birthday[0];
// console.log(`The first char of ${birthday} is ${firstChar}.`);

const indexOfFirstSlash = birthday.indexOf("/");
// console.log(
//    `The first slash in ${birthday} is found at the ${indexOfFirstSlash} index.`
// );

const indexOfSecondSlash = birthday.indexOf("/", 3);
// console.log(
//    `The second slash in ${birthday} is found at the ${indexOfSecondSlash} index.`
// );

const indexOfLastSlash = birthday.lastIndexOf("/");
// console.log(
//    `The last slash in ${birthday} is found at the ${indexOfLastSlash} index.`
// );

const indexOfSecondToLastSlash = birthday.lastIndexOf("/", 3);
// console.log(
//    `The second to last slash in ${birthday} is found at the ${indexOfSecondToLastSlash} index.`
// );

const strToSearchFor = "21";
const indexOfStr = birthday.indexOf(strToSearchFor);
// console.log(
//    `The string of ${strToSearchFor} in ${birthday} is found at the ${indexOfStr} index.`
// );

if (birthday.indexOf(strToSearchFor) === -1) {
   // console.log(
   //    `${birthday} does not have this string in it: ${strToSearchFor}`
   // );
} else {
   // console.log(`${birthday} has this string in it: ${strToSearchFor}`);
}

// lastIndexOf as well returns -1 if something is not found. It just searches right to left.

birthday = `4/21/1980`;

const delimiter = "/";
const indexOfMonthDayDelimiter = birthday.indexOf(delimiter);
const indexOfDayYearDelimiter = birthday.lastIndexOf(delimiter);
const month = birthday.slice(0, indexOfMonthDayDelimiter);
const day = birthday.slice(
   indexOfMonthDayDelimiter + 1,
   indexOfDayYearDelimiter
);
let year = birthday.slice(indexOfDayYearDelimiter + 1);
console.log(`The month in ${birthday} is ${month}.`);
console.log(`The day in ${birthday} is ${day}.`);
console.log(`The year in ${birthday} is ${year}.`);

year = "1981";
if (birthday.includes(year)) {
   console.log(`The birthday ${birthday} includes the string: ${year}.`);
} else {
   console.log(
      `The birthday ${birthday} does not include the string: ${year}.`
   );
}
