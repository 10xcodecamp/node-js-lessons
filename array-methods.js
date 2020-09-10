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

const newHolidaysFromHr = [
   ["Veterans Day (November 11)", 2020, "Megan"],
   ["Thanksgiving Day (Fourth Thursday in November)", 2020, "Megan"],
   ["Christmas Day (December 25)", 2020, "Megan"],
];

const firstDay = holidays[0];
// console.log(`The first day in this array is ${firstDay}.`);
const daysLength = holidays.length;
// console.log(`The length of this array is ${daysLength}.`);
const lastDay = holidays[daysLength - 1]; // holidays [6]
// console.log(`The last day in this array is ${lastDay}.`);

const favoriteHoliday = "Independence Day (July 4)";
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday);
// console.log(
//    `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
// );

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
   // console.log(
   //    `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
   //       specificHoliday
   //    )} index in the list of holidays.`
   // );
} else {
   // console.log(`No, ${specificHoliday} is not a holiday.`);
}

const replaceableHoliday = "Washington's Birthday (Third Monday in February)";
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
// console.log(
//    `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holidays list.`
// );

const newHolidays = [...holidays];
newHolidays[indexOfReplaceableHoliday] = specificHoliday;
// console.log(`Here's a list of our old holidays:\n`, holidays);
console.log(`Here's a list of our new holidays:\n`, newHolidays);
console.log(`Here's a list of our new holidays from HR:\n`, newHolidaysFromHr);

// const allHolidays = newHolidays.concat(newHolidaysFromHr);
const allHolidays = [...newHolidays, ...newHolidaysFromHr];
console.log(`Here's a list of ALL holidays:\n`, allHolidays);
const allFlatHolidays = allHolidays.flat();
console.log(`Here's a list of ALL holidays, BUT FLAT!\n`, allFlatHolidays);
const allUniqHolidays = [...new Set(allFlatHolidays)];
console.log(`Here's a list of ALL UNIQUE holidays:\n`, allUniqHolidays);

const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020));
console.log(`Here are the first holidays:\n`, firstHolidays);
const secondHolidays = allUniqHolidays.slice(
   allUniqHolidays.indexOf("Thanksgiving Day (Fourth Thursday in November)")
);
console.log(`Here are the second holidays:\n`, secondHolidays);

const allCleanedUpHolidays = [...firstHolidays, ...secondHolidays];
console.log(
   `At long last, here is the final list of holidays:\n`,
   allCleanedUpHolidays
);
