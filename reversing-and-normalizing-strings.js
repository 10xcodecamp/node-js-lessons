const todaysDate = "2020-09-11";

const dateParts = todaysDate.split("-");
// console.log(dateParts);
const year = dateParts[0];
const month = dateParts[1];
const day = dateParts[2];
// console.log(year, month, day);

const greeting = "hello";
const greetingChars = greeting.split("");
// console.log(greetingChars);
const copyOfGreetingChars = [...greetingChars];
const reverseGreetingChars = copyOfGreetingChars.reverse();
// console.log(`Reversed chars: `, reverseGreetingChars);
// console.log(`Original chars: `, greetingChars);
const newGreeting = reverseGreetingChars.join("");
// console.log(`Here's our new greeting: ${newGreeting}`);

const query = "             GOOGLE FONTS              ";
const dbEntries = ["        Google Fonts    ", "Google Maps"];
// const dbEntry = dbEntries[0];
// const lowerCaseDbEntry = dbEntry.toLowerCase(); // "google fonts"
// console.log(lowerCaseDbEntry);
// const trimmedDbEntry = lowerCaseDbEntry.trim();
// console.log(trimmedDbEntry);
// const lowerCaseQuery;
// const trimmedQuery
const isInDb = query.toLowerCase().trim() === dbEntries[0].toLowerCase().trim();
if (isInDb) {
   console.log("We found a result!");
} else {
   console.log(`Sorry, couldn't find anything for ${query}`);
}
