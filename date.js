const lessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500);
// console.log(lessonCreatedAt);
const loggedAt = Date.now();
// console.log(loggedAt);
// console.log(typeof loggedAt);

const testedAt = new Date(2020, 8, 12, 5);
const testedAtAsNum = testedAt.getTime();
// console.log(testedAtAsNum);

const createdAt = new Date(Date.now());
// console.log(createdAt);
const year = createdAt.getFullYear();
// console.log(year);
const month = createdAt.getMonth();
// console.log(month);
const day = createdAt.getDate();
// console.log(day);
const hour = createdAt.getHours();
// console.log(hour);
const minutes = createdAt.getMinutes();
// console.log(minutes);
const seconds = createdAt.getSeconds();
// console.log(seconds);
const milliseconds = createdAt.getMilliseconds();
// console.log(milliseconds);

// TODO: 20200911

const prefix = String(year);
const suffix = String(month);
const result = prefix + suffix;
console.log(result);
