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

const query = "           GOOGLE FONTS              ";
const dbEntries = ["Google Fonts", "Google Maps"];
const lowerCaseQuery = query.toLowerCase();
const trimmedQuery = lowerCaseQuery.trim();
const isInDb = trimmedQuery === dbEntries[0].toLowerCase().trim();
if (isInDb) {
   console.log("Here is your result!");
} else {
   console.log(`Sorry, couldn't find anything for ${query}`);
}
