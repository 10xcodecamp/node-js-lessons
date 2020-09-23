const memoryCard = {
   answer: "The technical term for a hashtag is octothorpe.",
   createdAt: 1600298940085,
   id: "53c2bbc6-9ca6-4694-bb32-1da0179ba2dc",
   imagery: "Jim Thorpe has octopus arms and is cooking hash browns.",
   lastAttemptAt: 1600299031338,
   level: 1,
   nextAttemptAt: 1600896499782,
   totalSuccessfulAttempts: 1,
   userId: "83f6ec7f-d41e-47a9-9b87-bda15e7de6e0",
};

const keys = Object.keys(memoryCard);
// console.log(keys);

const values = Object.values(memoryCard);
// console.log(values);

const hasAnswerProp = memoryCard.hasOwnProperty("answer");
console.log(hasAnswerProp);

const hasFirstNameProp = memoryCard.hasOwnProperty("firstName");
console.log(hasFirstNameProp);
