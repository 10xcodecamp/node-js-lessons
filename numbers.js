const priceOfSquirtgun = 3.99;
const floorOfSquirtgun = Math.floor(priceOfSquirtgun);
// console.log(`The floor of this item is: ${floorOfSquirtgun}`);
const ceilOfSquirtgun = Math.ceil(priceOfSquirtgun);
// console.log(`The ceiling of this item is: ${ceilOfSquirtgun}`);
const roundedPrice = Math.round(priceOfSquirtgun);
// console.log(`The rounded price of this item is: ${roundedPrice}`);
const smallestNum = Math.min(3, 5, 1);
// console.log(`The smallest number is: ${smallestNum}`);
const prices = [3.99, 7.99, 0.99];
const lowestPrice = Math.min(...prices);
// console.log(`The lowest price is: ${lowestPrice}`);
const highestPrice = Math.max(...prices);
// console.log(`The highest price is: ${highestPrice}`);

// console.log(`Here is your random number: ${Math.random()}`);

function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
}

const randomArbitraryNum = getRandomArbitrary(1, 16);
// console.log(`Here is your random arbitrary number: ${randomArbitraryNum}`);

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}

const randomInt = getRandomInt(1, 3);
// console.log(`Here is your random INTEGER: ${randomInt}`);

const weirdness = Math.round(55);

const isNaN = Number.isNaN(weirdness);
// console.log(`The weirdness is not a number: ${isNaN}`);

// const convertedNum = Number.parseFloat("3pizza"); // Number("3")
const convertedNum = Number("3.1419pizza"); // Number("3")
// console.log(convertedNum);

const priceOfCup = "3.2555";

function round(num, numOfDecPlaces) {
   const convertedNum = Number(num);
   const roundedNumAsStr = convertedNum.toFixed(numOfDecPlaces);
   const convertedRoundedNum = Number(roundedNumAsStr);
   return convertedRoundedNum;
}

const roundedPriceOfCup = round(priceOfCup, 0);
console.log(roundedPriceOfCup);
