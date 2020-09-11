const holidays = [
   ["Holiday", "Date", "Is a federal holiday?"],
   ["New Year's Day", 20200101, true],
   ["Martin Luther King, Jr. Day", 20200120, true],
   ["Mike's Birthday", 20200421, false],
   ["Memorial Day", 20200525, true],
   ["Independence Day", 20200704, true],
   ["Labor Day", 20200907, true],
   ["Veterans Day", 20201111, true],
   ["Thanksgiving Day", 20201126, true],
   ["Christmas Day", 20201225, true],
];

// Create a list of only federal holidays
let federalHolidays = [];
for (let i = 0; i < holidays.length; i++) {
   // console.log(holidays[i]);
   // if it is a federal holiday...
   const holiday = holidays[i];
   const isFederalHoliday = holiday[2]; // true or false

   if (isFederalHoliday === true) {
      federalHolidays = federalHolidays.concat([holiday]);
   }
}
// console.log(federalHolidays);

// Create a list of holiday dates; only the dates from holidays
const holidayValues = holidays.flat();
// console.log(holidayValues);

let holidayDates = [];
for (let i = 0; i < holidayValues.length; i++) {
   const value = holidayValues[i];
   // if the value is a number, concat it with holidayDates
   if (typeof value === "number") {
      // oh hey, can you convert them to strings?
      const numAsString = String(value);
      holidayDates = holidayDates.concat(numAsString);
   }
}
console.log(holidayDates);
