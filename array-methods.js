// arrays === lists

const holidays = [
   "New Year's Day (January 1)",
   "Birthday of Martin Luther King, Jr.",
   "Washington's Birthday (Third Monday in February)",
   "Memorial Day (Last Monday in May)",
   "Independence Day (July 4)",
   "Labor Day (First Monday in September)",
   "Columbus Day (Second Monday in October)",
];

const firstDay = holidays[0];
console.log(`The first day in this array is ${firstDay}.`);
const daysLength = holidays.length;
console.log(`The length of this array is ${daysLength}.`);
const lastDay = holidays[daysLength - 1]; // holidays [6]
console.log(`The last day in this array is ${lastDay}.`);

const favoriteHoliday = "Independence Day (July 4)";
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday);
console.log(
   `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
);

const specificHoliday = "Mike's Birthday (April 21)";

// if (holidays.indexOf(specificHoliday) === -1) {
//    console.log(`No, ${specificHoliday} is not a holiday.`);
// } else {
//    console.log(
//       `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
//          specificHoliday
//       )} index in the list of holidays.`
//    );
// }

// works the same with lastIndexOf()

if (holidays.includes(specificHoliday)) {
   console.log(
      `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
         specificHoliday
      )} index in the list of holidays.`
   );
} else {
   console.log(`No, ${specificHoliday} is not a holiday.`);
}

const replaceableHoliday = "Washington's Birthday (Third Monday in February)";
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
console.log(
   `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holidays list.`
);

const newHolidays = [...holidays];
newHolidays[indexOfReplaceableHoliday] = specificHoliday;
console.log(`Here's a list of our old holidays:\n`, holidays);
console.log(`Here's a list of our new holidays:\n`, newHolidays);
